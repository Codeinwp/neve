module.exports = {
	"*.php": [
		"composer run format-fix-exit ",
		"composer run lint"
	],
	"package.json": [
		"yarn run lint:package-json"
	],
	"dashboard/src/**/*.js": [
		"yarn run format:dash",
		"yarn run lint:dash"
	],
	"inc/admin/metabox/src/**/*.js": [
		"yarn run format:dash",
		"yarn run lint:metabox"
	],
	"assets/js/src/**/*.js": () => [ // We ignore here the staged restriction.
		"yarn run format:global",
		"yarn run lint:global",
		"yarn run build:rollup",
		"yarn run size"
	],
	"assets/scss/**/*.scss": () => [ // We ignore here the staged restriction.
		"yarn run build:grunt",
		"yarn run size"
	],
	"inc/customizer/controls/react/src/**/*.js": [ // We ignore here the staged restriction.
		"yarn run format:customizer",
		"yarn run lint:customizer",
	],

}
