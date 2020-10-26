import { Footer } from '../../../page-objects/footer';

describe( 'Footer control settings in customizer(layout)', () => {
	const footer = new Footer();

	beforeEach( () => {
		cy.login();
		cy.aliasRestRoutes();
	} );

	it( 'changes copyright horizontal alignment', () => {
		// align left
		footer.enterFooterMenu();
		footer.selectChangeCopyright();
		footer.selectLayoutMeunu();
		footer.alignHorizontalLayout( 'Left' );
		footer.publishChanges();
		footer.validateHorizontalLayout( 'left' );
		// align right
		footer.enterFooterMenu();
		footer.selectChangeCopyright();
		footer.selectLayoutMeunu();
		footer.alignHorizontalLayout( 'Right' );
		footer.publishChanges();
		footer.validateHorizontalLayout( 'right' );
		// align center
		footer.enterFooterMenu();
		footer.selectChangeCopyright();
		footer.selectLayoutMeunu();
		footer.alignHorizontalLayout( 'Center' );
		footer.publishChanges();
		footer.validateHorizontalLayout( 'center' );
	} );

	it( 'changes copyright vertical alignment', () => {
		// align top
		footer.enterFooterMenu();
		footer.selectChangeCopyright();
		footer.selectLayoutMeunu();
		footer.alignVerticalLayout( 'Top' );
		footer.publishChanges();
		footer.validateVerticalLayout( 'top' );
		// align bottom
		footer.enterFooterMenu();
		footer.selectChangeCopyright();
		footer.selectLayoutMeunu();
		footer.alignVerticalLayout( 'Bottom' );
		footer.publishChanges();
		footer.validateVerticalLayout( 'bottom' );
		// align middle
		footer.enterFooterMenu();
		footer.selectChangeCopyright();
		footer.selectLayoutMeunu();
		footer.alignVerticalLayout( 'Middle' );
		footer.publishChanges();
		footer.validateVerticalLayout( 'middle' );
	} );

	it( 'changes copyright padding', () => {
		const number = 13;
		const padding = 'padding';
		footer.enterFooterMenu();
		footer.selectChangeCopyright();
		footer.selectLayoutMeunu();
		footer.increaseLinkedSpacing( padding, number );
		footer.checkLinkedSpacingValues( padding, number );
		footer.resetSpacing( padding );
		footer.checkLinkedSpacingValues( padding, 0 );
		footer.toggleLinkSpacingValues( padding );
		footer.editSpacing( padding, 'top', 14 );
		footer.editSpacing( padding, 'right', 2 );
		footer.editSpacing( padding, 'bottom', 7 );
		footer.editSpacing( padding, 'left', 3 );
		footer.editSpacing( padding, 'top', 3, 'decrease' );
		footer.publishChanges( padding );
		footer.validateSpacing( padding, 11, 2, 7, 3 );
	} );

	it( 'changes copyright margin', () => {
		const number = 7;
		const margin = 'margin';
		footer.enterFooterMenu();
		footer.selectChangeCopyright();
		footer.selectLayoutMeunu();
		footer.increaseLinkedSpacing( margin, number );
		footer.checkLinkedSpacingValues( margin, number );
		footer.resetSpacing( margin );
		footer.checkLinkedSpacingValues( margin, 0 );
		footer.toggleLinkSpacingValues( margin );
		footer.editSpacing( margin, 'top', 9 );
		footer.editSpacing( margin, 'right', 2 );
		footer.editSpacing( margin, 'bottom', 5 );
		footer.editSpacing( margin, 'left', 3, 'decrese' );
		footer.editSpacing( margin, 'top', 3, 'decrease' );
		footer.publishChanges( margin );
		footer.validateSpacing( margin, 6, 2, 5, -3 );
	} );
} );
