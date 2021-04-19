import {
	CustomizerDecorator,
	WhiteBackgroundDecorator,
} from '../components/decorators';
import Customizer from '../../inc/customizer/controls/react/src/customizer/Customizer';

export default {
	title: 'Customizer/Controls/Customizer',
	component: Customizer,
	decorators: [CustomizerDecorator],
};

const CustomizerTemplate = () => <Customizer />;

export const Default = CustomizerTemplate.bind({});
