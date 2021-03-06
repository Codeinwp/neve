describe('Blog Typography', function () {
	const setupValues = {
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

	const homeSettings = {
		pageToVisit: '/',
		titleSelector: '.blog-entry-title',
		metaSelector: '.blog .nv-meta-list li',
		excerptSelector: '.entry-summary',
	};

	const commentSettings = {
		pageToVisit: '/template-comments/',
		titleSelector: '.nv-title-meta-wrap .entry-title',
		metaSelector: '.single .nv-meta-list li',
		commentsSelector: '.single .comment-reply-title',
	};
	// .single .comment-reply-title
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

	before('Sets up blog typography in customizer', function () {
		cy.loginWithRequest();
		cy.fixture('customizer/typography/blog-typography').then((typoSetup) => {
			cy.setCustomizeSettings(typoSetup);
		});
	});

	it('Test blog typography for transform and weight on frontend on home page', function () {
		cy.visit(homeSettings.pageToVisit);
		cy.get(homeSettings.titleSelector).each((elem) => {
			testTransformAndWeight(elem, setupValues.textTransform, setupValues.fontWeight);
		});
		cy.get(homeSettings.metaSelector).each((elem) => {
			testTransformAndWeight(elem, setupValues.textTransform, setupValues.fontWeight);
		});
		cy.get(homeSettings.excerptSelector).each((elem) => {
			testTransformAndWeight(elem, setupValues.textTransform, setupValues.fontWeight);
		});
	});

	it('Test blog typography for transform and weight on frontend on comment templates', function () {
		cy.visit(commentSettings.pageToVisit);
		cy.get(commentSettings.titleSelector).each((elem) => {
			testTransformAndWeight(elem, setupValues.textTransform, setupValues.fontWeight);
		});
		cy.get(commentSettings.metaSelector).each((elem) => {
			testTransformAndWeight(elem, setupValues.textTransform, setupValues.fontWeight);
		});
		cy.get(commentSettings.commentsSelector).each((elem) => {
			testTransformAndWeight(elem, setupValues.textTransform, setupValues.fontWeight);
		});
	});

	it('Test blog typography for size, line height, and spacing on frontend on home page', function () {
		cy.visit(homeSettings.pageToVisit);

		// eslint-disable-next-line array-callback-return
		Object.keys(deviceMap).map((device) => {
			// Change viewport.
			cy.viewport(deviceMap[device].width, deviceMap[device].height);

			cy.get(homeSettings.titleSelector).each((elem) => {
				testSizeLineHeightSpacing(
					elem,
					setupValues.fontSize[device],
					setupValues.lineHeight[device],
					setupValues.letterSpacing[device],
				);
			});

			cy.get(homeSettings.metaSelector).each((elem) => {
				testSizeLineHeightSpacing(
					elem,
					setupValues.fontSize[device],
					setupValues.lineHeight[device],
					setupValues.letterSpacing[device],
				);
			});

			cy.get(homeSettings.excerptSelector).each((elem) => {
				testSizeLineHeightSpacing(
					elem,
					setupValues.fontSize[device],
					setupValues.lineHeight[device],
					setupValues.letterSpacing[device],
				);
			});
		});
	});

	it('Test blog typography for size, line height, and spacing on frontend on template comments', function () {
		cy.visit(commentSettings.pageToVisit);

		// eslint-disable-next-line array-callback-return
		Object.keys(deviceMap).map((device) => {
			// Change viewport.
			cy.viewport(deviceMap[device].width, deviceMap[device].height);

			cy.get(commentSettings.titleSelector).each((elem) => {
				testSizeLineHeightSpacing(
					elem,
					setupValues.fontSize[device],
					setupValues.lineHeight[device],
					setupValues.letterSpacing[device],
				);
			});

			cy.get(commentSettings.metaSelector).each((elem) => {
				testSizeLineHeightSpacing(
					elem,
					setupValues.fontSize[device],
					setupValues.lineHeight[device],
					setupValues.letterSpacing[device],
				);
			});
			cy.get(commentSettings.commentsSelector).each((elem) => {
				testSizeLineHeightSpacing(
					elem,
					setupValues.fontSize[device],
					setupValues.lineHeight[device],
					setupValues.letterSpacing[device],
				);
			});
		});
	});
});

/**
 * Test text transform and font weight
 *
 * @param elem
 * @param transformMatcher
 * @param weightMatcher
 * @example testTransformAndWeight('#neve_selector', 'transform', '200' )
 */

const testTransformAndWeight = (elem, transformMatcher: string, weightMatcher: string) => {
	// Test text transform.
	cy.get(elem).should('have.css', 'text-transform').and('match', new RegExp(transformMatcher, 'g'));

	// Test font weight
	cy.get(elem).should('have.css', 'font-weight').and('match', new RegExp(weightMatcher, 'g'));
};

/**
 * Test font size, line height and letter spacing
 *
 * @param elem
 * @param fontSizeMatcher
 * @param lineHeightMatcher
 * @param letterSpacingMatcher
 * @example testSizeLineHeightSpacing('#selector', 'font'. 'lineHeight', 'letterSpacing')
 */
const testSizeLineHeightSpacing = (
	elem,
	fontSizeMatcher: string,
	lineHeightMatcher: string,
	letterSpacingMatcher: string,
) => {
	// Test font size.
	cy.get(elem)
		.should('have.css', 'font-size')
		.and('match', new RegExp(fontSizeMatcher + 'px', 'g'));

	// Test line height.
	cy.get(elem).should('have.css', 'line-height').and('match', new RegExp(lineHeightMatcher, 'g'));

	// Test letter spacing.
	cy.get(elem)
		.should('have.css', 'letter-spacing')
		.and('match', new RegExp(letterSpacingMatcher, 'g'));
};
