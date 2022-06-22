import PropTypes from 'prop-types';
import { __ } from '@wordpress/i18n';
import SizingControl from '../Controls/Sizing';
import { Panel, PanelBody, PanelRow } from '@wordpress/components';
import ColorControl from './ColorControl';
import RadioIcons from './RadioIcons';
import Toggle from './Toggle';
import Range from '../../../customizer-controls/src/range/Range';

const ButtonAppearance = ({
	label,
	value,
	onChange,
	noHover,
	noShadow,
	defaultVals,
}) => {
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

		const shadowCommonControls = {
			color: {
				label: __('Shadow', 'neve') + ' ' + __('Color', 'neve'),
				type: 'color',
			},
			blur: {
				label: __('Blur', 'neve'),
				type: 'range',
				min: 0,
				max: 50,
			},
			width: {
				label: __('Offset X', 'neve'),
				type: 'range',
				min: -50,
				max: 50,
			},
			height: {
				label: __('Offset Y', 'neve'),
				type: 'range',
				min: -50,
				max: 50,
			},
		};
		const shadowSettings = {
			normal: {
				label: __('Button', 'neve') + ' ' + __('Shadow', 'neve'),
				controls: shadowCommonControls,
			},
			hover: {
				label: __('Button', 'neve') + ' ' + __('Shadow', 'neve'),
				controls: shadowCommonControls,
			},
		};

		return (
			<Panel>
				{Object.keys(settings).map((optionType, panelIndex) => {
					if (noHover && optionType === 'hover') {
						return null;
					}
					const shadowToggle =
						'useShadow' + (optionType === 'hover' ? 'Hover' : '');
					const shadowColor =
						'shadowColor' + (optionType === 'hover' ? 'Hover' : '');
					const shadowProperties =
						'shadowProperties' +
						(optionType === 'hover' ? 'Hover' : '');

					return (
						<PanelBody
							key={panelIndex}
							title={noHover ? '' : settings[optionType].label}
							initialOpen={optionType === 'normal'}
						>
							{/*
							 * Color controls for Button Appearance
							 */}
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
							{/*
							 * Shadow toggle for Button Appearance
							 */}
							{!noShadow && <hr />}
							{!noShadow && (
								<PanelRow key={`shadow_${optionType}`}>
									<Toggle
										label={
											__('Button', 'neve') +
											' ' +
											__('Shadow', 'neve')
										}
										checked={value[shadowToggle]}
										onChange={(nextValue) => {
											onChange(shadowToggle, nextValue);
										}}
									/>
								</PanelRow>
							)}
							{/*
							 * Shadow Controls for Button Appearance
							 */}
							{!noShadow &&
								value[shadowToggle] &&
								Object.keys(
									shadowSettings[optionType].controls
								).map((controlSlug, controlIndex) => {
									const {
										label: shadowControlLabel,
										type: shadowControlType,
										...controlArgs
									} = shadowSettings[optionType].controls[
										controlSlug
									];
									return (
										<PanelRow key={controlIndex}>
											{shadowControlType === 'color' && (
												<ColorControl
													label={shadowControlLabel}
													defaultValue={
														defaultVals[
															shadowColor
														] || null
													}
													selectedColor={
														value[shadowColor]
													}
													onChange={(nextColor) => {
														onChange(
															shadowColor,
															nextColor
														);
													}}
												/>
											)}
											{shadowControlType === 'range' && (
												<Range
													label={shadowControlLabel}
													defaultVal={
														defaultVals[
															shadowProperties
														] &&
														defaultVals[
															shadowProperties
														][controlSlug]
															? defaultVals[
																	shadowProperties
															  ][controlSlug]
															: 0
													}
													value={
														value[shadowProperties][
															controlSlug
														]
													}
													min={controlArgs.min}
													max={controlArgs.max}
													onChange={(nextValue) => {
														const updatedProp = {
															...value[
																shadowProperties
															],
														};
														updatedProp[
															controlSlug
														] = nextValue;
														onChange(
															shadowProperties,
															updatedProp
														);
													}}
												/>
											)}
										</PanelRow>
									);
								})}
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
	useShadow: PropTypes.bool,
	shadowColor: PropTypes.string,
	shadowProperties: PropTypes.shape({
		opacity: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
		blur: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
		width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
		height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	}),
	useShadowHover: PropTypes.bool,
	shadowColorHover: PropTypes.string,
	shadowPropertiesHover: PropTypes.shape({
		opacity: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
		blur: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
		width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
		height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	}),
});

ButtonAppearance.propTypes = {
	value: valuePropTypeTemplate,
	defaultVals: valuePropTypeTemplate,
};

export default ButtonAppearance;
