/* jshint esversion: 6 */
import PropTypes from 'prop-types';

const { __ } = wp.i18n;
const { Component } = wp.element;
const { ColorPalette } = wp.components;

class ColorComponent extends Component {
	constructor(props) {
		super( props );
		let value = props.control.setting.get();
		this.state = {
			value
		};
		this.defaultValue = props.control.params.default || '';

		this.updateValues = this.updateValues.bind( this );
	}

	render() {
		const palette = [
			{ name: 'black', color: '#000000' },
			{ name: 'white', color: '#ffffff' },
			{ name: 'red', color: '#cc433c' },
			{ name: 'orange', color: '#d39b48' },
			{ name: 'green', color: '#95d45a' },
			{ name: 'blue', color: '#3972b8' }
		];
		return (
				<div className="neve-white-background-control neve-color-control">
					{
						this.props.control.params.label &&
						<span className="customize-control-title">
							{this.props.control.params.label}
						</span>
					}
					<ColorPalette
							colors={palette}
							value={this.state.value}
							initialPosition={15}
							onChange={(value) => {
								this.updateValues( value || '' );
							}}
					/>
					<div
							className="neve-color-preview"
							style={{ backgroundColor: this.state.value }}>
					</div>
				</div>
		);
	}

	updateValues(value) {
		this.setState( { value: value } );
		this.props.control.setting.set( value );
	}
}

ColorComponent.propTypes = {
	control: PropTypes.object.isRequired
};

export default ColorComponent;
