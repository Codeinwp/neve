import 'cypress-storybook/cypress';

Cypress.Cookies.defaults({
	preserve: /wordpress_.*/,
});

Cypress.on('uncaught:exception', (err, runnable) => {
	// returning false here prevents Cypress from
	// failing the test
	return false;
});
