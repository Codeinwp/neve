import { Dropdown, Button, Icon } from '@wordpress/components';
import { globe } from '@wordpress/icons';
import { __ } from '@wordpress/i18n';
import CustomPalette from './CustomPalette';
import classnames from 'classnames';

const GlobalColorsPicker = ({ onChange, activeColor, isGlobal }) => {
	const buttonClasses = classnames([
		'global-color-picker',
		{ active: isGlobal },
	]);

	return (
		<Dropdown
			renderToggle={({ isOpen, onToggle }) => (
				<Button
					onClick={onToggle}
					aria-expanded={isOpen}
					aria-label={__('Global Colors', 'neve')}
					role="button"
					className={buttonClasses}
				>
					<Icon size={20} icon={globe} />
				</Button>
			)}
			renderContent={() => (
				<>
					<CustomPalette
						onChange={onChange}
						title={__('Global Colors', 'neve')}
						activeColor={activeColor}
					/>
				</>
			)}
		/>
	);
};
export default GlobalColorsPicker;
