import React, { ChangeEvent } from 'react';
import { Button, Icon, Popover } from '@wordpress/components';
import { close, search } from '@wordpress/icons';
import { __ } from '@wordpress/i18n';
import { useContext, useState } from '@wordpress/element';
import BuilderContext from '../BuilderContext';
import { BuilderItemType, RowTypes, SlotTypes } from '../../@types/utils';
import { ItemInterface } from 'react-sortablejs';
import Dashicon from '@wordpress/components/dashicon';

type Props = {
	closePopup: () => void;
	items: BuilderItemType[];
	rowId: RowTypes;
	slotId: SlotTypes;
};

const ComponentsPopover: React.FC<Props> = ({
	closePopup,
	items,
	rowId,
	slotId,
}) => {
	const [searchQuery, setSearchQuery] = useState<string>('');

	const url =
		'https://themeisle.com/themes/neve/upgrade?utm_medium=customizer&utm_source=hfgcomponents&utm_campaign=neve';

	const { builder, actions, sidebarItems } = useContext(BuilderContext);
	const { updateLayout, setSidebarItems } = actions;

	const addItemToSlot = (itemId: string) => {
		const itemSection =
			window.NeveReactCustomize.HFG[builder].items[itemId].section;
		window.wp.customize.section(itemSection).focus();
		const nextItems = [...items];
		nextItems.push({ id: itemId });
		updateLayout(rowId, slotId, nextItems);
		setSidebarItems(sidebarItems.filter((i) => i.id !== itemId));
		closePopup();
	};

	const searchHandler = (e: ChangeEvent<HTMLInputElement>) => {
		setSearchQuery(e.target.value.toLowerCase());
	};

	const allItems = window.NeveReactCustomize.HFG[builder].items;
	const upsells = window.NeveReactCustomize.HFG[builder].upsells || [];

	const filteredItems = sidebarItems.filter((item) => {
		const { name } = allItems[item.id];

		return (
			name.toLowerCase().includes(searchQuery) ||
			item.id.toString().includes(searchQuery)
		);
	});

	const filteredUpsells = upsells.filter((item) =>
		item.name.toLowerCase().includes(searchQuery)
	);

	const renderItem = (item: ItemInterface, idx: number) => {
		if (!item.id) {
			return null;
		}

		return (
			<Button
				className="popover-item"
				key={`${item.id}-${idx}`}
				icon={allItems[item.id].icon}
				onClick={() => {
					addItemToSlot(item.id.toString());
				}}
			>
				<span className="name">{allItems[item.id].name}</span>
			</Button>
		);
	};

	const renderUpsell = (idx: number, icon: Dashicon.Icon, name: string) => (
		<Button
			key={idx}
			className="popover-item ext"
			href={url}
			target="_blank"
			icon={icon}
			rel="external noreferrer noopener"
		>
			<span className="name">{name}</span>
			<span className="nv-lock">
				<Icon icon={'lock'} />
				<span>PRO</span>
			</span>
		</Button>
	);
	return (
		<Popover
			noArrow={false}
			position="top center"
			className="items-popover"
			onFocusOutside={closePopup}
		>
			<div className="popover-header">
				<Icon icon={search} />
				<input
					onChange={searchHandler}
					disabled={sidebarItems.length < 1}
					type="search"
					placeholder={__('Search for a component…', 'neve')}
				/>
				<Button isLink icon={close} onClick={closePopup} />
			</div>

			<div className="items-popover-content">
				{filteredItems.length < 1 && filteredUpsells.length < 1 && (
					<div className="no-components">
						<span>
							{__(
								'All available components are used inside the builder',
								'neve'
							)}
						</span>
					</div>
				)}

				<div className="items-popover-list">
					{sidebarItems.length > 0 && (
						<>
							{filteredItems.map((item, index) =>
								renderItem(item, index)
							)}
						</>
					)}
					{filteredUpsells.length > 0 && (
						<>
							{filteredUpsells.map(({ name, icon }, idx) => {
								return renderUpsell(idx, icon, name);
							})}
						</>
					)}
				</div>
			</div>
		</Popover>
	);
};

export default ComponentsPopover;
