import * as icons from '../common/icons';
import { useState, useEffect } from '@wordpress/element';

const IconPicker = ({ selectIcon, isOpen }) => {
	const [socialIcons, setSocialIcons] = useState();
	const [filtered, filterIcons] = useState();

	useEffect(() => {
		const iconsArr = [];
		Object.keys(icons).map((icon) => iconsArr.push(icons[icon]));
		setSocialIcons(iconsArr);
		filterIcons(iconsArr);
	}, []);

	useEffect(() => {
		if (isOpen === true) {
			const searchInput = document.getElementById('nv--search-input');
			searchInput.focus();
		}
	}, [isOpen]);

	const getIcons = () => {
		return filtered.map((icon) => {
			return (
				// eslint-disable-next-line jsx-a11y/anchor-is-valid
				<a
					//
					href="javascript: return false;"
					key={icon.id}
					onClick={() => selectIcon(icon.icon, icon.id)}
				>
					{icon.icon}
				</a>
			);
		});
	};

	const filterHandler = (e) => {
		const filteredIcons = socialIcons.filter((item) => {
			return item.id.indexOf(e.target.value.toLowerCase()) !== -1;
		});
		filterIcons(filteredIcons);
	};

	return (
		isOpen && (
			<div className="nv--icons-container">
				<div className="nv--icons-search">
					<svg
						width="15"
						height="15"
						viewBox="0 0 1792 1792"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path d="M1216 832q0-185-131.5-316.5t-316.5-131.5-316.5 131.5-131.5 316.5 131.5 316.5 316.5 131.5 316.5-131.5 131.5-316.5zm512 832q0 52-38 90t-90 38q-54 0-90-38l-343-342q-179 124-399 124-143 0-273.5-55.5t-225-150-150-225-55.5-273.5 55.5-273.5 150-225 225-150 273.5-55.5 273.5 55.5 225 150 150 225 55.5 273.5q0 220-124 399l343 343q37 37 37 90z" />
					</svg>
					<input
						type="text"
						placeholder="Find an icon.."
						onChange={filterHandler}
						id="nv--search-input"
					/>
				</div>
				{getIcons()}
			</div>
		)
	);
};

export default IconPicker;
