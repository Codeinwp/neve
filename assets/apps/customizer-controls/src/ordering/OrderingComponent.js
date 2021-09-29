/* jshint esversion: 6 */
import { lazy, Suspense, useEffect, useState } from '@wordpress/element';
import { Spinner } from '@wordpress/components';
import { maybeParseJson } from '../common/common';
import PropTypes from 'prop-types';

const Ordering = lazy(() =>
	import(/* webpackChunkName: "ordering" */ './Ordering')
);
import { __ } from '@wordpress/i18n';

const OrderingComponent = ({ control }) => {
	const { section, components, label } = control.params;

	const maybeNormalizeValue = (val) => {
		const normalizedValue = val.map((element) => {
			return { id: element, visible: true };
		});

		const enabledItems = normalizedValue.map((element) => {
			element.visible = true;
			return element;
		});

		const disabledItems = Object.keys(components)
			.filter((element) => {
				return (
					enabledItems.filter((el) => {
						return element === el.id;
					}).length === 0
				);
			})
			.map((element) => {
				return { id: element, visible: false };
			});

		return [...enabledItems, ...disabledItems];
	};

	const [value, setValue] = useState(
		maybeNormalizeValue(maybeParseJson(control.setting.get()))
	);

	const [isVisible, setVisible] = useState(false);

	const updateValue = (newVal) => {
		const dbValue = newVal
			.filter(function (element) {
				return element.visible === true;
			})
			.map((element) => {
				return element.id;
			});

		setValue(newVal);
		control.setting.set(JSON.stringify(dbValue));
	};

	useEffect(() => {
		window.wp.customize.bind('ready', () => {
			window.wp.customize
				.state('expandedSection')
				.bind((expandedSection) => {
					if (!expandedSection) {
						return;
					}

					if (!expandedSection.id) {
						return;
					}

					if (expandedSection.id === section) {
						setVisible(true);
					}
				});
		});
	}, []);

	useEffect(() => {
		if (control.id !== 'neve_layout_single_post_elements_order') {
			return;
		}

		window.wp.customize.control(
			'neve_post_header_layout',
			(customizeControl) => {
				customizeControl.setting.bind((nextVal) => {
					let newVal = maybeParseJson(control.setting.get());
					let titleMetaIndex, thumbnailIndex;
					switch (nextVal) {
						case 'cover':
							titleMetaIndex = newVal.indexOf('title-meta');
							if (titleMetaIndex !== -1) {
								newVal.splice(titleMetaIndex, 1);
							}

							thumbnailIndex = newVal.indexOf('thumbnail');
							if (thumbnailIndex !== -1) {
								newVal.splice(thumbnailIndex, 1);
							}

							delete components['title-meta'];
							delete components.thumbnail;
							break;
						case 'normal':
							if (!components['title-meta']) {
								components['title-meta'] = __(
									'Title & Meta',
									'neve'
								);
							}
							if (!components.thumbnail) {
								components.thumbnail = __('Thumbnail', 'neve');
							}

							thumbnailIndex = newVal.indexOf('thumbnail');
							if (thumbnailIndex === -1) {
								newVal = ['thumbnail'].concat(newVal);
							}

							titleMetaIndex = newVal.indexOf('title-meta');
							if (titleMetaIndex === -1) {
								newVal = ['title-meta'].concat(newVal);
							}

							break;
					}

					updateValue(newVal);
				});
			}
		);
	}, []);

	return (
		<div className="neve-white-background-control">
			<Suspense fallback={<Spinner />}>
				{isVisible && (
					<Ordering
						label={label}
						value={value}
						components={components}
						onUpdate={updateValue}
					/>
				)}
			</Suspense>
		</div>
	);
};

OrderingComponent.propTypes = {
	control: PropTypes.object.isRequired,
};

export default OrderingComponent;
