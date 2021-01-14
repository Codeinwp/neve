import React from 'react';
import GlobalColors from '../inc/customizer/controls/react/src/global-colors/GlobalColors';
import { CustomizerDecorator } from './components/decorators';

const defaultValue = {
	activePalette: 'base',
	palettes: {
		base: {
			name: 'Base',
			allowDeletion: false,
			colors: {
				'nv-primary-accent': '#0366d6',
				'nv-secondary-accent': '#0e509a',
				'nv-site-bg': '#ffffff',
				'nv-light-bg': '#ededed',
				'nv-dark-bg': '#14171c',
				'nv-text-color': '#393939',
				'nv-text-dark-bg': '#ffffff',
				'nv-c-1': '#77b978',
				'nv-c-2': '#f37262',
			},
		},
		darkMode: {
			name: 'Dark Mode',
			allowDeletion: false,
			colors: {
				'nv-primary-accent': '#26bcdb',
				'nv-secondary-accent': '#1f90a6',
				'nv-site-bg': '#121212',
				'nv-light-bg': '#1a1a1a',
				'nv-dark-bg': '#1a1a1a',
				'nv-text-color': '#ffffff',
				'nv-text-dark-bg': 'rgba(255, 255, 255, 0.81)',
				'nv-c-1': '#77b978',
				'nv-c-2': '#f37262',
			},
		},
	},
};

const controlStub = {
	id: 'global_colors',
	params: {
		label: 'Global Colors',
		defaultValues: defaultValue,
		description: '',
		active: true,
		priority: 10,
		settings: {
			default: 'color_control',
		},
	},
	setting: {
		get: () => ({
			...defaultValue,
		}),
		set: (value) => '#fff',
	},
};

export default {
	title: 'Customizer/Global Colors Control',
	component: GlobalColors,
	argTypes: {},
	decorators: [CustomizerDecorator],
};

const Template = (args) => {
	return (
		<>
			<GlobalColors control={controlStub} {...args} />
		</>
	);
};

export const Primary = Template.bind({});
