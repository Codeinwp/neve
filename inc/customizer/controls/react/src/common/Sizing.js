import PropTypes from 'prop-types';
import SingleSizingInput from '../common/SingleSizingInput.js';
import classNames from 'classnames';

const { __ } = wp.i18n;
const {
	Toolbar
} = wp.components;
const { Component } = wp.element;

class SizingControl extends Component {
	constructor(props) {
		super( props );
		this.hasSetValues = this.hasSetValues.bind( this );
		this.getControls = this.getControls.bind( this );
	}

	getControls() {
		const { noLinking, linked, onLinked, options, onReset } = this.props;
		let controls = [];
		if ( noLinking && !this.hasSetValues() ) {
			return [];
		}
		if ( !noLinking ) {
			controls.push(
					{
						title: linked ?
								__( 'Unlink Values', 'neve' ) :
								__( 'Link Values', 'neve' ),
						icon: linked ? 'admin-links' : 'editor-unlink',
						isActive: linked,
						onClick: () => onLinked(),
						className: classNames( 'link',
								{ 'has-reset': this.hasSetValues() } )
					}
			);
		}
		if ( this.hasSetValues() ) {
			controls.push(
					{
						title: options.length > 1 ?
								__( 'Reset all Values', 'neve' ) :
								__( 'Reset Value', 'neve' ),
						icon: 'image-rotate',
						onClick: () => onReset(),
						className: 'reset'
					}
			);
		}
		return controls;
	}

	render() {
		const { options, onChange, max, min, step } = this.props;
		return (
				<div className={classNames( 'neve-responsive-sizing',
						{ 'single-input': options.length === 1 } )}>
					{options.map( (i, n) => {
						return (
								<SingleSizingInput
										onChange={(type, value) => onChange( type,
												value )}
										value={i.value}
										className={i.type ? i.type + '-input' : ''}
										type={i.type}
										max={max}
										min={min}
										step={step}/>
						);
					} )}
					<Toolbar controls={this.getControls()}/>
				</div>
		);
	}

	hasSetValues() {
		const { defaults, options } = this.props;
		if ( typeof defaults !== 'object' ) {
			return parseFloat( defaults ) !==
					parseFloat( options[0].value );
		}
		return options.filter(
				option => option.value !== defaults[option.type]
		).length > 0;
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
