/* jshint esversion: 6 */
import Ordering from './Ordering';
import PropTypes from 'prop-types';
import { maybeParseJson } from '../common/common';
import { useState, useEffect } from '@wordpress/element';
import { __ } from '@wordpress/i18n';

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
					let newVal = maybeParseJson(control.setting.get());
					let titleMetaIndex, thumbnailIndex;
					switch(nextVal) {
						case 'cover':
							titleMetaIndex = newVal.indexOf( 'title-meta' );
							if ( titleMetaIndex !== -1 ){
								newVal.splice( titleMetaIndex, 1 );
							}

							thumbnailIndex = newVal.indexOf( 'thumbnail' );
							if ( thumbnailIndex !== -1 ){
								newVal.splice( thumbnailIndex, 1 );
							}

							delete components['title-meta'];
							delete components['thumbnail'];
							break;
						case 'normal':
							if ( !components['title-meta'] ) {
								components['title-meta'] = __( 'Title & Meta', 'neve' );
							}
							if ( !components['thumbnail'] ) {
								components['thumbnail'] = __( 'Thumbnail', 'neve' );
							}

							thumbnailIndex = newVal.indexOf( 'thumbnail' );
							if ( thumbnailIndex === -1 ){
								newVal = ['thumbnail'].concat(newVal);
							}

							titleMetaIndex = newVal.indexOf( 'title-meta' );
							if ( titleMetaIndex === -1 ){
								newVal = ['title-meta'].concat(newVal);
							}

							break;
					}

					updateValue( newVal );
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
