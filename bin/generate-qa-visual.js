const path = require("path");
const fs = require("fs");
const YAML = require("yaml")
const slugify = require("slugify");
const QA_ROOT_SPECS = path.dirname(path.dirname(require.main.filename)) + '/cypress/integration/visual-regression/qa-pages/';
const QA_WORKFLOW = './.github/workflows/sync-qa.yml';
let cypressData = require('./../cypress.json');
let rawStupQA = fs.readFileSync(__dirname + '/qa-pages.test.stub');

let fileWorkflow = fs.readFileSync(QA_WORKFLOW, 'utf8')

let githubAction = YAML.parse(fileWorkflow);
cypressData.env.qaUrls.forEach((value,index) => {
	let data = rawStupQA.toString().replace(/{{url}}/g,value);
	let slug = value.replace('https://qa-neve.themeisle.com/','');
	slug = slugify(slug);
	let filename = QA_ROOT_SPECS + slug +'.spec.js';

	githubAction.jobs['run-visual'].strategy.matrix.spec.push(slug);
	fs.writeFileSync(filename, data);
});
githubAction = YAML.stringify(githubAction);

fs.writeFileSync(QA_WORKFLOW, githubAction);

