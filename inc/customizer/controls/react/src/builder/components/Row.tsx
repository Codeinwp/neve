import React from 'react';
import {
	BuilderActions,
	BuilderItemInterface,
	BuilderRowInterface,
	RowTypes,
	StringObjectKeys,
} from '../../@types/utils';
import { Button } from '@wordpress/components';
import { cog } from '@wordpress/icons';
import { __ } from '@wordpress/i18n';
import { useEffect, useState } from '@wordpress/element';
import classnames from 'classnames';

import Slot from './Slot';
import { WPCustomizeControl } from '../../@types/customizer-control';

interface ColumnMapping {
	[key: number]: Record<string, string>;
}

interface Props {
	items: BuilderRowInterface & BuilderItemInterface[];
	rowId: RowTypes;
	builder: string;
	device: string;
	dragging: boolean;
	hasColumns: boolean;
	actions: BuilderActions;
}

const Row: React.FC<Props> = (props) => {
	const { actions, items, rowId, dragging, builder, hasColumns } = props;
	const { updateLayout } = actions;
	const slots = ['left', 'c-left', 'center', 'c-right', 'right'];

	const section = `hfg_${builder}_layout_${rowId}`;
	const columnsSetting = `${section}_columns_number`;
	const columnsLayoutSetting = `${section}_columns_layout`;

	const [columns, setColumns] = useState<number>(0);
	const [colLayout, setColLayout] = useState('equal');
	const [currentRow, setCurrentRow] = useState(false);
	const [sidebarVisible, setSidebarVisible] = useState(false);

	const focusRowSection = () => {
		if (rowId === 'sidebar') {
			toggleThemeSidebar(true);
		}
		window.wp.customize.section(section).focus();
	};

	/**
	 * Check if the section is active when sections are expanded.
	 */
	useEffect(() => {
		bindRowSettingsButton();

		if (!hasColumns) {
			return;
		}

		bindColumnsSync();
	}, []);

	const bindRowSettingsButton = () => {
		window.wp.customize
			.state('expandedSection')
			.bind((expandedSection: StringObjectKeys) => {
				if (!expandedSection || expandedSection.id !== section) {
					setCurrentRow(false);
					return false;
				}

				if (expandedSection.id === section) {
					setCurrentRow(true);
				}
			});
	};

	const bindColumnsSync = () => {
		window.wp.customize.bind('ready', () => {
			const colNumber = window.wp.customize
				.control(columnsSetting)
				.setting.get();
			setColumns(parseInt(colNumber));
			setColLayout(
				window.wp.customize.control(columnsLayoutSetting).setting.get()
			);
		});

		const syncColNumber = (nextValue: string) => {
			const colNumber = parseInt(nextValue);
			slots.forEach((slot, index) => {
				if (index + 1 > colNumber) {
					updateLayout(rowId, slot, []);
				}
			});
			setColumns(colNumber);
		};

		window.wp.customize.control(
			columnsSetting,
			(control: WPCustomizeControl) => {
				control.setting.bind((nextValue: string) => {
					syncColNumber(nextValue);
				});
			}
		);
		window.wp.customize.control(
			columnsLayoutSetting,
			(control: WPCustomizeControl) => {
				control.setting.bind((nextValue: string) => {
					setColLayout(nextValue);
				});
			}
		);
	};

	// Toggle button when sidebar is toggled from preview.
	useEffect(() => {
		if (rowId !== 'sidebar') {
			return;
		}
		window.wp.customize.previewer.bind(
			'neve-toggle-navbar',
			(e: { status: boolean }) => {
				const { status } = e;
				setSidebarVisible(status);
			}
		);
	}, []);

	// Toggle sidebar in preview.
	const toggleThemeSidebar = (status: boolean) => {
		window.wp.customize.previewer.send(
			status ? 'header_sidebar_open' : 'header_sidebar_close'
		);
		setSidebarVisible(status);
	};

	if (rowId === 'sidebar') {
		const hasItems = items && items.length > 0;
		const rowClasses = classnames('row', rowId, { 'has-items': hasItems });

		return (
			<div className={rowClasses}>
				<div className="sidebar-actions">
					<Button
						icon={cog}
						iconSize={18}
						className="row-settings"
						label={__('Row Setting', 'neve')}
						onClick={focusRowSection}
						isPrimary={currentRow}
					/>
					{hasItems && (
						<Button
							onClick={() => {
								toggleThemeSidebar(!sidebarVisible);
							}}
							icon={sidebarVisible ? 'hidden' : 'visibility'}
							className="row-settings"
							isPrimary={sidebarVisible}
							label={__('Toggle Sidebar', 'neve')}
						/>
					)}
				</div>

				<div className="row-inner">
					<Slot slotId={rowId} {...props} />
				</div>
			</div>
		);
	}

	const hasCenterItems = items.center && items.center.length > 0;
	const centerItemsClass =
		hasCenterItems || hasColumns ? 'has-center' : 'no-center';
	const centerWrapClass = classnames('slots-wrap', 'slots-center-wrap', {
		expanded: dragging,
	});
	return (
		<div className={`row ${rowId} ${centerItemsClass}`}>
			<Button
				icon={cog}
				iconSize={18}
				className="row-settings"
				onClick={focusRowSection}
				isPrimary={currentRow}
			/>
			<div className="inner-row">
				{!hasColumns && (
					<>
						<div className="slots-wrap slots-left-wrap">
							{['left', 'c-left'].map((slotId, index) => {
								return (
									<Slot
										{...props}
										key={index}
										slotId={slotId}
										items={items[slotId] || []}
									/>
								);
							})}
						</div>
						<div className={centerWrapClass}>
							<Slot
								{...props}
								slotId={'center'}
								items={items.center || []}
							/>
						</div>
						<div className="slots-wrap slots-right-wrap">
							{['c-right', 'right'].map((slotId, index) => {
								return (
									<Slot
										{...props}
										key={index}
										slotId={slotId}
										items={items[slotId] || []}
									/>
								);
							})}
						</div>
					</>
				)}
				{hasColumns && (
					<div
						className={`slots-wrap column-slots-wrap col-${columns} ${colLayout}`}
					>
						{slots.map((slotId, index) => {
							const slotClasses = classnames({
								hide: index >= columns,
								last: index === columns - 1,
								single: index === 0 && columns === 1,
							});
							return (
								<Slot
									{...props}
									className={slotClasses}
									key={index}
									slotId={slotId}
									items={items[slotId] || []}
								/>
							);
						})}
					</div>
				)}
			</div>
		</div>
	);
};

export default Row;
