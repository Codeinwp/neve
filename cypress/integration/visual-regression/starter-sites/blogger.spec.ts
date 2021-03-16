describe('Starter Sites VR - https://staging.demosites.io/blogger/ ', function () {
	const pages = [];
	it('Check frontpage', function () {
		const frontpage = 'https://staging.demosites.io/blogger/';
		cy.visit(frontpage);
		cy.captureDocument();
		cy.get('#nv-primary-navigation-main').then(($headerMenu) => {
			[...$headerMenu.find('.menu-item a')].forEach(($url) => {
				const url = $url.href;
				if (url.includes('#')) {
					return;
				}
				if (frontpage.replace(/\/*$/, '') === url.replace(/\/*$/, '')) {
					return;
				}

				pages.push($url.href);
			});
		});
	});
	it('Check additional pages', function () {
		pages.forEach((page) => {
			cy.visit(page);
			cy.captureDocument(true, 'Check additional - ' + page);
		});
	});
});
