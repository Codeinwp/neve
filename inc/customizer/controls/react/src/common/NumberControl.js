import PropTypes from 'prop-types';
import SizingControl from '../common/Sizing.js';
import classnames from 'classnames';
import ResponsiveControl from '../common/Responsive.js';

import { Button } from '@wordpress/components';
import { Component } from '@wordpress/element';

class NumberControl extends Component {
	render() {
		const { label, units, value, className, hasResponsive } = this.props;
		return (
			<div className={ className + ' neve-number-control-wrap' }>
				<div className="neve-control-header">
					{ label && (
						<span className="customize-control-title">
							{ label }
						</span>
					) }
					{ hasResponsive && (
						<ResponsiveControl
							onChange={ ( currentDevice ) =>
								this.props.onChangedDevice( currentDevice )
							}
						/>
					) }
					{ units && (
						<div className="neve-units">{ this.getButtons() }</div>
					) }
				</div>
				<SizingControl
					noLinking
					noRange
					options={ [ { value } ] }
					onChange={ ( type, value ) => {
						this.props.onChange( value );
					} }
					max={ this.props.max || 100 }
					min={ this.props.min || 0 }
					step={ this.props.step || 1 }
					defaults={ this.props.default }
					onReset={ () => {
						this.props.onReset();
					} }
				/>
			</div>
		);
	}

	getButtons() {
		const self = this;
		const { units } = this.props;
		if ( ! units ) return '';
		if ( units.length === 1 ) {
			return (
				<Button className="alone active" isSmall disabled>
					{ units[ 0 ] }
				</Button>
			);
		}
		return units.map( ( unit, index ) => {
			const buttonClass = classnames( {
				active: self.props.activeUnit === unit,
			} );
			return (
				<Button
					key={ index }
					isSmall
					onClick={ () => {
						self.props.onUnitChange( unit );
					} }
					className={ buttonClass }
				>
					{ unit }
				</Button>
			);
		} );
	}
}

NumberControl.propTypes = {
	label: PropTypes.string,
	value: PropTypes.oneOfType( [ PropTypes.string, PropTypes.number ] ),
	onChange: PropTypes.func.isRequired,
	onReset: PropTypes.func.isRequired,
	units: PropTypes.array || PropTypes.bool,
	default: PropTypes.oneOfType( [ PropTypes.string, PropTypes.number ] ),
	max: PropTypes.number,
	min: PropTypes.number,
	step: PropTypes.number,
	hasResponsive: PropTypes.bool,
	onChangedDevice: PropTypes.func,
	className: PropTypes.string,
};

export default NumberControl;
