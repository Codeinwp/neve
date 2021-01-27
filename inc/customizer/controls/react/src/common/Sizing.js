import PropTypes from 'prop-types';
import SingleSizingInput from '../common/SingleSizingInput.js';
import classnames from 'classnames';
import { useState } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import { mapValues } from 'lodash';
import { Button, Tooltip } from '@wordpress/components';

const SizingControl = ({
	noLinking,
	options,
	defaults,
	onChange,
	onReset,
	max,
	min,
	step,
	value,
}) => {
	const shouldValueBeLinked = () => {
		if (typeof value !== 'object') {
			return false;
		}
		if (noLinking) {
			return false;
		}
		const keys = Object.keys(value);
		const values = keys.map((k) => value[k]);
		// eslint-disable-next-line eqeqeq
		return values.every((v) => v == values[0]);
	};

	const [linked, setLinked] = useState(shouldValueBeLinked());

	const toggleLinked = () => {
		setLinked(!linked);
	};

	const updateValue = (type, numericValue) => {
		// If the value is singular, or we have no type for it.
		if (typeof type === 'undefined' || typeof value !== 'object') {
			onChange(numericValue);
			return false;
		}

		let nextValue = { ...value };

		if (linked) {
			nextValue = mapValues(nextValue, () => numericValue);
		} else {
			nextValue = { ...nextValue, [type]: numericValue };
		}

		onChange(nextValue);
	};

	const wrapClasses = classnames([
		'neve-responsive-sizing',
		{ 'single-input': options.length === 1 },
	]);

	const hasSetValues = () => {
		if (typeof defaults !== 'object') {
			// eslint-disable-next-line eqeqeq
			return parseFloat(defaults) != parseFloat(options[0].value);
		}
		return (
			options.filter(
				// eslint-disable-next-line eqeqeq
				(option) => {
					return option.value != defaults[option.type];
				}
			).length > 0
		);
	};

	const LinkButton = () => {
		if (noLinking) {
			return null;
		}

		return (
			<Tooltip
				key="tooltip-link"
				text={
					linked
						? __('Unlink Values', 'neve')
						: __('Link Values', 'neve')
				}
			>
				<Button
					aria-label={__('Link values', 'neve')}
					key="link-icon"
					icon={linked ? 'admin-links' : 'editor-unlink'}
					onClick={toggleLinked}
					className={classnames([{ active: linked }, 'link'])}
				/>
			</Tooltip>
		);
	};

	return (
		<div className={wrapClasses}>
			<LinkButton />
			{options.map((i, n) => {
				return (
					<SingleSizingInput
						key={n}
						onChange={(type, value) => updateValue(type, value)}
						value={i.value}
						className={i.type ? i.type + '-input' : ''}
						type={i.type}
						label={i.label || null}
						max={max}
						min={min}
						step={step}
					/>
				);
			})}
			{hasSetValues() && (
				<Tooltip
					key="tooltip-reset"
					text={
						options.length > 1
							? __('Reset all Values', 'neve')
							: __('Reset Value', 'neve')
					}
				>
					<Button
						key="reset-icon"
						icon="image-rotate"
						className="reset"
						onClick={onReset}
					/>
				</Tooltip>
			)}
		</div>
	);
};

SizingControl.propTypes = {
	options: PropTypes.array.isRequired,
	defaults: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number,
		PropTypes.object,
	]),
	onChange: PropTypes.func.isRequired,
	onReset: PropTypes.func,
	noLinking: PropTypes.bool,
	min: PropTypes.number,
	max: PropTypes.number,
	step: PropTypes.number,
};

export default SizingControl;
