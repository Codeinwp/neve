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

	const url = window.NeveReactCustomize.upsellComponentsLink;

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

	const getSidebarItems = (booster = false) => {
		return sidebarItems.filter((item) => {
			const { name, fromTheme } = allItems[item.id];

			if (!booster && !fromTheme) {
				return false;
			}

			if (booster && fromTheme) {
				return false;
			}

			return (
				name.toLowerCase().includes(searchQuery) ||
				item.id.toString().includes(searchQuery)
			);
		});
	};

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

	const renderUpsell = (idx: number, icon: Dashicon.Icon, name: string) => {
		return (
			<Button key={idx} className="popover-item ext" disabled icon={icon}>
				<span className="name">{name}</span>
				<span className="nv-lock">
					<Icon icon="lock" size={10} />
				</span>
			</Button>
		);
	};

	const renderItems = () => {
		const themeItems = getSidebarItems();
		const boosterItems = getSidebarItems(true);

		let noComponents = null;

		if (themeItems.length === 0 && boosterItems.length === 0) {
			noComponents = (
				<div className="no-components">
					<span>
						{__(
							'All available components are used inside the builder',
							'neve'
						)}
					</span>
				</div>
			);
		}

		return (
			<>
				{noComponents ? (
					noComponents
				) : (
					<>
						<div className="items-popover-list theme-list">
							{themeItems.map((item, index) =>
								renderItem(item, index)
							)}
						</div>

						{boosterItems.length > 0 && (
							<>
								<h4>
									{__('PRO', 'neve')}{' '}
									{__('Components', 'neve')}
								</h4>
								<div className="items-popover-list booster-list">
									{boosterItems.map((item, index) =>
										renderItem(item, index)
									)}
								</div>
							</>
						)}
					</>
				)}
				{boosterItems.length < 1 && upsells.length > 0 && (
					<>
						<h4>
							{__('PRO', 'neve')} {__('Components', 'neve')}
						</h4>
						<div className="items-popover-list upsell-list">
							{upsells.map(({ name, icon }, idx) => {
								return renderUpsell(idx, icon, name);
							})}
						</div>
						<div className="upsell-wrap">
							<span className="count">
								15+ {__('Components', 'neve')}
							</span>
							<Button
								isPrimary
								className="upsell-btn"
								href={url}
								target="_blank"
								rel="external noreferrer noopener"
							>
								{__('Explore Neve PRO', 'neve')}
							</Button>
						</div>
					</>
				)}
			</>
		);
	};

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

			<div className="items-popover-content">{renderItems()}</div>
		</Popover>
	);
};

export default ComponentsPopover;
