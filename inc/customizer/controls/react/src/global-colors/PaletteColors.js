import Accordion from './Accordion';
import { withSelect, withDispatch } from '@wordpress/data';
import { compose } from '@wordpress/compose';
import ColorControl from '../common/ColorControl.js';

const PaletteColors = ( { palette } ) => {
	console.log( palette );
	return <Accordion>content</Accordion>;
};

export default compose(
	withSelect( ( select ) => {
		const { getPalettes, getActivePalette } = select(
			'neve-global-colors'
		);

		const activePalette = getActivePalette();
		const palettes = getPalettes();

		return {
			palette: palettes[ activePalette ],
		};
	} ),
	withDispatch( ( dispatch ) => {} )
)( PaletteColors );
