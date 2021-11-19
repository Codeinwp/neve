import { useState } from '@wordpress/element';
import { RadioIcons } from '../../assets/apps/components/src/components';
import {
	CustomizerDecorator,
	WhiteBackgroundDecorator,
} from '../components/decorators';
import {
	chevronDown,
	chevronUp,
	chevronRight,
	chevronLeft,
} from '@wordpress/icons';

export default {
	title: 'Customizer/Controls/Radio Icons',
	component: RadioIcons,
	args: {
		largeButtons: false,
		label: 'Control Label',
		options: {
			one: { icon: 'text', tooltip: 'One' },
			two: { icon: 'text', tooltip: 'Two' },
			three: { icon: 'text', tooltip: 'Three' },
			four: { icon: 'text', tooltip: 'Four' },
		},
		showLabels: false,
	},
	decorators: [WhiteBackgroundDecorator, CustomizerDecorator],
};

const Template = (args) => {
	const [value, setValue] = useState(Object.keys(args.options)[0]);

	return (
		<>
			<RadioIcons value={value} {...args} onChange={setValue} />
			<div className="value-previewer">
				<strong>Value:</strong>
				<pre>{value}</pre>
			</div>
		</>
	);
};

export const Text = Template.bind({});
export const IncludedIcons = Template.bind({});
IncludedIcons.args = {
	options: {
		1: {
			icon: 'logoOnly',
			tooltip: 'Logo Only',
		},
		2: {
			icon: 'logoTopTitle',
			tooltip: 'Logo on Title',
		},
		3: {
			icon: 'logoTitle',
			tooltip: 'Logo & Title',
		},
		4: {
			icon: 'titleLogo',
			tooltip: 'Title & Logo',
		},
	},
};
export const IncludedIconsWithLabels = Template.bind({});
IncludedIconsWithLabels.args = {
	...IncludedIcons.args,
	showLabels: true,
};

export const LargeIcons = Template.bind({});
LargeIcons.args = {
	...IncludedIcons.args,
	largeButtons: true,
};

export const EditorIcons = Template.bind({});
EditorIcons.args = {
	options: {
		Down: { icon: chevronDown, tooltip: 'Down' },
		Up: { icon: chevronUp, tooltip: 'Up' },
		Right: { icon: chevronRight, tooltip: 'Right' },
		Left: { icon: chevronLeft, tooltip: 'Left' },
	},
};

export const WithLabels = EditorIcons.bind({});
WithLabels.args = {
	...EditorIcons.args,
	showLabels: true,
};
