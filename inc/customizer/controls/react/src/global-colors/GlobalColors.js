import { withDispatch } from '@wordpress/data';
import { useState, useEffect } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import domReady from '@wordpress/dom-ready';

import PaletteSelector from './PaletteSelector';
import PaletteColors from './PaletteColors';
import PaletteForm from './PaletteForm';

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
			<PaletteForm />
			<PaletteColors defaults={ defaultValues } />
			<p>
				<a href="#">{ __( 'How the color system works', 'neve' ) }</a>
			</p>
		</div>
	);
};

export default withDispatch( ( dispatch ) => {
	const { initValues } = dispatch( 'neve-global-colors' );

	return {
		updateValues: ( newValues ) => initValues( newValues ),
	};
} )( GlobalColors );
