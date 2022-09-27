/* jshint esversion: 6 */
import React from 'react';
import { useEffect, useState } from '@wordpress/element';
import { WPCustomizeControl } from '../@types/customizer-control';
import { BuilderContentInterface } from '../@types/utils';
import { maybeParseJson } from './common/utils';
import HFGBuilder from './HFGBuilder';

type Props = {
	control: WPCustomizeControl;
	portalMount: HTMLElement;
};

const HFGBuilderComponent: React.FC<Props> = ({ control, portalMount }) => {
	const { setting, params } = control;
	const builder: string = params.builderType;
	const hasColumns: boolean = params.columnsLayout;

	const [value, setValue] = useState<BuilderContentInterface>(
		// @ts-ignore
		maybeParseJson(setting.get())
	);
	const [isHidden, setHidden] = useState<boolean>(true);
	const [isMounted, setMounted] = useState<boolean>(false);

	const onChange = (nextValue: BuilderContentInterface) => {
		const next = JSON.stringify(nextValue);
		const prev = setting.get();

		if (next === prev) {
			return;
		}

		if (
			next.search('header_palette_switch') === -1 &&
			localStorage.getItem('neve_user_theme')
		) {
			localStorage.removeItem('neve_user_theme');
			window.wp.customize.previewer.refresh();
		}

		setValue(nextValue);
		control.setting.set(next);
	};

	/**
	 * Toggles builder visibility based on the migration notification.
	 */
	const bindOverlayNotificationHiding = () => {
		window.wp.customize.notifications.bind(
			'add',
			(data: { code: string }) => {
				if (data.code !== 'neve_migrating_builders') {
					return false;
				}

				setHidden(true);
			}
		);

		window.wp.customize.notifications.bind(
			'removed',
			(data: { code: string }) => {
				if (data.code !== 'neve_migrating_builders') {
					return false;
				}

				setHidden(false);
			}
		);
	};

	/**
	 * Shows builder when its panel is expanded.
	 */
	const bindShowOnExpand = () => {
		window.wp.customize
			.state('expandedPanel')
			.bind((panel: Record<string, unknown>) => {
				if (panel.id && panel.id === `hfg_${builder}` && isHidden) {
					setHidden(false);
					return false;
				}
				setHidden(true);
			});
	};

	/**
	 * Hides builder when customizer is collapsed.
	 */
	const bindHideOnPaneCollapse = () => {
		window.wp.customize.bind('ready', () => {
			window.wp.customize
				.state('paneVisible')
				.bind((nextValue: boolean) => {
					const currentPanel = window.wp.customize
						.state('expandedPanel')
						.get();
					if (nextValue) {
						if (
							currentPanel.id &&
							currentPanel.id === `hfg_${builder}` &&
							isHidden
						) {
							setHidden(false);
						}
						return false;
					}

					setHidden(true);
				});
		});
	};

	useEffect(() => {
		bindShowOnExpand();
		bindOverlayNotificationHiding();
		bindHideOnPaneCollapse();
	}, []);

	useEffect(() => {
		window.wp.customize.bind('ready', () => {
			window.wp.customize
				.state('expandedPanel')
				.bind((activePanel: Record<string, string>) => {
					if (!activePanel) {
						return;
					}

					if (!activePanel.id) {
						return;
					}

					if (
						activePanel.id === `hfg_${builder}` &&
						activePanel.id !== 'hfg_page_header'
					) {
						setMounted(true);
					}
				});

			window.wp.customize
				.state('expandedSection')
				.bind((activeSection: Record<string, string>) => {
					const currentPanel = window.wp.customize
						.state('expandedPanel')
						.get();
					if (
						currentPanel.id &&
						currentPanel.id === 'hfg_page_header'
					) {
						if (!activeSection) {
							setMounted(false);
							return;
						}
						setMounted(true);
					}
				});
		});
	}, []);

	return (
		<HFGBuilder
			hasColumns={hasColumns}
			hidden={isHidden}
			builder={builder}
			value={value}
			onChange={onChange}
			portalMount={portalMount}
			mounted={isMounted}
		/>
	);
};

export default HFGBuilderComponent;
