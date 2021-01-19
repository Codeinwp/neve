import PropTypes from 'prop-types';
import SingleSizingInput from '../common/SingleSizingInput.js';
import classnames from 'classnames';

import { __ } from '@wordpress/i18n';
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
	linked,
	onLinked,
}) => {
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
					key="link-icon"
					icon={linked ? 'admin-links' : 'editor-unlink'}
					onClick={onLinked}
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
						onChange={(type, value) => onChange(type, value)}
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
	onLinked: PropTypes.func,
	onChange: PropTypes.func.isRequired,
	linked: PropTypes.bool,
	onReset: PropTypes.func,
	noLinking: PropTypes.bool,
	min: PropTypes.number,
	max: PropTypes.number,
	step: PropTypes.number,
};

export default SizingControl;
