import { withSelect, withDispatch } from '@wordpress/data';
import { useState, useEffect } from '@wordpress/element';
import { compose } from '@wordpress/compose';
import domReady from '@wordpress/dom-ready';

import PaletteSelector from './PaletteSelector';
import PaletteColors from './PaletteColors';

const GlobalColors = ( { control, updateValues } ) => {
	const [ loading, setLoading ] = useState( true );

	useEffect( () => {
		domReady( () => {
			updateValues(
				wp.customize.control( 'neve_global_colors' ).setting()
			);
			setLoading( false );
		} );
	}, [] );

	if ( loading ) {
		return 'Loading...';
	}

	const { label } = control.params;

	return (
		<div className="neve-global-colors-wrap">
			{ label && (
				<span className="customize-control-title">{ label }</span>
			) }

			<PaletteSelector />
			<PaletteColors />
		</div>
	);
};

export default withDispatch( ( dispatch ) => {
	const { initValues } = dispatch( 'neve-global-colors' );

	return {
		updateValues: ( newValues ) => initValues( newValues ),
	};
} )( GlobalColors );
