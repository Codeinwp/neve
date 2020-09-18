/* jshint esversion: 6 */
import { render } from '@wordpress/element';
import PresetsSelector from './PresetsSelector';

export const PresetsSelectorControl = wp.customize.Control.extend( {
	renderContent: function renderContent() {
		render( <PresetsSelector control={ this } />, this.container[ 0 ] );
	},
} );
