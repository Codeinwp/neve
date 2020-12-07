import { useState } from '@wordpress/element';
import { __ } from '@wordpress/i18n';

import PaletteSelector from './PaletteSelector';
import PaletteColors from './PaletteColors';
import PaletteForm from './PaletteForm';

const GlobalColors = ( { control } ) => {
	const { label, defaultValues } = control.params;
	const [ values, setValues ] = useState( control.setting.get() );

	const saveCustomizeSetting = ( data ) => {
		if ( data.flag ) {
			delete data.flag;
		} else {
			data.flag = true;
		}
		control.setting.set( data );

		const cssTag = document.querySelector( '#nv-css-vars-inline-css' );
		const { activePalette, palettes } = data;
		const currentPalette = palettes[ activePalette ];
		const { colors } = currentPalette;

		let style = ':root{';

		Object.keys( colors ).map( ( slug ) => {
			style += `--${ slug }:${ colors[ slug ] };`;
			return false;
		} );
		style += '}';

		cssTag.innerHTML = style;
	};

	const updateValues = ( newValue ) => {
		setValues( newValue );
		saveCustomizeSetting( newValue );
	};

	return (
		<div className="neve-global-colors-wrap">
			{ label && (
				<span className="customize-control-title">{ label }</span>
			) }

			<PaletteSelector
				control={ control }
				values={ values }
				save={ updateValues }
			/>
			<PaletteForm
				values={ values }
				save={ updateValues }
				disabled={ Object.keys( values.palettes ).length > 5 }
			/>
			<PaletteColors
				values={ values }
				save={ updateValues }
				defaults={ defaultValues }
			/>
		</div>
	);
};

export default GlobalColors;
