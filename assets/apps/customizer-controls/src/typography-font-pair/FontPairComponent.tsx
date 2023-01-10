import React from 'react';
import { WPCustomizeControl } from '../@types/customizer-control';
import FontPairSelector, { FontPair } from './FontPairSelector';

type Props = {
	control: WPCustomizeControl;
};

const FontPairComponent: React.FC<Props> = ({ control }) => {
	const { pairs, description } = control.params.input_attrs;

	const handleClick = (preset: FontPair) => {
		window.document.dispatchEvent(
			new window.CustomEvent('neve-changed-customizer-value', {
				detail: {
					value: preset.bodyFont,
					id: 'neve_body_font_family',
				},
			})
		);
		window.document.dispatchEvent(
			new window.CustomEvent('neve-changed-customizer-value', {
				detail: {
					value: preset.headingFont,
					id: 'neve_headings_font_family',
				},
			})
		);
	};

	return (
		<FontPairSelector
			description={description}
			onSelect={handleClick}
			pairs={pairs}
		/>
	);
};

export default FontPairComponent;
