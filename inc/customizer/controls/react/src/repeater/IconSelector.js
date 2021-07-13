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
import VisibilitySensor from 'react-visibility-sensor';
import { update } from '@wordpress/icons';

const IconSelector = ({ label, value, onIconChoice, icons }) => {
	const [visible, setVisible] = useState(false);
	const [searchValue, setSearchValue] = useState('');
	const [loadUntil, setLoadUntil] = useState(15);

	const handleRemove = () => {
		onIconChoice('');
		setSearchValue('');
	};

	const transformIcons = (tempIcons) => {
		return Object.entries(tempIcons).map(([iconName, iconSVG], index) => {
			if (index < loadUntil) {
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
			}
			return null;
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
		const containment = document.getElementsByClassName(
			'components-popover__content'
		)[0];

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

				{loadUntil < Object.keys(iconsToShow).length && (
					<div className="icons-load-more">
						<VisibilitySensor
							containment={containment}
							onChange={(isVisible) => {
								if (isVisible) {
									setLoadUntil(loadUntil + 15);
								}
							}}
						>
							<Icon icon={update} />
						</VisibilitySensor>
					</div>
				)}
			</div>
		);
	};

	return (
		<>
			<div className="neve-control-header icon-control">
				{label && (
					<span className="customize-control-title">{label}</span>
				)}
				{icons[value] && (
					<ButtonGroup className="icon-setter">
						<Button
							className="repeater-icon-preview"
							onClick={() => setVisible(!visible)}
						>
							{icons[value]}
						</Button>
						<Button
							className="repeater-delete-icon"
							onClick={handleRemove}
						>
							<Icon icon="no-alt" />
						</Button>
					</ButtonGroup>
				)}
				{!icons[value] && (
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
