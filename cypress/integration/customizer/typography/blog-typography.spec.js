const setup = {
	textTransform: 'lowercase',
	fontWeight: '100',
	fontSize: {
		suffix: {
			mobile: 'px',
			tablet: 'px',
			desktop: 'px',
		},
		mobile: '10',
		tablet: '11',
		desktop: '12',
	},
	lineHeight: {
		suffix: {
			mobile: 'em',
			tablet: 'em',
			desktop: 'em',
		},
		mobile: '4',
		tablet: '3',
		desktop: '2',
	},
	letterSpacing: {
		mobile: '3',
		tablet: '2',
		desktop: '1',
	},
};

const settings = [
	{
		pageToVisit: '/',
		titleSelector: '.blog-entry-title',
		metaSelector: '.blog .nv-meta-list li',
		excerptSelector: '.entry-summary',
	},
	{
		pageToVisit: '/template-comments/',
		titleSelector: '.nv-title-meta-wrap .entry-title',
		metaSelector: '.single .nv-meta-list li',
		commentsSelector: '.single .comment-reply-title',
	},
];

const deviceMap = {
	desktop: {
		height: 1080,
		width: 1920,
	},
	tablet: {
		height: 1024,
		width: 768,
	},
	mobile: {
		height: 667,
		width: 375,
	},
};

describe('Blog Typography', () => {
	before('Sets up blog typography in customizer', () => {
		cy.goToCustomizer();
		cy.window().then((win) => {
			win.wp.customize
				.control('neve_archive_typography_post_title')
				.setting.set(setup);
			win.wp.customize
				.control('neve_archive_typography_post_excerpt')
				.setting.set(setup);
			win.wp.customize
				.control('neve_archive_typography_post_meta')
				.setting.set(setup);
			win.wp.customize
				.control('neve_single_post_typography_post_title')
				.setting.set(setup);
			win.wp.customize
				.control('neve_single_post_typography_post_meta')
				.setting.set(setup);
			win.wp.customize
				.control('neve_single_post_typography_comments_title')
				.setting.set(setup);
		});
		cy.aliasRestRoutes();
		cy.get('#save').click();
		cy.wait('@customizerSave').then((req) => {
			expect(req.response.body.success).to.be.true;
			expect(req.status).to.equal(200);
			cy.wait(2000);
		});
	});

	it('Test blog typography for transform and weight on frontend', () => {
		for (const i in settings) {
			const currentSettings = settings[i];

			cy.visit(currentSettings.pageToVisit);
			cy.get(currentSettings.titleSelector).each((elem) => {
				cy.testTransformAndWeight(
					elem,
					setup.textTransform,
					setup.fontWeight
				);
			});
			cy.get(currentSettings.metaSelector).each((elem) => {
				cy.testTransformAndWeight(
					elem,
					setup.textTransform,
					setup.fontWeight
				);
			});
			if (currentSettings && currentSettings.excerptSelector) {
				cy.get(currentSettings.excerptSelector).each((elem) => {
					cy.testTransformAndWeight(
						elem,
						setup.textTransform,
						setup.fontWeight
					);
				});
			}
			if (currentSettings && currentSettings.commentsSelector) {
				cy.get(currentSettings.commentsSelector).each((elem) => {
					cy.testTransformAndWeight(
						elem,
						setup.textTransform,
						setup.fontWeight
					);
				});
			}
		}
	});

	it('Test blog typography for size, line height, and spacing on frontend', () => {
		for (const i in settings) {
			const currentSettings = settings[i];

			cy.visit(currentSettings.pageToVisit);

			// eslint-disable-next-line array-callback-return
			Object.keys(deviceMap).map((device) => {
				// Change viewport.
				cy.viewport(deviceMap[device].width, deviceMap[device].height);

				cy.get(currentSettings.titleSelector).each((elem) => {
					cy.testSizeLineHeightSpacing(
						elem,
						setup.fontSize[device],
						setup.lineHeight[device],
						setup.letterSpacing[device]
					);
				});

				cy.get(currentSettings.metaSelector).each((elem) => {
					cy.testSizeLineHeightSpacing(
						elem,
						setup.fontSize[device],
						setup.lineHeight[device],
						setup.letterSpacing[device]
					);
				});

				if (currentSettings && currentSettings.excerptSelector) {
					cy.get(currentSettings.excerptSelector).each((elem) => {
						cy.testSizeLineHeightSpacing(
							elem,
							setup.fontSize[device],
							setup.lineHeight[device],
							setup.letterSpacing[device]
						);
					});
				}

				if (currentSettings && currentSettings.commentsSelector) {
					cy.get(currentSettings.commentsSelector).each((elem) => {
						cy.testSizeLineHeightSpacing(
							elem,
							setup.fontSize[device],
							setup.lineHeight[device],
							setup.letterSpacing[device]
						);
					});
				}
			});
		}
	});
});
