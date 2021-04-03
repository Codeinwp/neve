import TextField from '../../inc/customizer/controls/react/src/text-field/TextField';
import {
	CustomizerDecorator,
	WhiteBackgroundDecorator,
} from '../components/decorators';

export default {
	title: 'Customizer/Controls/Text Field',
	component: TextField,
	args: {
		title: 'Facebook',
		label: 'Title',
	},
	decorators: [WhiteBackgroundDecorator, CustomizerDecorator],
};

const TextFieldTemplate = (args) => {
	return <TextField {...args} />;
};

export const Default = TextFieldTemplate.bind({});
