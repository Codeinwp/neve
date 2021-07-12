import React from 'react';
import {
	Button,
	Icon,
	Popover,
	Tooltip,
	TextControl,
	ButtonGroup,
} from '@wordpress/components';
import { useState } from '@wordpress/element';
import { __ } from '@wordpress/i18n';

const IconSelector = ({ label, value, onIconChoice, icons }) => {
	const [visible, setVisible] = useState(false);
	const [searchValue, setSearchValue] = useState('');

	const handleRemove = () => {
		onIconChoice('');
		setSearchValue('');
	};

	const transformIcons = (tempIcons) => {
		return Object.entries(tempIcons).map(([iconName, iconSVG]) => {
			return (
				<Tooltip className="tooltip" text={iconName} key={iconName}>
					<Button
						className="icon-button"
						onClick={() => {
							onIconChoice(iconName);
							setVisible(false);
							setSearchValue('');
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
			if (iconName.indexOf(searchValue) > -1) {
				tempIcons[iconName] = svg;
			}
		}
		return tempIcons;
	};

	const getContent = () => {
		const iconsToShow = transformIcons(filterOptions());
		return (
			<div className="icons-popover-content">
				<TextControl
					placeholder={__('Search', 'neve')}
					value={searchValue}
					type="search"
					onChange={setSearchValue}
					className="icons-popover-header"
				/>
				<div className="icons-container">{iconsToShow}</div>
			</div>
		);
	};

	return (
		<>
			<div className="neve-control-header icon-control">
				{label && (
					<span className="customize-control-title">{label}</span>
				)}
				{value !== '' && (
					<ButtonGroup className="icon-setter">
						<Button
							className="repeater-icon-preview"
							onClick={() => setVisible(!visible)}
						>
							{value !== '' && icons[value]}
							{value === '' && <Icon icon="plus-alt2" />}
						</Button>
						<Button
							className="repeater-delete-icon"
							onClick={handleRemove}
						>
							<Icon icon="no-alt" />
						</Button>
					</ButtonGroup>
				)}
				{value === '' && (
					<Button
						className="add-icon-button"
						onClick={() => setVisible(!visible)}
					>
						<Icon icon="plus-alt2" />
					</Button>
				)}
				{visible && (
					<Popover
						position="bottom left"
						onFocusOutside={() => {
							setVisible(false);
							setSearchValue('');
						}}
					>
						{getContent()}
					</Popover>
				)}
			</div>
		</>
	);
};

export default IconSelector;
