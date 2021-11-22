import { Accordion } from '../../assets/apps/components/src/components';
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
			<div className="accordion-content">
				<h4>Accordion content</h4>
			</div>
		</Accordion>
	);
};

export const InitiallyOpened = Template.bind({});
export const InitiallyClosed = Template.bind({});
InitiallyClosed.args = {
	initiallyExpanded: false,
};
