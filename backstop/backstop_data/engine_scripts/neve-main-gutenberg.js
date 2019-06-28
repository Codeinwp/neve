module.exports = function(engine, scenario, vp) {
	engine.evaluate( function() {
		let hidden = document.querySelectorAll( '.hidden-animated' );

		for ( let i = 0; i < hidden.length; i++ ) {
			hidden[i].classList.remove( 'hidden-animated' );
		}
	} );
	console.log( 'onReady.js has run for: ', vp.label );
};
