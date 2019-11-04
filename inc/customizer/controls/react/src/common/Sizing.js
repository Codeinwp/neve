import PropTypes from 'prop-types';

const { __ } = wp.i18n;
const {
	Dropdown,
	IconButton,
	ToolbarButton,
	Toolbar,
	RangeControl
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
					title: this.props.linked ? __( 'Unlink Values', 'neve' ) : __( 'Link Values', 'neve' ),
					icon: this.props.linked ? 'admin-links' : 'editor-unlink',
					isActive: this.props.linked,
					onClick: () => this.props.onLinked()
				}
			)
		}
		if ( this.hasSetValues() ) {
			controls.push(
				{
					title: this.props.options.length > 1 ? __( 'Reset all Values', 'neve' ) : __( 'Reset Value', 'neve' ),
					icon: 'image-rotate',
					onClick: () => this.props.onReset()
				}
			)
		}

		return (
				<div className={wrapClasses}>
					{this.props.options.map( (i, n) => {
						return (
								<div className="nv-sizing-item">
									<Dropdown
											position="top center"
											focusOnMount={false}
											renderToggle={({ isOpen, onToggle }) => (
													<input
															type="number"
															id={i.type + '-input'}
															value={i.value && i.value}
															min={this.props.min}
															max={this.props.max}
															step={this.props.step}
															onFocus={() => {
																if ( this.props.noRange ) {
																	return false;
																}
																onToggle();
															}}
															onChange={
																e => this.props.onChange( i.type,
																		e.target.value === '' ? 0 : e.target.value )
															}
													/>
											)}
											renderContent={({ onToggle }) => (
													<div className="range-control">
														<RangeControl
																value={i.value && i.value}
																initialPosition={i.value && i.value || 0}
																beforeIcon="minus"
																afterIcon="plus"
																min={this.props.min}
																max={this.props.max}
																step={this.props.step}
																onChange={
																	e => this.props.onChange( i.type,
																			e === '' ? 0 : e )
																}
														/>
													</div>
											)}
									/>
									{i.type && (
											<label className="label" for={i.type + '-input'}>
												{i.type}
											</label>
									)}
								</div>
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
