/* jshint esversion: 6 */
import { lazy, Suspense, useEffect, useState } from '@wordpress/element';
import { Spinner } from '@wordpress/components';
import { maybeParseJson } from '@neve-wp/components';
import PropTypes from 'prop-types';

const Ordering = lazy(() =>
	import(/* webpackChunkName: "order" */ './Ordering')
);
import { __ } from '@wordpress/i18n';

const OrderingComponent = ({ control }) => {
	const { section, components, label } = control.params;

	const normalizeValue = (val) => {
		const enabledItems = val.map((element) => {
			return { id: element, visible: true };
		});

		const disabledItems = Object.keys(components)
			.filter((componentSlug) => !val.includes(componentSlug))
			.map((id) => ({ id, visible: false }));

		return [...enabledItems, ...disabledItems];
	};

	const [value, setValue] = useState(
		normalizeValue(maybeParseJson(control.setting.get()))
	);

	const [isVisible, setVisible] = useState(false);

	const updateValue = (newVal) => {
		const dbValue = newVal
			.filter((el) => el.visible === true)
			.map((el) => el.id);

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
		const regex = /neve_layout_single_(.+)_elements_order/m;
		const matches = regex.exec(control.id);
		if (matches === null) {
			return;
		}

		window.wp.customize.control(
			'neve_' + matches[1] + '_header_layout',
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
					updateValue(normalizeValue(newVal));
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
