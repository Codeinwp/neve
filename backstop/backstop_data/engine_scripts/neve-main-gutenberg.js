module.exports = function(engine, scenario, vp) {
	engine.evaluate( function() {
		let gtbhidden = document.querySelectorAll( '.hidden-animated' );
		let elmhidden = document.querySelectorAll( '.elementor-invisible' );

		for ( let i = 0; i < gtbhidden.length; i++ ) {
			gtbhidden[i].classList.remove( 'hidden-animated' );
		}

		for ( let i = 0; i < elmhidden.length; i++ ) {
			elmhidden[i].classList.remove( 'elementor-invisible' );
		}
	} );
	console.log( 'onReady.js has run for: ', vp.label );
};
