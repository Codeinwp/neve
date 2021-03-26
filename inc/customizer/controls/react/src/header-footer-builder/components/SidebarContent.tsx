import React from 'react';
import { ItemInterface, ReactSortable } from 'react-sortablejs';
import { Button } from '@wordpress/components';
import { menu } from '@wordpress/icons';
import { __ } from '@wordpress/i18n';

import { BuilderActions } from '../../@types/utils';

interface Props {
	items: ItemInterface[];
	builder: string;
	actions: BuilderActions;
}

const SidebarContent: React.FC<Props> = (props) => {
	const { items, builder, actions } = props;
	const { onDragStart, onDragEnd, setSidebarItems } = actions;
	const allItems = window.NeveReactCustomize.HFG[builder].items;

	return (
		<div className="neve-builder-sidebar-content">
			<div className="sidebar-items">
				{items && items.length > 0 && (
					<ReactSortable
						onEnd={onDragEnd}
						animation={0}
						group={builder}
						className={`droppable`}
						onStart={onDragStart}
						list={items}
						setList={(next) => {
							const nextItems = next.map((i) => {
								return { id: i.id };
							});
							setSidebarItems(nextItems);
						}}
					>
						{items.map((item, index) => {
							const { name } = allItems[item.id];

							return (
								<div
									className="builder-item"
									key={`${item.id}-${index}`}
								>
									<Button icon={menu} iconSize={18} />
									<span>{name}</span>
								</div>
							);
						})}
					</ReactSortable>
				)}
			</div>
		</div>
	);
};

export default SidebarContent;
