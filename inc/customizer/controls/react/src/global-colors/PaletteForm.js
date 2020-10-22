import { withSelect, withDispatch } from '@wordpress/data';
import { useState } from '@wordpress/element';
import { compose } from '@wordpress/compose';
import { Button } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { camelCase } from 'lodash';

const PaletteForm = ( { palettes, setActivePalette, updatePalettes } ) => {
	const [ isAdding, setIsAdding ] = useState( false );
	const [ newPaletteName, setNewPaletteName ] = useState( '' );
	const [ paletteFrom, setPaletteFrom ] = useState( 'base' );

	const toggleAdding = () => {
		setIsAdding( ! isAdding );
		setNewPaletteName( '' );
	};

	const setBasePalette = ( e ) => {
		setPaletteFrom( e.target.value );
	};

	const paletteExists = () =>
		Object.keys( palettes ).filter(
			( item ) => camelCase( newPaletteName ) === item
		).length > 0;

	const addNewPalette = ( e ) => {
		e.preventDefault();
		const paletteSlug = camelCase( newPaletteName );
		const newPalettes = { ...palettes };
		newPalettes[ paletteSlug ] = {
			name: newPaletteName,
			allowDeletion: true,
			colors: { ...newPalettes[ paletteFrom ].colors },
		};
		updatePalettes( newPalettes );
		setActivePalette( paletteSlug );
		toggleAdding();
	};

	if ( ! isAdding ) {
		return (
			<div className="add-palette-form">
				<Button
					style={ { alignSelf: 'flex-start' } }
					isSmall
					isSecondary
					icon="plus-alt"
					onClick={ toggleAdding }
				>
					{ __( 'Add Custom Palette' ) }
				</Button>
			</div>
		);
	}

	return (
		<div className="add-palette-form">
			<input
				type="text"
				placeholder={ __( 'Palette Name', 'neve' ) }
				onChange={ ( e ) => {
					setNewPaletteName( e.target.value );
				} }
			/>
			<span className="customize-control-title">
				{ __( 'Extend from:', 'neve' ) }
			</span>
			<select
				value={ paletteFrom }
				onChange={ setBasePalette }
				onBlur={ setBasePalette }
			>
				{ Object.keys( palettes ).map( ( palette, index ) => {
					return (
						<option key={ index } value={ palette }>
							{ palettes[ palette ].name }
						</option>
					);
				} ) }
			</select>
			<div className="actions">
				<Button
					isSmall
					isSecondary
					isDestructive
					onClick={ toggleAdding }
				>
					{ __( 'Cancel', 'neve' ) }
				</Button>
				<Button
					isSmall
					icon="plus-alt"
					isPrimary
					onClick={ addNewPalette }
					disabled={ paletteExists() || newPaletteName.length < 1 }
				>
					{ __( 'Add', 'neve' ) }
				</Button>
			</div>
		</div>
	);
};

export default compose(
	withSelect( ( select ) => {
		const { getPalettes } = select( 'neve-global-colors' );

		const palettes = getPalettes();

		return {
			palettes,
		};
	} ),
	withDispatch( ( dispatch ) => {
		const { setActivePalette, updatePalettes } = dispatch(
			'neve-global-colors'
		);

		return {
			setActivePalette: ( id ) => setActivePalette( id ),
			updatePalettes,
		};
	} )
)( PaletteForm );
