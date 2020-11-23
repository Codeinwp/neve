/* jshint esversion: 6 */

import PropTypes from 'prop-types';
import ColorControl from '../common/ColorControl';

import { __ } from '@wordpress/i18n';
import { Component, Fragment } from '@wordpress/element';
import { MediaUpload } from '@wordpress/media-utils';

const {
	Button,
	ButtonGroup,
	RangeControl,
	FocalPointPicker,
	Dashicon,
	ToggleControl,
	Placeholder,
} = wp.components;

class BackgroundComponent extends Component {
	constructor( props ) {
		super( props );
		const value = props.control.setting.get();

		this.state = {
			type: value.type || 'color',
			imageUrl: value.imageUrl || '',
			focusPoint: value.focusPoint || {
				x: 0.5,
				y: 0.5,
			},
			colorValue: value.colorValue || '#ffffff',
			overlayColorValue: value.overlayColorValue || '',
			overlayOpacity: value.overlayOpacity || 50,
			fixed: value.fixed || false,
			useFeatured: value.useFeatured || false,
		};
	}

	getButtons() {
		const types = [ 'color', 'image' ];
		const labels = {
			color: __( 'Color', 'neve' ),
			image: __( 'Image', 'neve' ),
		};
		const buttons = [];
		const self = this;
		types.map( function ( type, index ) {
			buttons.push(
				<Button
					key={ index }
					isPrimary={ self.state.type === type }
					isSecondary={ self.state.type !== type }
					onClick={ ( e ) => {
						self.updateSetting( { type } );
					} }
				>
					{ labels[ type ] }
				</Button>
			);
		} );

		return buttons;
	}

	render() {
		const self = this;

		return (
			<Fragment>
				{ this.props.control.params.label && (
					<span className="customize-control-title">
						{ this.props.control.params.label }
					</span>
				) }
				<div className="control--top-toolbar">
					<ButtonGroup className="neve-background-type-control">
						{ this.getButtons() }
					</ButtonGroup>
				</div>
				<div className="control--body">
					{ this.state.type === 'color' && (
						<Fragment>
							<ColorControl
								onChange={ ( colorValue ) => {
									self.updateSetting( {
										colorValue,
									} );
								} }
								selectedColor={ this.state.colorValue }
								label={ __( 'Color', 'neve' ) }
							/>
							<div
								className="neve-color-preview"
								style={ {
									backgroundColor: this.state.colorValue,
								} }
							/>
						</Fragment>
					) }
					{ this.state.type === 'image' && (
						<Fragment>
							<ToggleControl
								label={ __( 'Use Featured Image', 'neve' ) }
								checked={ this.state.useFeatured }
								onChange={ ( useFeatured ) => {
									this.updateSetting( {
										useFeatured,
									} );
								} }
							/>
							{ ! this.state.imageUrl ? (
								<Placeholder
									icon="format-image"
									label={
										this.state.useFeatured
											? __( 'Fallback Image', 'neve' )
											: __( 'Image', 'neve' )
									}
								>
									<p>
										{ __(
											'Select from the Media Library or upload a new image',
											'neve'
										) }
									</p>
									<MediaUpload
										onSelect={ ( imageData ) => {
											this.updateSetting( {
												imageUrl: imageData.url,
											} );
										} }
										allowedTypes={ [ 'image' ] }
										render={ ( { open } ) => (
											<Button
												isSecondary
												onClick={ open }
											>
												{ __( 'Add Image', 'neve' ) }
											</Button>
										) }
									/>
								</Placeholder>
							) : (
								<Fragment>
									<Button
										className="remove-image"
										isDestructive
										isLink
										onClick={ () => {
											this.updateSetting( {
												imageUrl: '',
											} );
										} }
									>
										<Dashicon icon="no" />
										{ this.state.useFeatured
											? __(
													'Remove Fallback Image',
													'neve'
											  )
											: __( 'Remove Image', 'neve' ) }
									</Button>
									<FocalPointPicker
										url={ this.state.imageUrl }
										value={ this.state.focusPoint }
										onChange={ ( val ) => {
											const newPoint = {
												x: parseFloat( val.x ).toFixed(
													2
												),
												y: parseFloat( val.y ).toFixed(
													2
												),
											};
											this.updateSetting( {
												focusPoint: newPoint,
											} );
										} }
									/>
								</Fragment>
							) }
							<ToggleControl
								label={ __( 'Fixed Background', 'neve' ) }
								checked={ this.state.fixed }
								onChange={ ( fixed ) => {
									this.updateSetting( { fixed } );
								} }
							/>
							<ColorControl
								selectedColor={ this.state.overlayColorValue }
								onChange={ ( overlayColorValue ) => {
									self.updateSetting( {
										overlayColorValue,
									} );
								} }
								label={ __( 'Overlay Color', 'neve' ) }
							/>
							<div
								className="neve-color-preview"
								style={ {
									backgroundColor: this.state
										.overlayColorValue,
								} }
							/>
							<RangeControl
								label={ __( 'Overlay Opacity', 'neve' ) }
								value={ this.state.overlayOpacity }
								onChange={ ( overlayOpacity ) => {
									this.updateSetting( {
										overlayOpacity,
									} );
								} }
								min="0"
								max="100"
							/>
						</Fragment>
					) }
				</div>
			</Fragment>
		);
	}

	componentDidMount() {
		const { control } = this.props;

		document.addEventListener( 'neve-changed-customizer-value', ( e ) => {
			if ( ! e.detail ) return false;
			if ( e.detail.id !== control.id ) return false;
			this.updateSetting( e.detail.value );
		} );
	}

	updateSetting( newValues ) {
		this.setState( newValues );
		this.props.control.setting.set( {
			...this.props.control.setting.get(),
			...newValues,
		} );
	}
}

BackgroundComponent.propTypes = {
	control: PropTypes.object.isRequired,
};

export default BackgroundComponent;
