import { withDispatch } from '@wordpress/data';
import { useState, useEffect } from '@wordpress/element';
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

	const { label, defaultValues } = control.params;

	return (
		<div className="neve-global-colors-wrap">
			{ label && (
				<span className="customize-control-title">{ label }</span>
			) }

			<PaletteSelector />
			<PaletteColors defaults={ defaultValues } />
		</div>
	);
};

export default withDispatch( ( dispatch ) => {
	const { initValues } = dispatch( 'neve-global-colors' );

	return {
		updateValues: ( newValues ) => initValues( newValues ),
	};
} )( GlobalColors );
