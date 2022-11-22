import { test } from '@playwright/test';
import { checkCopyright } from './hfg-copyright-component.spec';
import { checkPrimaryMenuMargin } from './hfg-margin-control.spec';
import { checkLogoPadding } from './hfg-padding-control.spec';
import { checkHeaderBackground } from './hfg-row-background.spec';
import { checkSearchComponent } from './hfg-search-component.spec';
import { checkPaletteSwitch } from './hfg-palette-switch-component.spec';

export const checkHFG = () => {
	test.describe.parallel('Customizer HFG checks', function () {
		test.describe(checkCopyright);
		test.describe(checkPrimaryMenuMargin);
		test.describe(checkLogoPadding);
		test.describe(checkHeaderBackground);
		test.describe(checkSearchComponent);
		test.describe(checkPaletteSwitch);
	});
};
