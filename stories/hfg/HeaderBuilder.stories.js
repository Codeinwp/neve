import HFGBuilder from '../../inc/customizer/controls/react/src/header-footer-builder/HFGBuilder.tsx';
import { CustomizerDecorator } from '../components/decorators';
import { useState } from '@wordpress/element';

export default {
	title: 'Customizer/HFG/Header Builder',
	component: HFGBuilder,
	args: {
		label: 'Accordion Label',
		initiallyExpanded: true,
	},
	decorators: [CustomizerDecorator],
};

const NewHeader = {
	desktop: {
		top: {},
		main: {
			left: [{ x: 0, y: 1, width: 4, height: 1, id: 'logo' }],
			'c-left': [],
			center: [{ x: 4, y: 1, width: 8, height: 1, id: 'primary-menu' }],
			'c-right': [],
			right: [],
		},
		bottom: {},
	},
	mobile: {
		top: {
			left: [
				{ x: 0, y: 1, width: 2, height: 1, id: 'button_base' },
				{
					x: 8,
					y: 1,
					width: 1,
					height: 1,
					id: 'header_search_responsive',
				},
				{ x: 9, y: 1, width: 3, height: 1, id: 'custom_html' },
			],
		},
		main: {
			center: [
				{ x: 0, y: 1, width: 8, height: 1, id: 'logo' },
				{ x: 8, y: 1, width: 4, height: 1, id: 'nav-icon' },
			],
		},
		bottom: {},
		sidebar: [
			{ x: 0, y: 1, width: 8, height: 1, id: 'primary-menu' },
			{ x: 0, y: 1, width: 8, height: 1, id: 'header_search_responsive' },
		],
	},
};

const Template = (args) => {
	const [value, setValue] = useState(NewHeader);

	const control = {
		setting: {
			get: () => value,
			set: setValue,
		},
		params: {
			type: 'header',
		},
	};

	return <HFGBuilder control={control} />;
};

export const Default = Template.bind({});
