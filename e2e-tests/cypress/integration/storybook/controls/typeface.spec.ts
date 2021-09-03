describe('Typeface', function () {
	beforeEach(function () {
		cy.visitStorybook();
	});

	context('Default', function () {
		beforeEach(function () {
			cy.loadStory('Customizer/Controls/Typeface', 'Default');
			cy.get('.value-previewer > pre').as('valuePreview');
		});

		it('Changes values for desktop', function () {
			cy.findByText(
				/\{ "fontsize": \{ "suffix": \{ "mobile": "px", "tablet": "px", "desktop": "px" \}, "mobile": 10, "tablet": 20, "desktop": 30 \}, "lineheight": \{ "suffix": \{ "mobile": "em", "tablet": "em", "desktop": "em" \}, "mobile": 1, "tablet": 1\.3, "desktop": 1\.6 \}, "letterspacing": \{ "mobile": 0\.5, "tablet": 0\.6, "desktop": 0\.8 \}, "fontweight": "none", "texttransform": "none" \}/i,
			);
			cy.findByRole('combobox', {
				name: /transform/i,
			}).select('Lowercase');
			cy.findByRole('combobox', {
				name: /weight/i,
			}).select('300');
			cy.get('.font-size > .neve-responsive-sizing > .nv-sizing-item > input').type('1');
			cy.get('.line-height > .neve-control-header > .neve-units > :nth-child(2)').click();
			cy.get('.line-height > .neve-responsive-sizing > .nv-sizing-item > input').type('1');
			cy.get('.letter-spacing > .neve-responsive-sizing > .nv-sizing-item > input').type('1');
			cy.findByText(
				/\{ "fontsize": \{ "suffix": \{ "mobile": "px", "tablet": "px", "desktop": "px" \}, "mobile": 10, "tablet": 20, "desktop": "301" \}, "lineheight": \{ "suffix": \{ "mobile": "em", "tablet": "em", "desktop": "px" \}, "mobile": 1, "tablet": 1\.3, "desktop": "1\.61" \}, "letterspacing": \{ "mobile": 0\.5, "tablet": 0\.6, "desktop": "0\.81" \}, "fontweight": "300", "texttransform": "lowercase" \}/i,
			);
		});
		it('Changes value for tablet', function () {
			cy.reload();
			cy.findByText(
				/\{ "fontsize": \{ "suffix": \{ "mobile": "px", "tablet": "px", "desktop": "px" \}, "mobile": 10, "tablet": 20, "desktop": 30 \}, "lineheight": \{ "suffix": \{ "mobile": "em", "tablet": "em", "desktop": "em" \}, "mobile": 1, "tablet": 1\.3, "desktop": 1\.6 \}, "letterspacing": \{ "mobile": 0\.5, "tablet": 0\.6, "desktop": 0\.8 \}, "fontweight": "none", "texttransform": "none" \}/i,
			);
			cy.findByRole('combobox', {
				name: /transform/i,
			}).select('Capitalize');
			cy.findByRole('combobox', {
				name: /weight/i,
			}).select('400');
			cy.get(
				'.font-size > .neve-control-header > .neve-responsive-control-bar > .floating-controls > .components-button-group > .tablet',
			).click();
			cy.get('.font-size > .neve-responsive-sizing > .nv-sizing-item > input').type('2');
			cy.get('.line-height > .neve-control-header > .neve-units > :nth-child(2)').click();
			cy.get('.line-height > .neve-responsive-sizing > .nv-sizing-item > input').type('2');
			cy.get('.letter-spacing > .neve-responsive-sizing > .nv-sizing-item > input').type('2');
			cy.findByText(
				/\{ "fontsize": \{ "suffix": \{ "mobile": "px", "tablet": "px", "desktop": "px" \}, "mobile": 10, "tablet": "202", "desktop": 30 \}, "lineheight": \{ "suffix": \{ "mobile": "em", "tablet": "px", "desktop": "em" \}, "mobile": 1, "tablet": "1\.32", "desktop": 1\.6 \}, "letterspacing": \{ "mobile": 0\.5, "tablet": "0\.62", "desktop": 0\.8 \}, "fontweight": "400", "texttransform": "capitalize" \}/i,
			);
		});

		it('Changes value for mobile', function () {
			cy.reload();
			cy.findByText(
				/\{ "fontsize": \{ "suffix": \{ "mobile": "px", "tablet": "px", "desktop": "px" \}, "mobile": 10, "tablet": 20, "desktop": 30 \}, "lineheight": \{ "suffix": \{ "mobile": "em", "tablet": "em", "desktop": "em" \}, "mobile": 1, "tablet": 1\.3, "desktop": 1\.6 \}, "letterspacing": \{ "mobile": 0\.5, "tablet": 0\.6, "desktop": 0\.8 \}, "fontweight": "none", "texttransform": "none" \}/i,
			);
			cy.findByRole('combobox', {
				name: /transform/i,
			}).select('Uppercase');
			cy.findByRole('combobox', {
				name: /weight/i,
			}).select('900');

			cy.get(
				'.font-size > .neve-control-header > .neve-responsive-control-bar > .floating-controls > .components-button-group > .mobile',
			).click();
			cy.get('.font-size > .neve-responsive-sizing > .nv-sizing-item > input').type('1');
			cy.get('.line-height > .neve-control-header > .neve-units > :nth-child(2)').click();
			cy.get('.line-height > .neve-responsive-sizing > .nv-sizing-item > input').type('1');
			cy.get('.letter-spacing > .neve-responsive-sizing > .nv-sizing-item > input').type('1');
			cy.findByText(
				/\{ "fontsize": \{ "suffix": \{ "mobile": "px", "tablet": "px", "desktop": "px" \}, "mobile": "101", "tablet": 20, "desktop": 30 \}, "lineheight": \{ "suffix": \{ "mobile": "px", "tablet": "em", "desktop": "em" \}, "mobile": "11", "tablet": 1\.3, "desktop": 1\.6 \}, "letterspacing": \{ "mobile": "0\.51", "tablet": 0\.6, "desktop": 0\.8 \}, "fontweight": "900", "texttransform": "uppercase" \}/i,
			);
		});
	});

	context('Empty Start', function () {
		beforeEach(function () {
			cy.loadStory('Customizer/Controls/Typeface', 'Empty Start');
		});
		it('Have all values as empty', function () {
			cy.findByText(
				/\{ "fontsize": \{ "suffix": \{ "mobile": "px", "tablet": "px", "desktop": "px" \}, "mobile": "", "tablet": "", "desktop": "" \}, "lineheight": \{ "suffix": \{ "mobile": "em", "tablet": "em", "desktop": "em" \}, "mobile": "", "tablet": "", "desktop": "" \}, "letterspacing": \{ "mobile": "", "tablet": "", "desktop": "" \}, "fontweight": "none", "texttransform": "none" \}/i,
			);
		});
	});
});
