import React from 'react';
import { ReactSortable } from 'react-sortablejs';
import { Icon } from '@wordpress/components';
import { dragHandle } from '@wordpress/icons';

import { __ } from '@wordpress/i18n';
import { useContext } from '@wordpress/element';
import BuilderContext from '../BuilderContext';

const SidebarContent: React.FC = () => {
	const { sidebarItems: items, builder, actions, dragging } = useContext(
		BuilderContext
	);

	const { onDragStart, onDragEnd, setSidebarItems } = actions;
	const allItems = window.NeveReactCustomize.HFG[builder].items;

	return (
		<div className="neve-builder-sidebar-content">
			<span className="customize-control-title">
				{__('Available Components', 'neve')}
			</span>
			{items && items.length > 0 && (
				<div className="sidebar-items droppable-wrap">
					<ReactSortable
						onEnd={onDragEnd}
						animation={0}
						group={builder}
						className={`droppable`}
						disabled={dragging}
						onStart={onDragStart}
						list={items}
						setList={(next) => {
							const nextItems = next
								.map((i) => {
									return { id: i.id };
								})
								.sort((a, b) => {
									return a.id < b.id ? -1 : 1;
								});

							setSidebarItems(nextItems);
						}}
					>
						{items.map((item, index) => {
							const { name } = allItems[item.id];
							return (
								<div className="builder-item" key={index}>
									<Icon
										className="handle"
										icon={dragHandle}
										size={15}
									/>
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
