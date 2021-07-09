import React from 'react';
import { Button, Icon, Popover, Tooltip } from '@wordpress/components';
import { useState, useRef, useEffect } from '@wordpress/element';

const IconSelector = ({ label, value, onIconChoice, icons }) => {
	const [visible, setVisible] = useState(false);
	const [name, setName] = useState(value);
	const refInput = useRef();
	const addIcon = <Icon icon="plus-alt2" />;

	useEffect(() => {
		if (visible) {
			refInput.current.focus();
		} else {
			setName(value);
		}
	}, [visible]);

	const transformIcons = (tempIcons) => {
		return Object.entries(tempIcons).map(([iconName, iconSVG]) => {
			return (
				<Tooltip className="tooltip" text={iconName} key={iconName}>
					<Button
						className="icon-button"
						onClick={() => {
							onIconChoice(iconName);
							setName(iconName);
							setVisible(false);
						}}
					>
						{iconSVG}
					</Button>
				</Tooltip>
			);
		});
	};

	const filterOptions = () => {
		const tempIcons = {};
		for (const [iconName, svg] of Object.entries(icons)) {
			if (iconName.indexOf(name) > -1) {
				tempIcons[iconName] = svg;
			}
		}
		return tempIcons;
	};

	return (
		<>
			<div className="icon-selector">
				<span className="icon-selector-label">{label}</span>
				<div className="icon-selector-toggle">
					<Button
						isSecondary
						className="svg-container"
						onClick={() => setVisible(!visible)}
					>
						{icons[value] || addIcon}
					</Button>
					<input
						ref={refInput}
						className="repeater-icon-name"
						placeholder="Search icon"
						value={name}
						onChange={(e) => setName(e.target.value)}
						onClick={() => setVisible(true)}
					/>
				</div>
				{visible && (
					<Popover position="bottom left">
						<div className="icons-container">
							{transformIcons(filterOptions())}
						</div>
					</Popover>
				)}
			</div>
		</>
	);
};

export default IconSelector;
