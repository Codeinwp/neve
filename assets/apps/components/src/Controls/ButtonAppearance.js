import PropTypes from 'prop-types';
import { __ } from '@wordpress/i18n';
import SizingControl from '../Controls/Sizing';
import { Panel, PanelBody, PanelRow } from '@wordpress/components';
import ColorControl from './ColorControl';
import RadioIcons from './RadioIcons';

const ButtonAppearance = ({ label, value, onChange, noHover, defaultVals }) => {
	const { type, borderRadius, borderWidth } = value;

	const TypeControl = () => {
		const types = {
			fill: {
				label: 'fill',
				tooltip: __('Filled', 'neve'),
				icon: 'text',
			},
			outline: {
				label: 'outline',
				tooltip: __('Outline', 'neve'),
				icon: 'text',
			},
		};
		const updateType = (nextType) => {
			onChange('type', nextType);
		};

		return (
			<RadioIcons options={types} onChange={updateType} value={type} />
		);
	};

	const renderColors = () => {
		if (!type) {
			return null;
		}
		const settings = {
			normal: {
				label: __('Normal', 'neve'),
				controls: {
					background: __('Background', 'neve'),
					text:
						type === 'fill'
							? __('Text', 'neve')
							: __('Text and Border', 'neve'),
				},
			},
			hover: {
				label: __('Hover', 'neve'),
				controls: {
					backgroundHover: __('Background', 'neve'),
					textHover:
						type === 'fill'
							? __('Text', 'neve')
							: __('Text and Border', 'neve'),
				},
			},
		};

		return (
			<Panel>
				{Object.keys(settings).map((optionType, panelIndex) => {
					if (noHover && optionType === 'hover') {
						return null;
					}

					return (
						<PanelBody
							key={panelIndex}
							title={noHover ? '' : settings[optionType].label}
							initialOpen={optionType === 'normal'}
						>
							{Object.keys(settings[optionType].controls).map(
								(controlSlug, controlIndex) => {
									return (
										<PanelRow key={controlIndex}>
											<ColorControl
												label={
													settings[optionType]
														.controls[controlSlug]
												}
												allowGradient={
													settings[optionType]
														.controls[
														controlSlug
													] ===
													__('Background', 'neve')
												}
												defaultValue={
													defaultVals[controlSlug] ||
													null
												}
												selectedColor={
													value[controlSlug]
												}
												onChange={(nextColor) => {
													onChange(
														controlSlug,
														nextColor
													);
												}}
											/>
										</PanelRow>
									);
								}
							)}
						</PanelBody>
					);
				})}
			</Panel>
		);
	};

	const borderControls = () => {
		const directions = {
			top: __('Top', 'neve'),
			right: __('Right', 'neve'),
			bottom: __('Bottom', 'neve'),
			left: __('Left', 'neve'),
		};

		const widthOptions = [];
		const radiusOptions = [];

		Object.keys(directions).map((direction) => {
			widthOptions.push({
				type: direction,
				label: direction[direction],
				value: borderWidth[direction] || '',
			});
			radiusOptions.push({
				type: direction,
				label: direction[direction],
				value: borderRadius[direction] || '',
			});
			return direction;
		});

		return (
			<>
				<span className="customize-control-title">
					{__('Border Radius', 'neve')}
				</span>
				<SizingControl
					min={0}
					max={100}
					step={1}
					options={radiusOptions}
					defaults={defaultVals.borderRadius}
					value={borderRadius}
					onChange={(newVal) => {
						onChange('borderRadius', newVal);
					}}
					onReset={() => {
						onChange('borderRadius', defaultVals.borderRadius);
					}}
				/>
				{type === 'outline' && (
					<>
						<span className="customize-control-title">
							{__('Border Width', 'neve')}
						</span>
						<SizingControl
							min={0}
							max={100}
							step={1}
							options={widthOptions}
							defaults={defaultVals.borderWidth}
							value={borderWidth}
							onChange={(newVal) => {
								onChange('borderWidth', newVal);
							}}
							onReset={() => {
								onChange(
									'borderWidth',
									defaultVals.borderWidth
								);
							}}
						/>
					</>
				)}
			</>
		);
	};

	return (
		<div className="neve-button-appearance-control">
			{label && <span className="customize-control-title">{label}</span>}
			<div className="neve-white-background-control">
				<span className="customize-control-title">
					{__('Style', 'neve')}
				</span>
				<TypeControl />
				{borderControls()}
				{renderColors()}
			</div>
		</div>
	);
};

const valuePropTypeTemplate = PropTypes.shape({
	type: PropTypes.oneOf(['outline', 'fill', '']),
	background: PropTypes.string,
	backgroundHover: PropTypes.string,
	text: PropTypes.string,
	textHover: PropTypes.string,
	borderRadius: PropTypes.shape({
		top: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
		bottom: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
		right: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
		left: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	}),
	borderWidth: PropTypes.shape({
		top: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
		bottom: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
		right: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
		left: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	}),
});

ButtonAppearance.propTypes = {
	value: valuePropTypeTemplate,
	defaultVals: valuePropTypeTemplate,
};

export default ButtonAppearance;
