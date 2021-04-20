import React, { ChangeEvent } from 'react';
import { BuilderItemType, RowTypes, SlotTypes } from '../../@types/utils';
import { ReactSortable } from 'react-sortablejs';
import BuilderItem from './BuilderItem';
import classnames from 'classnames';
import { Button, Popover, Icon } from '@wordpress/components';
import { useContext, useState } from '@wordpress/element';
import { close, plus, search } from '@wordpress/icons';
import { __ } from '@wordpress/i18n';
import BuilderContext from '../BuilderContext';

type Props = {
	rowId: RowTypes;
	slotId: SlotTypes;
	items: BuilderItemType[];
	className?: string;
};

const Slot: React.FC<Props> = ({ items, slotId, rowId, className }) => {
	const {
		currentSection,
		builder,
		actions,
		dragging,
		sidebarItems,
	} = useContext(BuilderContext);

	const { updateLayout, onDragStart } = actions;
	const [popupOpen, setPopupOpen] = useState<boolean>(false);
	const [searchQuery, setSearchQuery] = useState<string>('');
	const slotClasses = classnames('droppable-wrap', slotId, className, {
		'has-popover': popupOpen,
		overflowed: items.length >= 3 && rowId !== 'sidebar',
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
				setList={(newState, whatstate, ceplm) => {
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
								key={index}
								row={rowId}
								slot={slotId}
								index={index}
								componentId={item.id}
								currentSection={currentSection}
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
					position="top center"
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
