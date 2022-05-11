/* jshint esversion: 6 */
import Repeater from './Repeater';
import PropTypes from 'prop-types';
import { useState } from '@wordpress/element';
import { maybeParseJson } from '@neve-wp/components';

const RepeaterComponent = ({ control }) => {
	const { components, fields } = control.params;

	const normalizeValue = (val) => {
		if (components.length === 0) {
			return val;
		}

		/**
		 * Check that value contains blocked elements only from components array.
		 */
		const finalValue = val.filter((el) => {
			return !(
				el.blocked === 'yes' &&
				!Object.keys(components).includes(el.slug)
			);
		});

		/**
		 * Check that all components are included in the returned value.
		 */
		Object.keys(components).forEach((key) => {
			if (finalValue.filter((e) => e.slug === key).length === 0) {
				finalValue.push({
					slug: key,
					title: components[key],
					visibility: 'no',
					blocked: 'yes',
				});
			}
		});

		return finalValue;
	};

	const [value, setValue] = useState(
		normalizeValue(maybeParseJson(control.setting.get()))
	);

	const allowNew = control.params.allow_new_fields;

	const updateValue = (newVal) => {
		setValue(newVal);
		control.setting.set(JSON.stringify(newVal));
	};

	return (
		<Repeater
			fields={fields}
			allowNew={allowNew}
			value={value}
			onUpdate={updateValue}
		/>
	);
};

RepeaterComponent.propTypes = {
	control: PropTypes.object.isRequired,
};

export default RepeaterComponent;
