const { promises: fsPromise } = require('fs');
const path = require('path');
import { test, expect } from '@playwright/test';

/**
 * Load data form file.
 *
 * @param filePath
 */
export const loadData = async (filePath) => {
	const jsonPath = path.join(__dirname, filePath);
	return await fsPromise.readFile(jsonPath, 'utf8');
};

/**
 * Set customizer settings.
 *
 * @param data
 * @param root0
 * @param root0.request
 * @param root0.baseURL
 */
export const setCustomizeSettings = async (data, { request, baseURL }) => {
	const customizerData = JSON.parse(data);
	const response = await request.post(
		baseURL + '/wp-json/wpthememods/v1/settings',
		{
			data: customizerData,
		}
	);
	expect(response.ok()).toBeTruthy();
};
