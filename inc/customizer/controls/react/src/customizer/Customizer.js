import { useState } from '@wordpress/element';
import Repeater from '../repeater/Repeater';

const Customizer = () => {
	const [data, setData] = useState([
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

	return data.map((item) => {
		return (
			<div className="nv-repeater--wrap">
				<div className="nv-repeater--item">
					<Repeater title={item.title} />
				</div>
			</div>
		);
	});
};

export default Customizer;
