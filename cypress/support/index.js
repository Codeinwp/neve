/* eslint-disable @typescript-eslint/no-unused-vars */
import 'cypress-storybook/cypress';

Cypress.Cookies.defaults({
	preserve: /wordpress_.*/,
});

Cypress.on('uncaught:exception', (_err, _runnable) => {
	// returning false here prevents Cypress from
	// failing the test
	return false;
});
