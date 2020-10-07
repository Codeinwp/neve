import PropTypes from 'prop-types';

import { Component } from '@wordpress/element';

class SingleSizingInput extends Component {
	constructor( props ) {
		super( props );

		this.state = {
			isOpen: false,
		};
	}

	render() {
		return (
			<div className="nv-sizing-item">
				<input
					type="number"
					className={
						this.props.type ? this.props.type + '-input' : ''
					}
					value={ this.props.value }
					min={ this.props.min }
					max={ this.props.max }
					step={ this.props.step }
					onChange={ ( e ) =>
						this.props.onChange(
							this.props.type,
							e.target.value === '' ? 0 : e.target.value
						)
					}
				/>
				{ this.props.type && (
					<label
						className="label"
						htmlFor={ this.props.type + '-input' }
					>
						{ this.props.type }
					</label>
				) }
			</div>
		);
	}
}

SingleSizingInput.propTypes = {
	type: PropTypes.string,
	value: PropTypes.oneOfType( [ PropTypes.string, PropTypes.number ] ),
	min: PropTypes.number,
	max: PropTypes.number,
	step: PropTypes.number,
	onChange: PropTypes.func,
};

export default SingleSizingInput;
