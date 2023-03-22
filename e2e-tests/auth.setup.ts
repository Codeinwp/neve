// auth.setup.ts
import { test as setup } from '@playwright/test';
import { isCurrentURL, createURL } from './utils';

const authFile = 'playwright/.auth/user.json';

setup('authenticate', async ({ page }) => {
	let isLoggedIn = false;
	await page
		.context()
		.cookies()
		.then((cookies) => {
			isLoggedIn = cookies.some((cookie) =>
				cookie.name.startsWith('wordpress_logged_in_')
			);
		});
	if (!isLoggedIn) {
		if (!isCurrentURL(page, 'wp-login.php')) {
			await page.goto(createURL('wp-login.php'));
		}

		await page.focus('#user_login');
		await page.fill('#user_login', 'admin');

		await page.focus('#user_pass');
		await page.fill('#user_pass', 'admin');

		await Promise.all([
			page.waitForURL('**/wp-admin/'),
			page.click('#wp-submit'),
		]);
	}

	await page.context().storageState({ path: authFile });
});
