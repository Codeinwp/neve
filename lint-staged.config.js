module.exports = {
	"*.php": [
		"composer run format-fix-exit ",
		"composer run lint"
	],
	"package.json": [
		"npm run lint:package-json"
	],
	"/assets/apps/dashboard/src/**/*.js": [
		"npm run format:dash",
		"npm run lint:dash"
	],
	"assets/apps/metabox/src/**/*.js": [
		"npm run format:dash",
		"npm run lint:metabox"
	],
	"assets/scss/components/**/*.scss": [
		"npm run lint:scss --fix"
	],
	"assets/js/src/**/*.js": () => [ // We ignore here the staged restriction.
		"npm run format:global",
		"npm run lint:global",
		"npm run build:rollup",
		"npm run size"
	],
	"assets/scss/**/*.scss": () => [ // We ignore here the staged restriction.
		"npm run build:grunt",
		"npm run size"
	],
	"assets/apps/customizer-controls/src/**/*.js": [ // We ignore here the staged restriction.
		"npm run format:customizer",
		"npm run lint:customizer",
	],

}
