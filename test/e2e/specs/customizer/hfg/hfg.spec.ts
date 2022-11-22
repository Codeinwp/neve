import { test } from '@playwright/test';
import { loadData, setCustomizeSettings } from '../../../utils';
import {checkCopyright} from './hfg-copyright-component.spec';
import {checkPrimaryMenuMargin} from './hfg-margin-control.spec';
import {checkLogoPadding} from "./hfg-padding-control.spec";
import {checkHeaderBackground} from "./hfg-row-background.spec";
import {checkSearchComponent} from "./hfg-search-component.spec";
import {checkPaletteSwitch} from "./hfg-palette-switch-component.spec";

export const checkHFG = () => {
	test.describe.parallel('Customizer HFG checks', function () {
		test.beforeAll(async ({ request, baseURL }) => {
			await loadData('./fixtures/customizer/hfg-setup-main.json').then(
				async (data) => {
					await setCustomizeSettings(data, { request, baseURL });
				}
			);
		});

		test.describe(checkCopyright);
		test.describe(checkPrimaryMenuMargin);
		test.describe(checkLogoPadding);
		test.describe(checkHeaderBackground);
		test.describe(checkSearchComponent);
		test.describe(checkPaletteSwitch);
	});
};
