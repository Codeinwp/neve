import {useState} from '@wordpress/element';
import Ordering from "../ordering/Ordering";
import Repeater from "../common/Repeater";
import classnames from 'classnames';

const Customizer = ({value, setValue, fields}) => {

	// const [items, reorderItems] = useState({
	// 	facebook: 'Facebook',
	// 	twitter: 'Twitter',
	// 	youtube: 'YouTube',
	// 	instagram: 'Instagram'
	// });
	// const [values, reorderValues] = useState(['facebook', 'twitter', 'youtube', 'instagram'])
	// const [isOrdered, reorder] = useState(true);

	// const reorderHandler = () => {
	// 	reorder(!isOrdered);
	// };

	// const addNewItem = () => {
	// 	setData([...data, {
	// 		title: 'Item',
	// 		url: '#',
	// 		icon: '',
	// 		visibility: 'yes',
	// 		icon_color: '#fff',
	// 		background_color: '#cd201f'
	// 	}]);
	// }

	// const ordered = isOrdered && (
	// 	data.map((item) => (
	// 		<div className="nv-repeater--wrap">
	// 			<div className="nv-repeater--item">
	// 				<Repeater
	// 					selectedIcon={item.icon}
	// 					title={item.title}
	// 					url={item.url}
	// 					visibility={item.visibility}
	// 					iconColor={item.icon_color}
	// 					backgroundColor={item.background_color}
	// 				/>
	// 			</div>
	// 		</div>
	// 	))
	// );
	//
	// const reordered = !isOrdered && (
	// 	<Ordering
	// 		allowsToggle
	// 		components={items}
	// 		label="Ordering control"
	// 		onUpdate={() => {
	// 		}}
	// 		value={values}/>
	// );
	//
	// return (
	// 	<>
	// 		{ordered}
	// 		{reordered}
	//
	// 		<div className="nv-repeater--footer">
	// 			<button
	// 				type="button"
	// 				className="nv-repeater--reorder"
	// 				// onClick={() => reorderHandler()}
	// 			>
	// 				{/*{isOrdered ? "Reorder" : "Done"}*/}
	// 				Order
	// 			</button>
	// 			<button
	// 				type="button"
	// 				className="button nv-repeater--add-new"
	// 				// onClick={() => addNewItem()}
	// 			>
	// 				Add item
	// 			</button>
	// 		</div>
	// 	</>
	// );

	return (
		value.map((itemVal, index) => {
			const fieldsValue = Object.keys(fields).map(field => field);
			return <Repeater value={itemVal} fields={fields} fieldsValue={fieldsValue}/>
		})
	);
}
export default Customizer;
