/* eslint-disable @typescript-eslint/no-unused-vars */
import 'cypress-storybook/cypress';
import './commands';
import 'cypress-html-validate/dist/commands';

Cypress.Cookies.defaults({
	preserve: /wordpress_.*/,
});

Cypress.on('uncaught:exception', (err, runnable) => {
	// returning false here prevents Cypress from
	// failing the test
	return false;
});
