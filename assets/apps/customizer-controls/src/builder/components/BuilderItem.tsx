import React from 'react';
import { Button, Icon } from '@wordpress/components';
import { closeSmall, cog, dragHandle, settings } from '@wordpress/icons';
import { __ } from '@wordpress/i18n';
import { RowTypes, SlotTypes } from '../../@types/utils';
import { useContext } from '@wordpress/element';
import classnames from 'classnames';
import BuilderContext from '../BuilderContext';

type Props = {
	row: RowTypes;
	slot: SlotTypes;
	index: number;
	componentId: string;
	currentSection: string;
};

const BuilderItem: React.FC<Props> = (props) => {
	const { componentId, currentSection, slot, row, index } = props;
	const { actions, builder, sidebarItems } = useContext(BuilderContext);

	const itemDetails =
		window.NeveReactCustomize.HFG[builder].items[componentId];

	if (!itemDetails) {
		return null;
	}

	const { name, section } = itemDetails;
	const { removeItem, setSidebarItems } = actions;

	const isBlockWidget = section && section.includes('neve_sidebar-widgets');

	const isActive = currentSection === section;
	const itemSection = window.wp.customize.section(section);

	const focusItemWidget = () => {
		const newSection = section.replace('neve_', '');
		window.wp.customize.section(newSection).focus();
	};

	const focusItemSection = () => {
		itemSection.focus();
	};

	const remove = () => {
		removeItem(row, slot, index);
		itemSection.expanded(false);
		setSidebarItems(
			[...sidebarItems, { id: componentId }].sort((a, b) => {
				return a.id < b.id ? -1 : 1;
			})
		);
	};

	const iconSize = 18;

	const itemClasses = classnames('builder-item', { active: isActive });

	return (
		<div className={itemClasses}>
			<Icon className="handle" icon={dragHandle} size={15} />
			<span className="name">{name}</span>
			<div className="actions">
				<Button
					icon={cog}
					iconSize={iconSize}
					className="settings"
					onClick={
						!isBlockWidget ? focusItemSection : focusItemWidget
					}
					label={__('Item Settings', 'neve')}
					showTooltip={false}
				/>
				{isBlockWidget && (
					<Button
						icon={settings}
						iconSize={iconSize}
						className="settings"
						onClick={focusItemSection}
						label={__('Widget Settings', 'neve')}
						showTooltip={false}
					/>
				)}
				<Button
					iconSize={iconSize}
					icon={closeSmall}
					className="remove"
					onClick={remove}
					label={__('Remove Item', 'neve')}
					showTooltip={false}
				/>
			</div>
		</div>
	);
};

export default BuilderItem;
