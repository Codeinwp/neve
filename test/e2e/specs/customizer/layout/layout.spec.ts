import { test } from '@playwright/test';
import { checkSinglePost } from './single-post-settings.spec';
import { checkHomepageSettings } from './hompage-settings.spec';
import { loadData, setCustomizeSettings } from '../../../utils';

export const checkLayout = () => {
	test.describe('Customizer layout checks', function () {
		test.beforeAll(async ({ request, baseURL }) => {
			await loadData('./fixtures/customizer/layout-setup-main.json').then(
				async (data) => {
					await setCustomizeSettings(data, { request, baseURL });
				}
			);
		});

		test.describe(checkSinglePost);
		test.describe(checkHomepageSettings);
	});
};
