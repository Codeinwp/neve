/* jshint esversion: 6 */

import PropTypes from 'prop-types';

import { Component } from '@wordpress/element';

import { ToggleControl } from '@wordpress/components';

class ToggleComponent extends Component {
	constructor( props ) {
		super( props );
		this.state = {
			value: props.control.setting.get(),
		};
	}

	toggleValue( newValue ) {
		this.setState( {
			value: newValue,
		} );
		this.props.control.setting.set( newValue );
	}

	render() {
		return (
			<div className="neve-white-background-control">
				<ToggleControl
					className="neve-toggle-control"
					checked={ this.state.value }
					label={ this.props.control.params.label }
					onChange={ ( value ) => this.toggleValue( value ) }
				/>
				{ this.props.control.params.description && (
					<span
						className="customize-control-description"
						dangerouslySetInnerHTML={ {
							__html: this.props.control.params.description,
						} }
					/>
				) }
			</div>
		);
	}

	componentDidMount() {
		const { control } = this.props;
		document.addEventListener( 'neve-changed-customizer-value', ( e ) => {
			if ( ! e.detail ) return false;
			if ( e.detail.id !== control.id ) return false;
			this.toggleValue( e.detail.value );
		} );
	}
}

ToggleComponent.propTypes = {
	control: PropTypes.object.isRequired,
};

export default ToggleComponent;
