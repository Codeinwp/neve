/* jshint esversion: 6 */
import Ordering from './Ordering';
import PropTypes from 'prop-types';
import { maybeParseJson } from '../common/common';
import { useState } from '@wordpress/element';

const OrderingComponent = ({ control }) => {
	const [value, setValue] = useState(maybeParseJson(control.setting.get()));

	const { components, label } = control.params;

	const updateValue = (newVal) => {
		setValue(newVal);
		control.setting.set(JSON.stringify(newVal));
	};

	return (
		<div className="neve-white-background-control">
			<Ordering
				label={label}
				components={components}
				value={value}
				onUpdate={updateValue}
			/>
		</div>
	);
};

OrderingComponent.propTypes = {
	control: PropTypes.object.isRequired,
};

export default OrderingComponent;
