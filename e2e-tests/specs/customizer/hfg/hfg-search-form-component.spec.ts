import { test, expect, Locator, Page } from '@playwright/test';
import { setCustomizeSettings } from '../../../utils';
import iconSetup from '../../../fixtures/customizer/hfg/search-form-component-icon-setup.json';

test.describe('Search Icon Component', async () => {
	test('Search Form Icon', async ({
		page,
		request,
		baseURL,
	}) => {
		const SEARCH_FORM_SELECTOR = '.header-top.hide-on-mobile.hide-on-tablet .builder-item--header_search form.search-form';
		const EXPECTED_INPUT_BORDER_COLOR = 'rgb(8, 134, 193)';
		const EXPECTED_INPUT_BORDER_WIDTH = '5px 0px 5px 5px';

		const EXPECTED_BTH_BORDER_COLOR = 'rgb(8, 134, 193)';
		const EXPECTED_BTN_BORDER_WIDTH = '5px 5px 5px 0px';

		await setCustomizeSettings('hfgSearchFormIcon', iconSetup, {
			request,
			baseURL,
		});
		await page.goto('/?test_name=hfgSearchFormIcon');
		await page.screenshot({ path: 'hfg-search-form-component.png' });
		const searchFormInput = await page.locator(`${SEARCH_FORM_SELECTOR}  input.search-field`);
		const searchFormBtn = await page.locator(`${SEARCH_FORM_SELECTOR} button.search-submit`);
		await expect(searchFormInput).toBeVisible();
		await expect(searchFormInput).toHaveCSS('border-color', EXPECTED_INPUT_BORDER_COLOR);

		await expect(searchFormInput).toHaveCSS('border-width', EXPECTED_INPUT_BORDER_WIDTH);

		await expect(searchFormBtn).toBeVisible();
		await expect(searchFormBtn).toHaveCSS('border-color', EXPECTED_BTH_BORDER_COLOR);
		await expect(searchFormBtn).toHaveCSS('border-width', EXPECTED_BTN_BORDER_WIDTH);
	});
});
