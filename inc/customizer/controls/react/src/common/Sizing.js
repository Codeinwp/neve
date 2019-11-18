import PropTypes from 'prop-types';
import SingleSizingInput from '../common/SingleSizingInput.js';

const { __ } = wp.i18n;
const {
	Toolbar,
} = wp.components;
const { Component } = wp.element;

class SizingControl extends Component {
	constructor(props) {
		super( props );
	}

	render() {

		let wrapClasses = 'neve-responsive-sizing';
		if ( this.props.options.length === 1 ) {
			wrapClasses += ' single-input';
		}

		let controls = [];
		if ( !this.props.noLinking ) {
			controls.push(
					{
						title: this.props.linked ?
								__( 'Unlink Values', 'neve' ) :
								__( 'Link Values', 'neve' ),
						icon: this.props.linked ? 'admin-links' : 'editor-unlink',
						isActive: this.props.linked,
						onClick: () => this.props.onLinked()
					}
			);
		}
		if ( this.hasSetValues() ) {
			controls.push(
					{
						title: this.props.options.length > 1 ?
								__( 'Reset all Values', 'neve' ) :
								__( 'Reset Value', 'neve' ),
						icon: 'image-rotate',
						onClick: () => this.props.onReset()
					}
			);
		}

		return (
				<div className={wrapClasses}>
					{this.props.options.map( (i, n) => {
						return (
								<SingleSizingInput
										onChange={(type, value) => this.props.onChange( type,
												value )}
										value={i.value}
										className={i.type ? i.type + '-input' : ''}
										type={i.type}
										max={this.props.max}
										min={this.props.min}
										step={this.props.step}/>
						);
					} )}
					<Toolbar controls={controls}/>
				</div>
		);
	}

	hasSetValues() {
		let defaults = this.props.defaults;
		if ( typeof defaults !== 'object' ) {
			return parseFloat( defaults ) !==
					parseFloat( this.props.options[0].value );
		}
		return this.props.options.filter( option => {
			return option.value !== defaults[option.type];
		} ).length > 0;
	}
}

SizingControl.propTypes = {
	options: PropTypes.array.isRequired,
	defaults: PropTypes.array || PropTypes.string || PropTypes.number,
	onLinked: PropTypes.func.isRequired,
	onChange: PropTypes.func.isRequired,
	linked: PropTypes.bool.isRequired,
	onReset: PropTypes.func,
	noLinking: PropTypes.bool,
	noRange: PropTypes.bool
};

export default SizingControl;
