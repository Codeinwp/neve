import React from 'react';
import { ItemInterface, ReactSortable } from 'react-sortablejs';
import { Button } from '@wordpress/components';
import { menu } from '@wordpress/icons';

import { BuilderActions } from '../../@types/utils';
import { __ } from '@wordpress/i18n';

interface Props {
	items: ItemInterface[];
	builder: string;
	actions: BuilderActions;
	dragging: boolean;
}

const SidebarContent: React.FC<Props> = (props) => {
	const { items, builder, actions, dragging } = props;
	const { onDragStart, onDragEnd, setSidebarItems } = actions;
	const allItems = window.NeveReactCustomize.HFG[builder].items;

	return (
		<div className="neve-builder-sidebar-content">
			<span className="customize-control-title">
				{__('Available Components', 'neve')}
			</span>
			{items && items.length > 0 && (
				<div className="sidebar-items">
					<ReactSortable
						onEnd={onDragEnd}
						animation={0}
						group={builder}
						className={`droppable`}
						disabled={dragging}
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
				</div>
			)}
			{!items.length && (
				<div className="no-components">
					<span>
						{__(
							'All available components are used inside the builder',
							'neve'
						)}
					</span>
				</div>
			)}
		</div>
	);
};

export default SidebarContent;
