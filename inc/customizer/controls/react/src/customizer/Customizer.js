import {useState} from '@wordpress/element';
import Ordering from "../ordering/Ordering";
import Repeater from "../common/Repeater";

const Customizer = () => {
	// eslint-disable-next-line no-unused-vars
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
	const [isOrdered, reorder] = useState(true);

	const reorderHandler = () => {
		reorder(!isOrdered);
	};

	// const toggleRepeater = () => {
	// 	toggle(!isToggle);
	// };

	const ordered = isOrdered && (
		data.map((item) => (
			<div className="nv-repeater--wrap">
				<div className="nv-repeater--item">
					<Repeater
						title={item.title}
					/>
				</div>
			</div>
		))
	);

	const reordered = !isOrdered && (
		<Ordering
			allowsToggle
			components={{
				facebook: 'Facebook',
				twitter: 'Twitter',
				youtube: 'YouTube',
				instagram: 'Instagram'
			}}
			label="Ordering control"
			onUpdate={() => {
			}}
			value={['facebook', 'twitter', 'youtube', 'instagram']}/>
	);

	return (
		<>
			{ordered}
			{reordered}

			<div className="nv-repeater--footer">
				<button
					type="button"
					className="nv-repeater--reorder"
					onClick={() => reorderHandler()}
				>
					{isOrdered ? "Reorder" : "Done"}
				</button>
				<button
					type="button"
					className="button nv-repeater--add-new"
					onClick={() => {
					}}
				>
					Add item
				</button>
			</div>
		</>
	);
}
export default Customizer;
