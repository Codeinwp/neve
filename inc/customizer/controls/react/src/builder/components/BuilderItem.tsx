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
	slot: SlotTypes | string;
	row: RowTypes;
	index: number;
}

const BuilderItem: React.FC<Props> = (props) => {
	const { componentId, builder, actions, slot, row, index } = props;
	const itemDetails =
		window.NeveReactCustomize.HFG[builder].items[componentId];
	const { name, section } = itemDetails;
	const { removeItem } = actions;
	const [isActive, setActive] = useState(false);

	const itemSection = window.wp.customize.section(section);

	/**
	 * Check if the section is active when sections are expanded.
	 */
	useEffect(() => {
		window.wp.customize
			.state('expandedSection')
			.bind((expandedSection: StringObjectKeys) => {
				if (!expandedSection || expandedSection.id !== section) {
					setActive(false);
					return false;
				}

				if (expandedSection.id === section) {
					setActive(true);
				}
			});
	}, []);

	/**
	 * Check if the section is active on move.
	 */
	useEffect(() => {
		const expandedSection = window.wp.customize
			.state('expandedSection')
			.get();

		if (!expandedSection || !expandedSection.id) {
			return;
		}

		if (expandedSection.id === section) {
			setActive(true);
		}
	}, [slot]);

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
