import PropTypes from 'prop-types';

const { __ } = wp.i18n;
const {
	Dropdown,
	IconButton,
	RangeControl
} = wp.components;
const { Component } = wp.element;

class SizingControl extends Component {
	constructor(props) {
		super( props );
	}

	render() {
		return (
				<div className="neve-responsive-sizing">
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
															onFocus={onToggle}
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

					<div className="nv-sizing-link">
						<IconButton
								className={this.props.linked && 'is-linked'}
								icon={this.props.linked ?
										'admin-links' :
										'editor-unlink'}
								tooltip={this.props.linked ?
										__( 'Unlink Values', 'neve' ) :
										__( 'Link Values', 'neve' )}
								onClick={() => this.props.onLinked()}
						/>
					</div>
					{this.hasSetValues() && <div className="nv-sizing-reset">
						<IconButton
								onClick={this.props.onReset}
								tooltip={__( 'Reset all Values', 'neve' )}
								icon="image-rotate"
								className="reset">
						</IconButton>
					</div>}
				</div>
		);
	}

	hasSetValues() {
		let defaults = this.props.defaults;
		return this.props.options.filter( option => {
			return option.value !== defaults[option.type];
		} ).length > 0;
	}
}

SizingControl.propTypes = {
	options: PropTypes.array.isRequired,
	defaults: PropTypes.array.isRequired,
	onLinked: PropTypes.func.isRequired,
	onChange: PropTypes.func.isRequired,
	linked: PropTypes.bool.isRequired,
	onReset: PropTypes.func
};

export default SizingControl;
