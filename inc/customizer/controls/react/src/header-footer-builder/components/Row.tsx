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

interface Props {
	items: BuilderRowInterface & BuilderItemInterface[];
	rowId: RowTypes;
	builder: string;
	device: string;
	dragging: boolean;
	actions: BuilderActions;
}

const Row: React.FC<Props> = (props) => {
	const { items, rowId, dragging, builder } = props;
	const section = `hfg_${builder}_layout_${rowId}`;

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
	}, []);

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
	const centerItemsClass = hasCenterItems ? 'has-center' : 'no-center';
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
			</div>
		</div>
	);
};

export default Row;
