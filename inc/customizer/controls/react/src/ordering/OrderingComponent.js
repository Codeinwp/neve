/* jshint esversion: 6 */
import Ordering from './Ordering';
import PropTypes from 'prop-types';
import { maybeParseJson } from '../common/common';
import { useState, useEffect } from '@wordpress/element';

const OrderingComponent = ({ control }) => {
	const [value, setValue] = useState(maybeParseJson(control.setting.get()));

	const { components, label } = control.params;

	const updateValue = (newVal) => {
		setValue(newVal);
		control.setting.set(JSON.stringify(newVal));
	};

	useEffect( () => {
		if ( control.id !== 'neve_layout_single_post_elements_order' ) {
			return;
		}
		window.wp.customize.control(
			'neve_post_header_layout',
			(customizeControl) => {
				customizeControl.setting.bind((nextVal) => {
					if ( nextVal === 'cover' ) {
						let newVal = maybeParseJson(control.setting.get());
						const titleMetaIndex = newVal.indexOf( 'title-meta' );
						const thumbnail      = newVal.indexOf( 'thumbnail' );
						if ( titleMetaIndex !== -1 ){
							newVal.splice( titleMetaIndex, 1 )
						}
						if ( thumbnail !== -1 ){
							newVal.splice( thumbnail, 1 )
						}
						updateValue( newVal );
					}
				});
			}
		);
	});

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
