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

	const [lockedComponents, setLockedComponents] = useState([]);

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
		let nextVal = newVal.filter((el) => !lockedComponents.includes(el.id));
		nextVal = [
			...lockedComponents.map((el) => {
				return { id: el, visible: true };
			}),
			...nextVal,
		];

		const dbValue = nextVal
			.filter((el) => el.visible === true)
			.map((el) => el.id);

		setValue(nextVal);
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

			if (control.id === 'neve_layout_product_elements_order') {
				wp.customize('neve_product_content_alignment', (setting) => {
					setting.bind((val) => {
						const controlVal = maybeParseJson(
							control.setting.get()
						);
						components.title = __('Title', 'neve');
						components.price = __('Product Price', 'neve');
						if (val === 'inline') {
							components.title =
								__('Title', 'neve') +
								' + ' +
								__('Product Price', 'neve');
							delete components.price;
						}
						updateValue(normalizeValue(controlVal));
					});
				});
			}
		});
	}, []);

	useEffect(() => {
		const regex = /neve_layout_single_(.+)_elements_order/m;
		const matches = regex.exec(control.id);
		if (matches === null) {
			return;
		}

		if (
			window.wp.customize
				.control('neve_' + matches[1] + '_header_layout')
				.setting() === 'cover'
		) {
			setLockedComponents(['title-meta', 'thumbnail']);
		}

		window.wp.customize.control(
			'neve_' + matches[1] + '_header_layout',
			(customizeControl) => {
				customizeControl.setting.bind((nextVal) => {
					const newVal = maybeParseJson(control.setting.get());
					let titleMetaIndex, thumbnailIndex;
					switch (nextVal) {
						case 'cover':
							setLockedComponents(['title-meta', 'thumbnail']);

							// Moved title-meta & thumbnail to the start of the array.
							titleMetaIndex = newVal.indexOf('title-meta');
							if (titleMetaIndex !== -1) {
								newVal.splice(titleMetaIndex, 1);
							}

							thumbnailIndex = newVal.indexOf('thumbnail');
							if (thumbnailIndex !== -1) {
								newVal.splice(thumbnailIndex, 1);
							}

							newVal.unshift('thumbnail');
							newVal.unshift('title-meta');

							break;
						case 'normal':
							setLockedComponents([]);
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
						locked={lockedComponents}
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
