import React from 'react';
import { Button } from '@wordpress/components';
import { closeSmall, cog, menu } from '@wordpress/icons';
import { __ } from '@wordpress/i18n';
import { BuilderActions, RowTypes, SlotTypes } from '../../@types/utils';

interface Props {
	componentId: string;
	builder: string;
	actions: BuilderActions;
	slot: SlotTypes;
	row: RowTypes;
	index: number;
}

const BuilderItem: React.FC<Props> = (props) => {
	const { componentId, builder, actions, slot, row, index } = props;
	const itemDetails =
		window.NeveReactCustomize.HFG[builder].items[componentId];
	const { name, section } = itemDetails;
	const { removeItem } = actions;
	const itemSection = window.wp.customize.section(section);

	const focusItemSection = () => {
		itemSection.focus();
	};

	const remove = () => {
		removeItem(row, slot, index);
		itemSection.expanded(false);
		/*const expanded = window.wp.customize.state('expandedSection').get();

		if (!expanded.id) {
			return false;
		}

		if (expanded.id !== section) {
			return false;
		}

		const builderPanel = `hfg_${builder}`;
		window.wp.customize.panel(builderPanel).focus();*/
	};

	const iconSize = 18;

	return (
		<div className="builder-item">
			<Button icon={menu} iconSize={15} />
			<span className="name">{name}</span>
			<div className="actions">
				<Button
					icon={cog}
					iconSize={iconSize}
					onClick={focusItemSection}
					label={__('Item Settings', 'neve')}
				/>
				<Button
					iconSize={iconSize}
					icon={closeSmall}
					onClick={remove}
					label={__('Remove Item', 'neve')}
				/>
			</div>
		</div>
	);
};

export default BuilderItem;
