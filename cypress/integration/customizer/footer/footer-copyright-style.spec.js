import { Footer } from '../../../page-objects/footer';

describe( 'Footer control settings in customizer(style)', () => {
	const footer = new Footer();

	beforeEach( () => {
		cy.login();
		cy.aliasRestRoutes();
	} );

	it( 'changes copyright text color and typograpghy', () => {
		footer.enterFooterMenu();
		footer.selectChangeCopyright();
		footer.selectStyleMenu();

		const textColor = '#38d421';
		const textTransform = 'Uppercase';
		const fontWeight = '200';
		const fontSize = 19;
		const lineHeight = 25;
		const letterSpacing = 4;

		footer.changeTextColor( textColor );
		footer.changeTypography(
			textTransform,
			fontWeight,
			fontSize,
			lineHeight,
			letterSpacing
		);
		footer.publishChanges();
		footer.validateStyles(
			textColor,
			textTransform,
			fontWeight,
			fontSize + 1,
			lineHeight + 1,
			letterSpacing * 0.1
		);
	} );
} );
