import React, { ChangeEvent, ReactText } from 'react';
import { BuilderActions, BuilderItemInterface } from '../../@types/utils';
import { ItemInterface, ReactSortable } from 'react-sortablejs';
import BuilderItem from './BuilderItem';
import classnames from 'classnames';
import { Button, Popover, Icon } from '@wordpress/components';
import { useState } from '@wordpress/element';
import { close, plus, search } from '@wordpress/icons';
import { __ } from '@wordpress/i18n';

interface Props {
	slotId: string;
	rowId: string;
	builder: string;
	items: BuilderItemInterface[];
	dragging: boolean;
	actions: BuilderActions;
	className?: string;
	sidebarItems: ItemInterface[];
	device: string;
}

const Slot: React.FC<Props> = (props) => {
	const {
		items,
		slotId,
		rowId,
		builder,
		actions,
		className,
		dragging,
		sidebarItems,
	} = props;
	const { updateLayout, onDragStart } = actions;
	const [popupOpen, setPopupOpen] = useState<boolean>(false);
	const [searchQuery, setSearchQuery] = useState<string>('');
	const slotClasses = classnames('droppable-wrap', slotId, className, {
		'has-popover': popupOpen,
	});

	const addItemToSlot = (itemId: string) => {
		const nextItems = [...items];
		nextItems.push({ id: itemId });
		updateLayout(rowId, slotId, nextItems);
		setPopupOpen(false);
	};

	const runSearch = (e: ChangeEvent<HTMLInputElement>) => {
		setSearchQuery(e.target.value.toLowerCase());
	};

	const allItems = window.NeveReactCustomize.HFG[builder].items;

	return (
		<div className={slotClasses}>
			<ReactSortable
				animation={60}
				className={'droppable'}
				onStart={onDragStart}
				group={builder}
				list={items}
				setList={(newState) => {
					const nextState = newState.map((item) => {
						const { x, y, id, width, height } = item;
						return { id };
					});
					updateLayout(rowId, slotId, nextState);
				}}
			>
				{items &&
					items.length > 0 &&
					items.map((item, index) => {
						return (
							<BuilderItem
								slot={slotId}
								row={rowId}
								key={index}
								index={index}
								builder={builder}
								componentId={item.id}
								actions={actions}
							/>
						);
					})}
			</ReactSortable>
			{!dragging && (
				<Button
					className="open-popover"
					isPrimary
					icon={plus}
					onClick={() => {
						setPopupOpen(!popupOpen);
					}}
				/>
			)}
			{popupOpen && (
				<Popover
					noArrow={false}
					className="items-popover"
					onFocusOutside={() => {
						setPopupOpen(false);
					}}
				>
					<div className="popover-header">
						<Icon icon={search} />
						<input
							onChange={runSearch}
							disabled={sidebarItems.length < 1}
							type="search"
							placeholder={__('Search for a component…', 'neve')}
						/>
						<Button
							isLink
							icon={close}
							onClick={() => {
								setPopupOpen(false);
							}}
						/>
					</div>
					<div className="items-popover-content">
						{sidebarItems.length < 1 && (
							<div className="no-components">
								<span>
									All available components are used inside the
									builder
								</span>
							</div>
						)}

						{sidebarItems.length > 0 && (
							<div className="items-popover-list">
								{sidebarItems
									.filter((item) => {
										const { name } = allItems[item.id];

										return (
											name
												.toLowerCase()
												.indexOf(searchQuery) > -1 ||
											item.id
												.toString()
												.indexOf(searchQuery) > -1
										);
									})
									.map((item, index) => {
										const { id } = item;
										if (!id) {
											return null;
										}

										return (
											<Button
												className="popover-item"
												icon={allItems[id].icon}
												onClick={() => {
													addItemToSlot(
														id.toString()
													);
												}}
												key={`${id}-${index}`}
											>
												<span className="name">
													{allItems[id].name}
												</span>
											</Button>
										);
									})}
							</div>
						)}
					</div>
				</Popover>
			)}
		</div>
	);
};

export default Slot;
