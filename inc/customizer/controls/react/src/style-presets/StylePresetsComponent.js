/* jshint esversion: 6 */
import PropTypes from 'prop-types';
import TypefaceComponent from '../typeface/TypefaceComponent.js';

const { __ } = wp.i18n;
const {
	Component
} = wp.element;

const {
	Button,
	TextControl,
	Dashicon
} = wp.components;

class StylePresetsComponent extends Component {
	constructor(props) {
		super( props );
		this.state = {
			presets: []
		};
	}

	render() {
		console.log(this.state);
		let self = this;
		return (
				<div className="neve-style-presets">
					{
						this.state.presets.map( (preset, index) => {
							return (
									<div className="single-preset">
										<div className="preset-header">
											{index}
											<span className="preset-title">{preset.title}</span>
											<Button isLink isDestructive onClick={() => {
												let oldPresets = this.state.presets;
												console.log(oldPresets);
												oldPresets.splice( index-1, 1 );
												console.log(oldPresets);
												// self.setState( { presets : oldPresets } );
											}}><Dashicon icon="no"/></Button>
										</div>
										<TextControl
												placeholder={__( 'Style Name', 'neve' )}
												value={preset.title}
												onChange={e => {
													let oldPresets = this.state.presets;
													oldPresets[index].title = e;
													self.setState( { presets : oldPresets } );
												}
												}
										/>
										<TypefaceComponent onChange={(result) => {
											console.log( result );
										}}/>
									</div>
							);
						} )
					}

					<Button isPrimary onClick={() => this.addNewPreset()}>
						{__( 'Add Preset', 'neve' )}
					</Button>
				</div>
		);
	}

	addNewPreset() {
		let presets = this.state.presets,
				newPreset = {
					'font_family': 'default',
					'title': ''
				},
				presetNo = this.state.presets.length;

		newPreset.title = 'Style #' + (presetNo + 1);

		console.log('NEW:', newPreset);

		presets.push( newPreset );
		this.setState( { presets } );
	}
}

TypefaceComponent.propTypes = {
	control: PropTypes.object.isRequired
};

export default StylePresetsComponent;
