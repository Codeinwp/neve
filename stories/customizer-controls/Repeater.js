import React from 'react'
import './repeater.scss'
import PropTypes from "prop-types";
import classnames from "classnames";
import {Icon, TextControl, Tooltip} from "@wordpress/components";
import {__} from "@wordpress/i18n";
import {useState} from "@wordpress/element";

const List = (({ children }) => (
	<div className="nv-repeater-container">{children}</div>
));

const Item = ({
	component,
	index,
	onToggle,
	allowsToggle = true,
}) => {
	const [expanded, setExpanded] = useState(false);
	const arrowUp = <Icon icon="arrow-up"/>
	const arrowDown = <Icon icon="arrow-down"/>

	let visibilityDashiconStyle = {
		"fill": "#a0a5aa",
		"margin": "0 0 0 auto"
	};

	if (component.visibility === "yes") visibilityDashiconStyle["color"] = "#0073aa";

	const toggleExpand = (e) => {
		e.preventDefault();
		setExpanded(!expanded);
	}

	return (
		<div
			className={classnames([
				'nv-social-icons-element',
				{ 'no-toggle': !allowsToggle },
			])}
		>
			<div className="nv-repeater-item-header">
				{allowsToggle && (
					<Tooltip text={__('Toggle Visibility', 'neve')}>
						<button
							aria-label={__('Toggle Visibility', 'neve')}
							className="toggle repeater-visibility-button"
							onClick={(e) => {
								e.preventDefault();
								e.stopPropagation();
								onToggle(index);
							}}
						>
							<Icon icon="visibility" style={ visibilityDashiconStyle }/>
						</button>
					</Tooltip>
				)}
				<h4> { component.title } </h4>
				<button className="repeater-arrow-button" onClick={toggleExpand}>
					{ expanded ? arrowUp : arrowDown }
				</button>
			</div>
			{expanded && ( <ItemContent component={component}/> )}
		</div>
	);
};

const ItemContent = ({ component }) => {
	return (
		<div className="nv-repeater-content">
			// TODO
			<TextControl label="Title" />
		</div>
	);
}

const Repeater = ({
	value,
	components,
	onUpdate
}) => {
	const handleToggle = (index) => {
		let newValue = [...value];
		newValue[index].visibility = value[index].visibility === "yes" ? "no" : "yes";
		onUpdate(newValue);
	}

	let listItems = [];
	for (let i = 0; i < value.length; ++i) {
		listItems[i] = <Item
			component={ value[i] }
			onToggle={ handleToggle }
			index={ i }
		/>
	}

	return (
		<>
			<List
				children={ listItems }/>
		</>
	);
};

Repeater.propTypes = {
	value: PropTypes.array.isRequired,
};

export default Repeater;
