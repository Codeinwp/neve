import React from 'react';
import { Button, Icon } from '@wordpress/components';
import { closeSmall, cog, dragHandle } from '@wordpress/icons';
import { __ } from '@wordpress/i18n';
import {
	BuilderActions,
	RowTypes,
	SlotTypes,
	StringObjectKeys,
} from '../../@types/utils';
import { useEffect, useState } from '@wordpress/element';
import classnames from 'classnames';

interface Props {
	componentId: string;
	builder: string;
	actions: BuilderActions;
	slot: SlotTypes;
	row: RowTypes;
	index: number;
	currentSection: string;
}

const BuilderItem: React.FC<Props> = (props) => {
	const {
		componentId,
		builder,
		actions,
		slot,
		row,
		index,
		currentSection,
	} = props;
	const itemDetails =
		window.NeveReactCustomize.HFG[builder].items[componentId];
	const { name, section } = itemDetails;
	const { removeItem } = actions;
	const isActive = currentSection === section;
	const itemSection = window.wp.customize.section(section);

	const focusItemSection = () => {
		itemSection.focus();
	};

	const remove = () => {
		removeItem(row, slot, index);
		itemSection.expanded(false);
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
					onClick={focusItemSection}
					label={__('Item Settings', 'neve')}
					showTooltip={false}
				/>
				<Button
					iconSize={iconSize}
					icon={closeSmall}
					onClick={remove}
					label={__('Remove Item', 'neve')}
					showTooltip={false}
				/>
			</div>
		</div>
	);
};

export default BuilderItem;
