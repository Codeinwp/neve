import React from 'react';
import { Button, Icon } from '@wordpress/components';
import { closeSmall, cog, dragHandle } from '@wordpress/icons';
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
	const { actions, builder } = useContext(BuilderContext);

	const itemDetails =
		window.NeveReactCustomize.HFG[builder].items[componentId];

	if (!itemDetails) {
		return null;
	}

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
					className="settings"
					onClick={focusItemSection}
					label={__('Item Settings', 'neve')}
					showTooltip={false}
				/>
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
