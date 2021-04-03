import {
	CustomizerDecorator,
	WhiteBackgroundDecorator,
} from '../components/decorators';
import IconField from '../../inc/customizer/controls/react/src/icon-picker/IconField';

export default {
	title: 'Customizer/Controls/Icon Picker',
	component: IconField,
	args: {
		label: 'Icon',
		title: 'facebook',
		icon: null,
		iconTitle: 'facebook',
	},
	decorators: [WhiteBackgroundDecorator, CustomizerDecorator],
};

const IconPickerTemplate = (args) => {
	return <IconField {...args} />;
};

export const Default = IconPickerTemplate.bind({});
