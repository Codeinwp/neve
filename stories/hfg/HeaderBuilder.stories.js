import HFGBuilder from '../../inc/customizer/controls/react/src/header-footer-builder/HFGBuilder';
import { CustomizerDecorator } from '../components/decorators';

export default {
	title: 'Customizer/HFG/Header Builder',
	component: HFGBuilder,
	args: {
		label: 'Accordion Label',
		initiallyExpanded: true,
	},
	decorators: [CustomizerDecorator],
};

const Template = (args) => {
	return <HFGBuilder />;
};

export const Default = Template.bind({});
