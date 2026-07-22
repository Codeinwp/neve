// Behavioral test for the Logo palette inline script (issue #4541).
// Run: node tests/js/logo-toggle-script.test.mjs
import { readFileSync } from 'fs';
import { strict as assert } from 'assert';
import { JSDOM, VirtualConsole } from 'jsdom';

const php = readFileSync(new URL('../../header-footer-grid/Core/Components/Logo.php', import.meta.url), 'utf8');
const js = php.match(/<<<JS\n([\s\S]*?)\nJS;/)[1].replace(
	'{$variants_json}',
	JSON.stringify({ logo: { same: false, light: { src: 'http://x/light.png', srcset: '', sizes: '' }, dark: { src: 'http://x/dark.png', srcset: '', sizes: '' } } })
);

function makePage() {
	const errors = [];
	const virtualConsole = new VirtualConsole();
	virtualConsole.on('jsdomError', (e) => errors.push(e));
	const dom = new JSDOM(
		'<html><body><img class="neve-site-logo" data-variant="logo" src="http://x/light.png"></body></html>',
		{ runScripts: 'outside-only', virtualConsole }
	);
	dom.window.eval(js);
	return { window: dom.window, errors };
}

const tick = () => new Promise((r) => setTimeout(r, 0));

// 1. No page globals leaked.
{
	const { window } = makePage();
	assert.equal(window.html, undefined, 'script leaks global "html"');
	assert.equal(window.setCurrentTheme, undefined, 'script leaks global "setCurrentTheme"');
}

// 2. Survives a clobbered window.html + unrelated root attribute change.
{
	const { window, errors } = makePage();
	window.html = 'not-an-element';
	window.document.documentElement.setAttribute('data-test', '1');
	await tick();
	assert.deepEqual(errors, [], `observer threw: ${errors[0]}`);
}

// 3. Still swaps the logo on data-neve-theme change (even after the clobber).
{
	const { window, errors } = makePage();
	window.html = 'not-an-element';
	window.document.documentElement.setAttribute('data-neve-theme', 'dark');
	await tick();
	assert.deepEqual(errors, [], `observer threw: ${errors[0]}`);
	assert.equal(window.document.querySelector('.neve-site-logo').src, 'http://x/dark.png', 'logo did not swap to dark variant');
}

console.log('logo-toggle-script: all assertions passed');
