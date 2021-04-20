import { useState } from '@wordpress/element';
import IconPicker from './IconPicker';
import * as icons from '../common/icons';

const IconField = ({ label = 'Icon', chosenIcon }) => {
	const [isOpen, open] = useState(false);
	const [icon, setIcon] = useState(icons.facebook.icon);
	const [field, setField] = useState(icons.facebook.id);

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
			<label id="icon-field">{label}</label>
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
						//
						href="javascript: return false;"
						className="button nv--remove-icon"
						onClick={closeIconsContainer}
					>
						{/*<Icon icon={closeSmall} />*/}
						<span className="dashicons dashicons-no" />
					</a>
				</div>

				<IconPicker selectIcon={selectIcon} isOpen={isOpen} />
			</div>
		</>
	);
};

export default IconField;
