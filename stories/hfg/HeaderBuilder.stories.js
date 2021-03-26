import HFGBuilder from '../../inc/customizer/controls/react/src/header-footer-builder/HFGBuilder.tsx';
import { CustomizerDecorator } from '../components/decorators';
import { useRef, useState } from '@wordpress/element';

export default {
	title: 'Customizer/HFG/Header Builder',
	component: HFGBuilder,
	args: {
		initiallyHidden: false,
	},
	decorators: [CustomizerDecorator],
};

const NewHeader = {
	desktop: {
		top: {},
		main: {
			left: [{ id: 'logo' }],
			'c-left': [],
			center: [{ id: 'primary-menu' }],
			'c-right': [],
			right: [],
		},
		bottom: {},
	},
	mobile: {
		top: {
			left: [
				{ id: 'button_base' },
				{ id: 'header_search_responsive' },
				{ id: 'custom_html' },
			],
		},
		main: {
			center: [{ id: 'logo' }, { id: 'nav-icon' }],
		},
		bottom: {},
		sidebar: [{ id: 'primary-menu' }],
	},
};

const Template = (args) => {
	const [value, setValue] = useState(NewHeader);
	const portalMount = document.querySelector('.neve-builder-portal-wrap');

	return (
		<HFGBuilder
			hidden={args.initiallyHidden}
			onChange={setValue}
			value={value}
			currentBuilder={'header'}
			portalMount={portalMount}
		/>
	);
};

export const InitiallyOpen = Template.bind({});
export const InitiallyClosed = Template.bind({});
InitiallyClosed.args = {
	initiallyHidden: true,
};
