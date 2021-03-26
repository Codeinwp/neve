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

	const [value, setValue] = useState<BuilderContentInterface>(
		maybeParseJson(setting.get())
	);

	const [isHidden, setHidden] = useState<boolean>(true);

	const onChange = (nextValue: BuilderContentInterface) => {
		setValue(nextValue);

		const current = JSON.stringify(value);
		const next = JSON.stringify(nextValue);

		if (current === next) {
			return false;
		}
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

	return (
		<HFGBuilder
			hidden={isHidden}
			currentBuilder={builder}
			value={value}
			onChange={onChange}
			portalMount={portalMount}
		/>
	);
};

export default HFGBuilderComponent;
