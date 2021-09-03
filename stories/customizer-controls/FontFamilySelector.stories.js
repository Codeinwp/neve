import FontFamilySelector from '../../assets/apps/customizer-controls/src/font-family/FontFamilySelector';
import {
	WhiteBackgroundDecorator,
	CustomizerDecorator,
} from '../components/decorators';
import { useState } from '@wordpress/element';
import { FONTS } from '../utils/values';

export default {
	title: 'Customizer/Controls/Font Family Selector',
	component: FontFamilySelector,
	args: {
		systemFonts: false,
		inheritDefault: false,
	},
	decorators: [WhiteBackgroundDecorator, CustomizerDecorator],
};

const Template = (args) => {
	const [value, setValue] = useState('');

	const onChoseFont = (fontSource, font) => {
		setValue(font);
	};

	return (
		<>
			<FontFamilySelector
				{...args}
				fonts={FONTS}
				onFontChoice={onChoseFont}
				selected={value}
				maybeGetTypekit={(font) => {
					return font;
				}}
			/>
			<div className="value-previewer">
				<strong>Value:</strong>
				<pre>{value}</pre>
			</div>
		</>
	);
};

export const Default = Template.bind({});
export const OnlySystemFonts = Template.bind({});
OnlySystemFonts.args = {
	systemFonts: true,
};
export const InheritIsDefault = Template.bind({});
InheritIsDefault.args = {
	inheritDefault: true,
};
