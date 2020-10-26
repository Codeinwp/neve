import { Footer } from '../../../page-objects/footer';

describe( 'Footer control settings in customizer(general)', () => {
	const footer = new Footer();

	it( 'changes copyright text', () => {
		cy.login();
		cy.aliasRestRoutes();

		footer.enterFooterMenu();
		footer.selectChangeCopyright();

		const newCopyRightText = 'Updated Copyright';

		footer.changeFooterText( newCopyRightText );
		footer.publishChanges();

		footer.validateCopyrightTextUpdated( newCopyRightText );
		// cy.get('.footer_copyright_component_align').click();
	} );
} );
