/* jshint esversion: 6 */
import { __ } from '@wordpress/i18n';
import { useState, useEffect } from '@wordpress/element';
import { MediaUpload } from '@wordpress/media-utils';
import {
	Button,
	ButtonGroup,
	RangeControl,
	FocalPointPicker,
	Dashicon,
	ToggleControl,
	Placeholder,
} from '@wordpress/components';

import PropTypes from 'prop-types';
import ColorControl from '../common/ColorControl';

const BackgroundComponent = ( { control } ) => {
	const value = control.setting.get();
	const { label } = control.params;

	const [ values, setValues ] = useState( {
		type: value.type || 'color',
		imageUrl: value.imageUrl || '',
		focusPoint: value.focusPoint || { x: 0.5, y: 0.5 },
		colorValue: value.colorValue || '#ffffff',
		overlayColorValue: value.overlayColorValue || '',
		overlayOpacity: value.overlayOpacity || 50,
		fixed: value.fixed || false,
		useFeatured: value.useFeatured || false,
	} );

	useEffect( () => {
		document.addEventListener( 'neve-changed-customizer-value', ( e ) => {
			if ( ! e.detail ) return false;
			if ( e.detail.id !== control.id ) return false;
			updateSetting( e.detail.value );
			setValues( e.detail.value );
		} );
	} );

	const renderButtons = () => {
		const { type } = values;
		const types = {
			color: __( 'Color', 'neve' ),
			image: __( 'Image', 'neve' ),
		};

		return Object.keys( types ).map( ( buttonType, index ) => {
			return (
				<Button
					key={ index }
					isPrimary={ buttonType === type }
					isSecondary={ buttonType !== type }
					onClick={ () => {
						updateSetting( { type: buttonType } );
					} }
				>
					{ types[ buttonType ] }
				</Button>
			);
		} );
	};

	const updateSetting = ( newValues ) => {
		const result = { ...values, ...newValues };
		setValues( result );
		control.setting.set( {
			...control.setting.get(),
			...result,
		} );
	};

	const renderColorControls = () => (
		<ColorControl
			selectedColor={ values.colorValue }
			label={ __( 'Color', 'neve' ) }
			onChange={ ( colorValue ) => {
				updateSetting( {
					colorValue,
				} );
			} }
		/>
	);

	const renderImageControls = () => (
		<>
			<ToggleControl
				label={ __( 'Use Featured Image', 'neve' ) }
				checked={ values.useFeatured }
				onChange={ ( useFeatured ) => {
					updateSetting( {
						useFeatured,
					} );
				} }
			/>
			{ ! values.imageUrl ? (
				<Placeholder
					icon="format-image"
					label={
						values.useFeatured
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
						render={ ( { open } ) => (
							<Button isSecondary onClick={ open }>
								{ __( 'Add Image', 'neve' ) }
							</Button>
						) }
						onSelect={ ( imageData ) => {
							updateSetting( {
								imageUrl: imageData.url,
							} );
						} }
						allowedTypes={ [ 'image' ] }
					/>
				</Placeholder>
			) : (
				<>
					<Button
						className="remove-image"
						isDestructive
						isLink
						onClick={ () => {
							updateSetting( {
								imageUrl: '',
							} );
						} }
					>
						<Dashicon icon="no" />
						{ values.useFeatured
							? __( 'Remove Fallback Image', 'neve' )
							: __( 'Remove Image', 'neve' ) }
					</Button>
					<FocalPointPicker
						url={ values.imageUrl }
						value={ values.focusPoint }
						onChange={ ( val ) => {
							const newPoint = {
								x: parseFloat( val.x ).toFixed( 2 ),
								y: parseFloat( val.y ).toFixed( 2 ),
							};
							updateSetting( {
								focusPoint: newPoint,
							} );
						} }
					/>
				</>
			) }
			<ToggleControl
				label={ __( 'Fixed Background', 'neve' ) }
				checked={ values.fixed }
				onChange={ ( fixed ) => {
					updateSetting( { fixed } );
				} }
			/>
			<ColorControl
				label={ __( 'Overlay Color', 'neve' ) }
				selectedColor={ values.overlayColorValue }
				onChange={ ( overlayColorValue ) => {
					updateSetting( {
						overlayColorValue,
					} );
				} }
			/>
			<div
				className="neve-color-preview"
				style={ {
					backgroundColor: values.overlayColorValue,
				} }
			/>
			<RangeControl
				label={ __( 'Overlay Opacity', 'neve' ) }
				value={ values.overlayOpacity }
				onChange={ ( overlayOpacity ) => {
					updateSetting( {
						overlayOpacity,
					} );
				} }
				min="0"
				max="100"
			/>
		</>
	);

	return (
		<>
			{ label && (
				<span className="customize-control-title">{ label }</span>
			) }
			<div className="control--top-toolbar">
				<ButtonGroup className="neve-background-type-control">
					{ renderButtons() }
				</ButtonGroup>
			</div>
			<div className="control--body">
				{ values.type === 'color' && renderColorControls() }
				{ values.type === 'image' && renderImageControls() }
			</div>
		</>
	);
};

BackgroundComponent.propTypes = {
	control: PropTypes.object.isRequired,
};

export default BackgroundComponent;
