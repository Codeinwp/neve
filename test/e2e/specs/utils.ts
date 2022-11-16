const { promises: fsPromise } = require('fs');
const path = require('path');

export async function loadData(filePath: string) {
	const jsonPath = path.join(__dirname, filePath);
	return await fsPromise.readFile(jsonPath, 'utf8');
}

export async function setCustomizeSettings(data, request) {
	await request.post('/wp-json/wpthememods/v1/settings', data);
}
