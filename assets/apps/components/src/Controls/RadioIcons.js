/* jshint esversion: 6 */
import PropTypes from 'prop-types';
import classnames from 'classnames';
import SVG from '../Common/svg';

import { Button, TextareaControl } from '@wordpress/components';
import { useState } from '@wordpress/element';
import { __ } from '@wordpress/i18n';

const RadioIcons = ({
	options,
	onChange,
	value,
	customSetting,
	showLabels,
	largeButtons = false,
}) => {
	const [open, setOpen] = useState(value === 'custom');
	const [customSVG, setCustomSVG] = useState(
		customSetting ? customSetting() : ''
	);
	const [customValue, setCustomValue] = useState(
		customSetting ? customSetting() : ''
	);

	const updateCustomValue = () => {
		customSetting.set(customSVG);
		setCustomValue(customSVG);
	};

	const Buttons = () => {
		return Object.keys(options).map((type, index) => {
			if (options[type].icon === 'text') {
				return (
					<Button
						key={index}
						className={classnames('is-text', {
							active: value?.toString() === type,
						})}
						onClick={() => {
							onChange(type);
						}}
					>
						{options[type].tooltip}
					</Button>
				);
			}
			const icon = SVG[options[type].icon] || options[type].icon;
			return (
				<span key={index}>
					<Button
						aria-label={options[type].tooltip}
						className={classnames({
							active: value?.toString() === type,
						})}
						icon={icon}
						onClick={() => {
							onChange(type);
							setOpen(type === 'custom');
						}}
					/>
					{showLabels && (
						/* TODO: Add proper label id for this */
						/* eslint-disable-next-line jsx-a11y/label-has-for */
						<label>{options[type].tooltip}</label>
					)}
				</span>
			);
		});
	};

	const wrapClasses = classnames([
		'neve-radio-icons',
		{ 'large-buttons': largeButtons },
	]);

	return (
		<>
			<div className={wrapClasses}>
				<Buttons />
			</div>
			{open && (
				<div className="neve-radio-icons-custom-svg">
					<TextareaControl
						label={__('Custom SVG', 'neve')}
						onChange={setCustomSVG}
						value={customSVG}
						rows={8}
					/>
					<div className="custom-svg-buttons">
						<Button
							isPrimary
							isSmall
							disabled={customSVG === customValue}
							onClick={updateCustomValue}
						>
							{__('Save', 'neve')}
						</Button>
						<Button
							isSecondary
							isSmall
							onClick={() => setCustomSVG('')}
						>
							{__('Clear', 'neve')}
						</Button>
					</div>
				</div>
			)}
		</>
	);
};

RadioIcons.propTypes = {
	options: PropTypes.object.isRequired,
	onChange: PropTypes.func.isRequired,
	value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	showLabels: PropTypes.bool,
};

export default RadioIcons;
