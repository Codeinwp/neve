import { useState, useEffect } from '@wordpress/element';
import { Button } from '@wordpress/components';
import IconPicker from './IconPicker';
import { icons } from '../icons';

const IconField = ({ label, selectedIcon }) => {
	const [isOpen, open] = useState(false);
	const [icon, setIcon] = useState();
	const [field, setField] = useState();

	useEffect(() => {
		if (!selectedIcon) {
			setIcon('');
			setField('');
		} else {
			setIcon(icons[`${selectedIcon}`].icon);
			setField(icons[`${selectedIcon}`].id);
		}
	}, [selectedIcon]);

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

	const addIcon =
		icon === '' ? (
			<Button className="nv--icon-selector button" onClick={openPicker}>
				<span className="dashicons dashicons-plus" />
			</Button>
		) : (
			<Button className="nv--icon-selector button" onClick={openPicker}>
				{icon}
			</Button>
		);

	return (
		<div className="field-repeat">
			{/* eslint-disable-next-line jsx-a11y/label-has-for */}
			<label className="customize-control-title">{label}</label>
			<div className="nv--icon-field-wrap">
				<div className="form">
					{addIcon}
					<input
						type="text"
						className="nv-repeater-text-field has-value"
						value={field}
						readOnly
						onClick={openPicker}
					/>
					<Button
						className="nv--remove-icon button"
						onClick={closeIconsContainer}
					>
						<span className="dashicons dashicons-no" />
					</Button>
				</div>

				<IconPicker selectIcon={selectIcon} isOpen={isOpen} />
			</div>
		</div>
	);
};

export default IconField;
