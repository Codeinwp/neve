module.exports = async(page, scenario, vp) => {
	console.log( 'SCENARIO > ' + scenario.label );
	page.evaluate( function(vp) {
		let gtbHidden = document.querySelectorAll( '.hidden-animated' );
		for ( let i = 0; i < gtbHidden.length; i++ ) {
			gtbHidden[i].classList.remove( 'hidden-animated' );
		}

		let elmHidden = document.querySelectorAll( '.elementor-invisible' );
		for ( let i = 0; i < elmHidden.length; i++ ) {
			elmHidden[i].classList.remove( 'elementor-invisible' );
		}

		let elmElements = document.querySelectorAll( '.elementor-element' );
		for ( let i = 0; i < elmElements.length; i++ ) {
			elmElements[i].classList.remove( 'elementor-invisible' );
		}

		let elContainers = document.querySelectorAll( '.elementor-container' );
		for ( let i = 0; i < elContainers.length; i++ ) {
			elContainers[i].style.minHeight = '0';
		}

		let vh = vp.height * 0.01;
		document.documentElement.style.setProperty( '--vh', `${vh}px` );
	}, vp );
};
