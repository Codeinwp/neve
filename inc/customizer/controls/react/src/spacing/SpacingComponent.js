/* jshint esversion: 6 */
import PropTypes from 'prop-types';
import ResponsiveControl from '../common/Responsive.js';
import SizingControl from '../common/Sizing.js';

const { __ } = wp.i18n;
const {
	Component,
	Fragment
} = wp.element;

class SpacingComponent extends Component {
	constructor(props) {
		super( props );
		console.log(props.control.setting);
		this.state = {
			value: props.control.setting.get(),
			linked: false,
			device: 'desktop'
		};
	}

	render() {
		console.log( this.state.value );
		const options = [
			{ 'label': 'top' },
			{ 'label': 'right' },
			{ 'label': 'bottom' },
			{ 'label': 'left' }
		];
		return (
				<Fragment>
					<ResponsiveControl
							controlLabel={this.props.control.params.label}
							onChange={(device) => {
								this.setState( { device } );
							}}
					>
						<SizingControl
								options={options}
								min={0}
								max={150}
								linked={this.state.linked}
								onLinked={() => this.setState( { linked: !this.state.linked } )}
						/>
					</ResponsiveControl>
				</Fragment>
		);
	}
}

SpacingComponent.propTypes = {
	control: PropTypes.object.isRequired
};

export default SpacingComponent;
