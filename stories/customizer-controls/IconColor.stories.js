import {
	CustomizerDecorator,
	WhiteBackgroundDecorator,
} from '../components/decorators';
import IconColor from '../../inc/customizer/controls/react/src/icon-color/IconColor';

export default {
	title: 'Customizer/Controls/Icon Color',
	component: IconColor,
	args: {
		label: 'Icon Color',
	},
	decorators: [WhiteBackgroundDecorator, CustomizerDecorator],
};

const IconColorTemplate = (args) => {
	return <IconColor {...args} />;
};

export const Default = IconColorTemplate.bind({});
