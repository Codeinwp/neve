/* jshint esversion: 6 */
import Repeater from './Repeater';
import PropTypes from 'prop-types';
import { useState } from '@wordpress/element';
import { maybeParseJson } from '@neve-wp/components';

const RepeaterComponent = ({ control }) => {
	const { components, fields } = control.params;

	// const getDependencies = () => {
	// 	const dependencies = {};
	// 	for (const [field, fieldProps] of Object.entries(fields)) {
	// 		const dependentOf = Object.keys(fieldProps).filter((el)=>{
	// 				return el.includes('_is');
	// 			})
	// 			.map((el) => {
	// 				return el.replace('_is', '');
	// 			});
	// 		if( dependentOf.length > 0 ){
	// 			dependencies[field] = dependentOf;
	// 		}
	// 	}
	// 	return dependencies;
	// };

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

		// const dependencies = getDependencies();
		// finalValue.map((element) => {
		// 	for (const [dependency, dependentOf] of Object.entries(
		// 		dependencies
		// 	)) {
		// 		const compareValue = dependency.replace('_field', '');
		// 		for (const dependentField of dependentOf) {
		// 			// console.log('dependentField: ' + dependentField );
		// 			// console.log('element: ');
		// 			// console.log(element);
		// 			// console.log('element[dependentField]: ' + element[dependentField] );
		// 			// console.log('compareValue ' + compareValue );
		// 			if (
		// 				element[dependentField] &&
		// 				element[dependentField] !== compareValue
		// 			) {
		// 				// console.log( 'Deleting ' + element[dependency] );
		// 				delete element[dependency];
		// 				// console.log( element );
		// 			}
		// 		}
		// 	}
		// 	return element;
		// });

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
