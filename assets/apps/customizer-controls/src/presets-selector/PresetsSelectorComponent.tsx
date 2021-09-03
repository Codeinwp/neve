/* global CustomEvent */
import PresetsSelector from './PresetsSelector';
import { maybeParseJson } from '../builder/common/utils';
import React from 'react';
import { WPCustomizeControl } from '../@types/customizer-control';

type Props = {
	control: WPCustomizeControl;
};

const PresetsSelectorComponent: React.FC<Props> = ({ control }) => {
	const { presets, builder } = control.params;

	const handleClick = (setup: string) => {
		const parsedSetup = maybeParseJson(setup) as Record<string, unknown>;
		Object.keys(parsedSetup).forEach((themeMod) => {
			if (themeMod === builder) {
				document.dispatchEvent(
					new CustomEvent('neve-changed-builder-value', {
						detail: {
							value: parsedSetup[themeMod],
							id: 'header',
						},
					})
				);

				return false;
			}

			const controlInstance = window.wp.customize.control(themeMod);

			if (!controlInstance) return false;

			const { type: controlType } = controlInstance.params;

			if (['text', 'textarea', 'select'].includes(controlType)) {
				controlInstance.setting.set(parsedSetup[themeMod]);
				return false;
			}

			document.dispatchEvent(
				new CustomEvent('neve-changed-customizer-value', {
					detail: {
						value: parsedSetup[themeMod] || '',
						id: themeMod,
					},
				})
			);
		});
	};

	return <PresetsSelector onSelect={handleClick} presets={presets} />;
};

export default PresetsSelectorComponent;
