import { useState } from '@wordpress/element';
import IconPicker from './IconPicker';
import { icons } from '../common/icons';

const IconField = ({ label, selectedIcon }) => {
	const [isOpen, open] = useState(false);
	const [icon, setIcon] = useState(icons[`${selectedIcon}`].icon);
	const [field, setField] = useState(icons[`${selectedIcon}`].id);

	const openPicker = () => {
		open(!isOpen);
	};

	const selectIcon = (socialIcon, id) => {
		setIcon(socialIcon);
		setField(id);
		open(false);
	};

	const closeIconsContainer = () => {
		open(false);
	};

	return (
		<>
			<label className="customize-control-title">{label}</label>
			<div className="nv--icon-field-wrap">
				<div className="form">
					<button
						className="nv--icon-selector button"
						onClick={openPicker}
					>
						{icon}
					</button>
					<input
						type="text"
						className="nv-repeater-text-field has-value"
						value={field}
						readOnly
						onClick={openPicker}
					/>
					<a
						href="javascript: return false;"
						className="button nv--remove-icon"
						onClick={closeIconsContainer}
					>
						<span className="dashicons dashicons-no" />
					</a>
				</div>

				<IconPicker selectIcon={selectIcon} isOpen={isOpen} />
			</div>
		</>
	);
};

export default IconField;
