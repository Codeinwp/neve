import { useState } from '@wordpress/element';
import Customizer from './Customizer';
import { maybeParseJson } from '../common/common';

const CustomizerComponent = ({ control }) => {
	// eslint-disable-next-line no-unused-vars
	const [value, setValue] = useState(maybeParseJson(control.setting.get()));
	/* const [data, setData] = useState([
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
	*/

	const { title } = control.params;

	return (
		<div className="nv-repeater--wrap">
			<Customizer
				title={title} /* data = {value}, but it's undefined */
			/>
		</div>
	);
};

export default CustomizerComponent;
