import { Button, Tooltip, ButtonGroup } from '@wordpress/components';
import { useState, useEffect } from '@wordpress/element';
import { useSelect, useDispatch } from '@wordpress/data';
import { __ } from '@wordpress/i18n';

import PropTypes from 'prop-types';
import classnames from 'classnames';

const ResponsiveControl = ( {
	onChange,
	excluded,
	controlLabel,
	hideResponsive,
	children,
} ) => {
	const [ view, setView ] = useState( 'desktop' );

	const changeViewType = ( device ) => {
		setView( device );
		wp.customize.previewedDevice( device );
		onChange( device );
	};

	const dispatchViewChange = ( device ) => {
		const event = new CustomEvent( 'neveChangedRepsonsivePreview', {
			detail: device,
		} );
		document.dispatchEvent( event );
	};

	const devices = {
		desktop: {
			tooltip: __( 'Desktop', 'neve' ),
			icon: 'desktop',
		},
		tablet: {
			tooltip: __( 'Tablet', 'neve' ),
			icon: 'tablet',
		},
		mobile: {
			tooltip: __( 'Mobile', 'neve' ),
			icon: 'smartphone',
		},
	};

	const deviceMap = {};

	Object.keys( devices ).map( ( key ) => {
		if ( excluded ) {
			if ( excluded.includes( key ) ) {
				return false;
			}
		}
		deviceMap[ key ] = devices[ key ];
	} );

	useEffect( () => {
		document.addEventListener( 'neveChangedRepsonsivePreview', ( e ) => {
			changeViewType( e.detail );
		} );
	}, [] );

	const DeviceButton = ( { device } ) => {
		const { tooltip, icon } = deviceMap[ device ];
		const classes = classnames( device, {
			'active-device': device === view,
		} );

		return (
			<Tooltip text={ tooltip }>
				<Button
					icon={ icon }
					className={ classes }
					onClick={ () => {
						dispatchViewChange( device );
					} }
				/>
			</Tooltip>
		);
	};

	return (
		<>
			<div className="neve-responsive-control-bar">
				{ controlLabel && (
					<span className="customize-control-title">
						{ controlLabel }
					</span>
				) }
				{ ! hideResponsive && (
					<div className="floating-controls">
						<ButtonGroup>
							{ Object.keys( deviceMap ).map(
								( device, index ) => (
									<DeviceButton
										key={ index }
										device={ device }
									/>
								)
							) }
						</ButtonGroup>
					</div>
				) }
			</div>
			{ children && (
				<div className="neve-responsive-controls-content">
					{ children }
				</div>
			) }
		</>
	);
};

ResponsiveControl.propTypes = {
	onChange: PropTypes.func,
	controlLabel: PropTypes.string,
	hideResponsive: PropTypes.bool,
	children: PropTypes.any,
	excluded: PropTypes.array,
};

export default ResponsiveControl;
