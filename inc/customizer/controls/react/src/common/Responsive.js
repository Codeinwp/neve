import { Button, Tooltip, ButtonGroup } from '@wordpress/components';
import { useEffect } from '@wordpress/element';
import { __ } from '@wordpress/i18n';

import PropTypes from 'prop-types';

const ResponsiveControl = ({
	onChange,
	excluded,
	controlLabel,
	hideResponsive,
	children,
}) => {
	const changeViewType = (device) => {
		onChange(device);
		wp.customize.previewedDevice(device);
	};

	useEffect(() => {
		document.addEventListener('neveChangedRepsonsivePreview', (e) => {
			changeViewType(e.detail);
		});
	}, []);

	const dispatchViewChange = (device) => {
		const event = new CustomEvent('neveChangedRepsonsivePreview', {
			detail: device,
		});
		document.dispatchEvent(event);
	};

	const devices = {
		desktop: {
			tooltip: __('Desktop', 'neve'),
			icon: 'desktop',
		},
		tablet: {
			tooltip: __('Tablet', 'neve'),
			icon: 'tablet',
		},
		mobile: {
			tooltip: __('Mobile', 'neve'),
			icon: 'smartphone',
		},
	};

	const deviceMap = {};

	Object.keys(devices).map((key) => {
		if (excluded) {
			if (excluded.includes(key)) {
				return false;
			}
		}
		deviceMap[key] = devices[key];
	});

	const renderDeviceButton = (device, index) => {
		const { tooltip, icon } = deviceMap[device];

		return (
			<Tooltip text={tooltip} key={index}>
				<Button
					aria-label={tooltip}
					icon={icon}
					className={device}
					onClick={() => {
						dispatchViewChange(device);
					}}
				/>
			</Tooltip>
		);
	};

	return (
		<>
			<div className="neve-responsive-control-bar">
				{controlLabel && (
					<span className="customize-control-title">
						{controlLabel}
					</span>
				)}
				{!hideResponsive && (
					<div className="floating-controls">
						<ButtonGroup>
							{Object.keys(deviceMap).map((device, index) =>
								renderDeviceButton(device, index)
							)}
						</ButtonGroup>
					</div>
				)}
			</div>
			{children && (
				<div className="neve-responsive-controls-content">
					{children}
				</div>
			)}
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
