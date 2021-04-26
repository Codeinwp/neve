import Repeater from './Repeater';

const Customizer = ({ value, setValue, fields }) => {
	return value.map((itemVal, index) => {
		return (
			<Repeater
				key={index}
				itemIndex={index}
				value={itemVal}
				fields={fields}
				onUpdate={setValue}
			/>
		);
	});
};

export default Customizer;
