import HFGBuilder from '../../assets/apps/customizer-controls/src/builder/HFGBuilder.tsx';
import { CustomizerDecorator } from '../components/decorators';
import { useState } from '@wordpress/element';

export default {
	title: 'Customizer/HFG/Footer Builder',
	component: HFGBuilder,
	args: {
		initiallyHidden: false,
	},
	decorators: [CustomizerDecorator],
};

const Footer = {
	desktop: {
		top: { left: [], 'c-left': [], center: [], 'c-right': [], right: [] },
		bottom: {
			left: [],
			'c-left': [{ id: 'footer_copyright' }],
			center: [],
			'c-right': [],
			right: [],
		},
	},
};

const FooterTemplate = (args) => {
	const [value, setValue] = useState(Footer);
	const portalMount = document.querySelector('.neve-builder-portal-wrap');

	return (
		<>
			<HFGBuilder
				hasColumns={true}
				hidden={args.initiallyHidden}
				onChange={setValue}
				value={value}
				builder={'footer'}
				portalMount={portalMount}
				mounted={true}
				{...args}
			/>
		</>
	);
};

export const Default = FooterTemplate.bind({});
