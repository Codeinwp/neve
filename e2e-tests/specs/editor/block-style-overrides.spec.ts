import { test, expect, Frame, Page } from '@playwright/test';
import { clearWelcome, setCustomizeSettings } from '../../utils';

const STYLE_CLASS = 'is-style-nv';
const STYLE_COLOR = 'rgb(1, 2, 3)';
const STYLE_FONT_SIZE = '37px';
const TEST_NAME = 'block-style-overrides';
const BODY_FONT_SIZE = { mobile: '19', tablet: '19', desktop: '19' };

const openEditorCanvas = async (page: Page): Promise<Frame> => {
	await page.goto(`wp-admin/post-new.php?test_name=${TEST_NAME}`);
	await clearWelcome(page);
	await page.waitForFunction(() =>
		window.wp?.data?.select('core/block-editor')
	);
	await page
		.frameLocator('iframe[name="editor-canvas"]')
		.locator('.is-root-container')
		.waitFor();

	const canvas = page.frame({ name: 'editor-canvas' });
	if (!canvas) {
		throw new Error('Editor canvas iframe not found.');
	}
	return canvas;
};

const insertFixtureBlocks = async (page: Page): Promise<void> => {
	await page.evaluate((styleClass: string) => {
		const { createBlock } = window.wp.blocks;
		window.wp.data.dispatch('core/block-editor').insertBlocks([
			createBlock('core/heading', {
				level: 2,
				className: styleClass,
				content: 'Styled heading',
			}),
			createBlock('core/heading', { level: 2, content: 'Plain heading' }),
			createBlock('core/paragraph', {
				className: styleClass,
				content: 'Styled paragraph <a href="#styled">styled link</a>',
			}),
			createBlock('core/paragraph', {
				content: 'Plain paragraph <a href="#plain">plain link</a>',
			}),
		]);
	}, STYLE_CLASS);
};

// Loaded before the theme, so only specificity can make it win.
const prependBlockStyle = async (canvas: Frame): Promise<void> => {
	await canvas.evaluate(
		({
			styleClass,
			color,
			fontSize,
		}: {
			styleClass: string;
			color: string;
			fontSize: string;
		}) => {
			const style = document.createElement('style');
			style.textContent = `.${styleClass} { color: ${color}; font-size: ${fontSize}; } .${styleClass} a { color: ${color}; }`;
			document.head.prepend(style);
		},
		{
			styleClass: STYLE_CLASS,
			color: STYLE_COLOR,
			fontSize: STYLE_FONT_SIZE,
		}
	);
};

type ProbeProperty = 'color' | 'fontSize';

// Resolved beside the element so em values compare as px.
const resolveVariable = (
	canvas: Frame,
	selector: string,
	property: ProbeProperty,
	variable: string
): Promise<string> =>
	canvas.evaluate(
		(args: {
			selector: string;
			property: ProbeProperty;
			variable: string;
		}) => {
			const element = document.querySelector(args.selector);
			if (!element?.parentElement) {
				throw new Error(`Missing ${args.selector}`);
			}
			const probe = document.createElement('span');
			probe.style[args.property] = `var(${args.variable})`;
			element.parentElement.appendChild(probe);
			const value = getComputedStyle(probe)[args.property];
			probe.remove();
			return value;
		},
		{ selector, property, variable }
	);

test.describe('Editor block style overrides', () => {
	test('Single-class block styles override theme heading, paragraph and link defaults', async ({
		page,
		request,
		baseURL,
	}) => {
		await setCustomizeSettings(
			TEST_NAME,
			{ neve_typeface_general: { fontSize: BODY_FONT_SIZE } },
			{ request, baseURL }
		);
		const canvas = await openEditorCanvas(page);
		await insertFixtureBlocks(page);
		await prependBlockStyle(canvas);

		const editor = page.frameLocator('iframe[name="editor-canvas"]');

		const styledHeading = editor.locator(`h2.${STYLE_CLASS}`);
		const styledParagraph = editor.locator(`p.${STYLE_CLASS}`);

		await expect(styledHeading).toHaveCSS('color', STYLE_COLOR);
		await expect(styledHeading).toHaveCSS('font-size', STYLE_FONT_SIZE);
		await expect(styledParagraph).toHaveCSS('color', STYLE_COLOR);
		await expect(styledParagraph).toHaveCSS('font-size', STYLE_FONT_SIZE);
		await expect(styledParagraph.locator('a')).toHaveCSS(
			'color',
			STYLE_COLOR
		);

		const plainHeading = `h2.wp-block:not(.${STYLE_CLASS})`;
		const plainParagraph = `p.wp-block:not(.${STYLE_CLASS})`;
		await expect(editor.locator(plainHeading)).toHaveCSS(
			'font-size',
			await resolveVariable(
				canvas,
				plainHeading,
				'fontSize',
				'--h2fontsize'
			)
		);
		await expect(editor.locator(plainParagraph)).toHaveCSS(
			'font-size',
			await resolveVariable(
				canvas,
				plainParagraph,
				'fontSize',
				'--bodyfontsize'
			)
		);
		await expect(editor.locator(`${plainParagraph} a`)).toHaveCSS(
			'color',
			await resolveVariable(
				canvas,
				`${plainParagraph} a`,
				'color',
				'--nv-primary-accent'
			)
		);
	});
});
