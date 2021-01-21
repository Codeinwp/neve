import Accordion from '../../inc/customizer/controls/react/src/common/Accordion';
import { CustomizerDecorator } from '../components/decorators';

export default {
	title: 'Customizer/Controls/Accordion',
	component: Accordion,
	args: {
		label: 'Accordion Label',
		initiallyExpanded: true,
	},
	decorators: [CustomizerDecorator],
};

const Template = (args) => {
	return (
		<Accordion {...args}>
			<h4>Accordion content</h4>
		</Accordion>
	);
};

export const InitiallyOpened = Template.bind({});
export const InitiallyClosed = Template.bind({});
InitiallyClosed.args = {
	initiallyExpanded: false,
};
