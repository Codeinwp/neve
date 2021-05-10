import { icons } from '../icons';
import { Icon } from '@wordpress/components';
import { useState, useEffect, useRef } from '@wordpress/element';

const IconPicker = ({ selectIcon, isOpen }) => {
	const [inputValue, setInputValue] = useState();
	const inputRef = useRef(null);

	useEffect(() => {
		if (inputRef.current) {
			inputRef.current.focus();
		}
	}, [isOpen]);

	const social = [];
	Object.keys(icons).map((icon) => social.push(icons[icon]));

	const mappedSocialIcons = social.map((icon) => (
		// eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions
		<span key={icon.id} onClick={() => selectIcon(icon.icon, icon.id)}>
			{icon.icon}
		</span>
	));

	const socialIcons = !inputValue
		? mappedSocialIcons
		: social
				.filter(
					(item) => item.id.indexOf(inputValue.toLowerCase()) > -1
				)
				.map((icon) => (
					// eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions
					<span
						key={icon.id}
						onClick={() => selectIcon(icon.icon, icon.id)}
					>
						{icon.icon}
					</span>
				));

	return (
		isOpen && (
			<div className="icon-picker--container">
				<div className="icons-search">
					<Icon icon={'search'} className="search" />
					<input
						type="text"
						placeholder="Find an icon.."
						onChange={(e) => setInputValue(e.target.value)}
						ref={inputRef}
					/>
				</div>
				{socialIcons}
			</div>
		)
	);
};

export default IconPicker;
