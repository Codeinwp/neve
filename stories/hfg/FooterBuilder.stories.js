import HFGBuilder from '../../inc/customizer/controls/react/src/builder/HFGBuilder.tsx';
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
			'c-left': [],
			center: [{ id: 'footer_copyright' }],
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
				currentBuilder={'footer'}
				portalMount={portalMount}
				{...args}
			/>
		</>
	);
};

export const Default = FooterTemplate.bind({});
