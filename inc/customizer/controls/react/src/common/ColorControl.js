import PropTypes from 'prop-types';
import GlobalColorsPicker from '../common/GlobalColorsPicker';
import { ColorPicker, Button, Dropdown } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import classnames from 'classnames';

const ColorControl = ({
	label,
	selectedColor,
	onChange,
	defaultValue,
	disableGlobal,
}) => {
	let toggle = null;

	const handleChange = (value) => {
		const { r, g, b, a } = value.rgb;
		if (a < 1) {
			onChange(`rgba(${r}, ${g}, ${b}, ${a})`);
			return false;
		}
		onChange(value.hex);
	};

	const isGlobal = selectedColor && selectedColor.indexOf('var') > -1;

	const handleClear = () => {
		onChange(defaultValue || '');
		toggle();
	};

	const wrapClasses = classnames([
		'neve-control-header',
		'neve-color-component',
		{ 'allows-global': !disableGlobal },
	]);

	return (
		<div className={wrapClasses}>
			{label && <span className="customize-control-title">{label}</span>}
			{!disableGlobal && (
				<GlobalColorsPicker
					isGlobal={isGlobal}
					activeColor={selectedColor}
					onChange={onChange}
				/>
			)}
			<Dropdown
				renderToggle={({ isOpen, onToggle }) => {
					toggle = onToggle;
					return (
						<Button
							isSecondary
							onClick={onToggle}
							aria-expanded={isOpen}
							aria-label={__('Color', 'neve')}
						>
							<span
								className="color"
								style={{ backgroundColor: selectedColor }}
							/>
							<span className="gradient" />
						</Button>
					);
				}}
				renderContent={() => (
					<>
						<a href="#" />
						<ColorPicker
							color={selectedColor}
							onChangeComplete={handleChange}
						/>
						{selectedColor && (
							<Button
								className="clear"
								isPrimary
								onClick={handleClear}
							>
								{__('Clear', 'neve')}
							</Button>
						)}
					</>
				)}
			/>
		</div>
	);
};

ColorControl.defaultProps = {
	disableGlobal: false,
};

ColorControl.propTypes = {
	label: PropTypes.string,
	onChange: PropTypes.func.isRequired,
	selectedColor: PropTypes.string,
	defaultValue: PropTypes.string,
	disableGlobal: PropTypes.bool,
};

export default ColorControl;
