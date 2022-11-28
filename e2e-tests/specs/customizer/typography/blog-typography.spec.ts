import { test, expect } from '@playwright/test';
import { loadData, setCustomizeSettings } from '../../../utils';

const setupValues = {
	textTransform: 'lowercase',
	fontWeight: '100',
	fontSize: {
		mobile: '10',
		tablet: '11',
		desktop: '12',
	},
	lineHeight: {
		mobile: '40',
		tablet: '33',
		desktop: '24',
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

class BlogTypographyUtils {
	async testTransformAndWeight(
		elem,
		transformMatcher: string,
		weightMatcher: string
	) {
		// Test text transform.
		await expect(elem).toHaveCSS('text-transform', transformMatcher);

		// Test font weight
		await expect(elem).toHaveCSS('font-weight', weightMatcher);
	}

	async testSizeLineHeightSpacing(
		elem,
		fontSizeMatcher: string,
		lineHeightMatcher: string,
		letterSpacingMatcher: string
	) {
		// Test font size.
		await expect(elem).toHaveCSS('font-size', fontSizeMatcher + 'px');

		// Test line height.
		await expect(elem).toHaveCSS('line-height', lineHeightMatcher + 'px');

		// Test letter spacing.
		await expect(elem).toHaveCSS(
			'letter-spacing',
			letterSpacingMatcher + 'px'
		);
	}

	/**
	 * Wrapper function to run testTransformAndWeight over multiple elements.
	 *
	 * @param elementsToCheck
	 * @param functionName
	 * @param device
	 */
	async checkElementsWrapper(elementsToCheck, functionName, device = '') {
		for (const element of elementsToCheck) {
			for (let index = 0; index < (await element.count()); index++) {
				if (functionName === 'testTransformAndWeight') {
					await this.testTransformAndWeight(
						element.nth(index),
						setupValues.textTransform,
						setupValues.fontWeight
					);
				}
				if (functionName === 'testSizeLineHeightSpacing') {
					await this.testSizeLineHeightSpacing(
						element.nth(index),
						setupValues.fontSize[device],
						setupValues.lineHeight[device],
						setupValues.letterSpacing[device]
					);
				}
			}
		}
	}
}

test.describe('Blog Typography', () => {
	const typographyUtils = new BlogTypographyUtils();

	test.beforeAll(async ({ request, baseURL }) => {
		await loadData(
			'./fixtures/customizer/typography/blog-typography.json'
		).then(async (data) => {
			await setCustomizeSettings('blogTypography', data, {
				request,
				baseURL,
			});
		});
	});

	test('Test blog typography for transform and weight on frontend on home page', async ({
		page,
	}) => {
		await page.goto(homeSettings.pageToVisit + '?test_name=blogTypography');

		const titles = await page.locator(homeSettings.titleSelector);
		const metas = await page.locator(homeSettings.metaSelector);
		const excerpts = await page.locator(homeSettings.excerptSelector);
		const elementsToCheck = [titles, metas, excerpts];

		await typographyUtils.checkElementsWrapper(
			elementsToCheck,
			'testTransformAndWeight'
		);
	});

	test('Test blog typography for transform and weight on frontend on comment templates', async ({
		page,
	}) => {
		await page.goto(
			commentSettings.pageToVisit + '?test_name=blogTypography'
		);

		const titles = await page.locator(commentSettings.titleSelector);
		const metas = await page.locator(commentSettings.metaSelector);
		const comments = await page.locator(commentSettings.commentsSelector);
		const elementsToCheck = [titles, metas, comments];

		await typographyUtils.checkElementsWrapper(
			elementsToCheck,
			'testTransformAndWeight'
		);
	});

	// eslint-disable-next-line array-callback-return
	Object.keys(deviceMap).map(async (device) => {
		test(`Test blog typography for size, line height, and spacing on frontend on home page ( window ${deviceMap[device].width}/${deviceMap[device].height} )`, async ({
			browser,
		}) => {
			const context = await browser.newContext({
				viewport: {
					width: deviceMap[device].width,
					height: deviceMap[device].height,
				},
			});
			const page = await context.newPage();
			await page.goto(
				homeSettings.pageToVisit + '?test_name=blogTypography'
			);

			const titles = await page.locator(homeSettings.titleSelector);
			const metas = await page.locator(homeSettings.metaSelector);
			const excerpts = await page.locator(homeSettings.excerptSelector);
			const elementsToCheck = [titles, metas, excerpts];

			await typographyUtils.checkElementsWrapper(
				elementsToCheck,
				'testSizeLineHeightSpacing',
				device
			);
		});

		test(`Test blog typography for size, line height, and spacing on frontend on template comments on ${device}`, async ({
			browser,
		}) => {
			const context = await browser.newContext({
				viewport: {
					width: deviceMap[device].width,
					height: deviceMap[device].height,
				},
			});
			const page = await context.newPage();
			await page.goto(
				homeSettings.pageToVisit + '?test_name=blogTypography'
			);

			const titles = await page.locator(commentSettings.titleSelector);
			const metas = await page.locator(commentSettings.metaSelector);
			const comments = await page.locator(
				commentSettings.commentsSelector
			);
			const elementsToCheck = [titles, metas, comments];

			await typographyUtils.checkElementsWrapper(
				elementsToCheck,
				'testSizeLineHeightSpacing'
			);
		});
	});
});
