/* jshint esversion: 6 */
import React from 'react';
import { useEffect, useState } from '@wordpress/element';
import { WPCustomizeControl } from '../@types/customizer-control';
import { BuilderContentInterface } from '../@types/utils';
import { maybeParseJson } from './common/utils';
import HFGBuilder from './HFGBuilder';

interface Props {
	control: WPCustomizeControl;
	portalMount: HTMLElement;
}

const HFGBuilderComponent: React.FC<Props> = ({ control, portalMount }) => {
	const { setting, params } = control;

	const builder: string = params.builderType;
	const hasColumns: boolean = params.columnsLayout;

	const [value, setValue] = useState<BuilderContentInterface>(
		maybeParseJson(setting.get())
	);
	const [isHidden, setHidden] = useState<boolean>(true);

	const onChange = (nextValue: BuilderContentInterface) => {
		const next = JSON.stringify(nextValue);
		const prev = setting.get();

		if (next === prev) {
			return;
		}

		setValue(nextValue);
		control.setting.set(next);
	};

	useEffect(() => {
		window.wp.customize
			.state('expandedPanel')
			.bind((panel: Record<string, unknown>) => {
				if (panel.id && panel.id === `hfg_${builder}` && isHidden) {
					setHidden(false);
					return false;
				}
				setHidden(true);
			});
	}, []);

	useEffect(() => {
		const builderNode: HTMLElement | null = portalMount.querySelector(
			'.neve-builder'
		);
		if (builderNode === null) {
			return;
		}
		const height = builderNode.offsetHeight;

		const preview: HTMLElement | null = document.querySelector(
			'#customize-preview'
		);
		if (preview === null) {
			return;
		}
		if (isHidden) {
			preview.style.maxHeight = '';
			return;
		}
		preview.style.maxHeight = `calc(100vh - ${height}px)`;
	}, [isHidden, value]);

	return (
		<HFGBuilder
			hasColumns={hasColumns}
			hidden={isHidden}
			currentBuilder={builder}
			value={value}
			onChange={onChange}
			portalMount={portalMount}
		/>
	);
};

export default HFGBuilderComponent;
