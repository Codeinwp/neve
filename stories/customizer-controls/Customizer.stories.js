import { CustomizerDecorator } from '../components/decorators';
import Customizer from '../../inc/customizer/controls/react/src/customizer/Customizer';
import { useState } from '@wordpress/element';

export default {
	title: 'Customizer/Controls/Customizer',
	component: Customizer,
	decorators: [CustomizerDecorator],
};

const CustomizerTemplate = () => {
	const [value, setValue] = useState([
		{
			title: 'Facebook',
			url: '#',
			icon: 'facebook',
			visibility: 'yes',
			icon_color: '#fff',
			background_color: '#3b5998',
		},
		{
			title: 'Twitter',
			url: '#',
			icon: 'twitter',
			visibility: 'yes',
			icon_color: '#fff',
			background_color: '#1da1f2',
		},
		{
			title: 'Youtube',
			url: '#',
			icon: 'youtube-play',
			visibility: 'yes',
			icon_color: '#fff',
			background_color: '#cd201f',
		},
		{
			title: 'Instagram',
			url: '#',
			icon: 'instagram',
			visibility: 'yes',
			icon_color: '#fff',
			background_color: '#e1306c',
		},
	]);

	const fields = {
		title: {
			type: 'text',
			label: 'Fields',
		},
		icon: {
			type: 'icon',
			label: 'Icon',
		},
		url: {
			type: 'text',
			label: 'Link',
		},
		icon_color: {
			type: 'color',
			label: 'Icon Color',
		},
		background_color: {
			type: 'color',
			label: 'Background Color',
		}
	}

	return <Customizer value={value} setValue={setValue} fields={fields} />
}

export const Default = CustomizerTemplate.bind({});
