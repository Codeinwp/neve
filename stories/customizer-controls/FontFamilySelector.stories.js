import FontFamilySelector from '../../inc/customizer/controls/react/src/font-family/FontFamilySelector';
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
	argTypes: {
		onFontChoice: { table: { disable: true } },
		maybeGetTypekit: { table: { disable: true } },
		selected: { table: { disable: true } },
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
			<hr />
			<strong>Value:</strong>
			<pre>{value}</pre>
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
