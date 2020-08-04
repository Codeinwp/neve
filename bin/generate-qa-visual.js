const path = require("path");
const fs = require("fs");
const UrlSlug = require("url-slug");
const QA_ROOT_SPECS = path.dirname(path.dirname(require.main.filename)) + '/cypress/integration/visual-regression/qa-pages/';
let cypressData = require('./../cypress.json');
let rawStupQA = fs.readFileSync(__dirname + '/qa-pages.test.stub');


cypressData.env.qaUrls.forEach((value,index) => {
	let data = rawStupQA.toString().replace(/{{url}}/g,value);
	let slug = value.replace('https://qa-neve.themeisle.com/','');
	slug = UrlSlug(slug);
	let filename = QA_ROOT_SPECS + slug +'.spec.js';
	fs.writeFileSync(filename, data);
});

