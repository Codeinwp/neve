import PropTypes from 'prop-types';

const { __ } = wp.i18n;
const {
	Popover,
	RangeControl
} = wp.components;
const { Component } = wp.element;

class SingleSizingInput extends Component {
	constructor(props) {
		super( props );
		this.state = {
			open: true
		};
	}

	render() {
		return (
				<div className="nv-sizing-item" onClick={() => {
					this.setState( { visible: true } );
				}}>
					<input
							onFocus={() => this.setState( { visible: true } )}
							type="number"
							className={this.props.type ? this.props.type + '-input' : ''}
							value={this.props.value}
							min={this.props.min}
							max={this.props.max}
							step={this.props.step}
							onChange={
								e => this.props.onChange( this.props.type,
										e.target.value === '' ? 0 : e.target.value )
							}
					>
					</input>
					{this.state.visible && <Popover
							onFocusOutside={() => {
								this.setState( { visible: false } );
							}}
					>
						<div className="range-control">
							<RangeControl
									value={this.props.value && this.props.value}
									initialPosition={this.props.value && this.props.value || 0}
									beforeIcon="minus"
									afterIcon="plus"
									min={this.props.min}
									max={this.props.max}
									step={this.props.step}
									onChange={
										e => this.props.onChange( this.props.type,
												e === '' ? 0 : e )
									}
							/>
						</div>
					</Popover>}
					{this.props.type && (
							<label className="label" htmlFor={this.props.type + '-input'}>
								{this.props.type}
							</label>
					)}
				</div>
		);
	}
}

SingleSizingInput.propTypes = {
	type: PropTypes.string,
	value: PropTypes.number,
	min: PropTypes.number,
	max: PropTypes.number,
	step: PropTypes.number,
	onChange: PropTypes.func
};

export default SingleSizingInput;
