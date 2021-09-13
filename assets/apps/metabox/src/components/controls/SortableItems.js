import { ReactSortable } from 'react-sortablejs';
import { Button } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import React from 'react';

const SortableItems = (props) => {
	const { value, onUpdate, elements } = props;

	const handleToggle = (item) => {
		const newValue = value.map((e) => {
			if (e.id === item) {
				e.visible = !e.visible;
			}
			return e;
		});
		onUpdate(newValue);
	};

	return (
		<div>
			<ReactSortable
				className="neve-meta-control neve-meta-sortable-items"
				list={value}
				setList={onUpdate}
				handle=".ti-sortable-handle"
				animation={300}
			>
				{value.map((item) => {
					return (
						<div
							className={`ti-sortable-item-area ti-sortable-item-area-${item.id}`}
							key={item.id}
						>
							<div
								className={
									item.visible
										? 'ti-sortable-item'
										: 'ti-sortable-item hidden'
								}
							>
								<Button
									isTertiary
									icon={
										item.visible ? 'visibility' : 'hidden'
									}
									label={__('Toggle', 'neve')}
									showTooltip={true}
									className="ti-sortable-item-toggle"
									onClick={() => {
										handleToggle(item.id);
									}}
								/>
								<div className="ti-sortable-item-label">
									{elements[item.id]}
								</div>
								{item.visible && (
									<div className="ti-sortable-handle">
										<Button isTertiary icon="menu" />
									</div>
								)}
							</div>
						</div>
					);
				})}
			</ReactSortable>
		</div>
	);
};

export default SortableItems;
