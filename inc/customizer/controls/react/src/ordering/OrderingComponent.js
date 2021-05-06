/* jshint esversion: 6 */
// import Ordering from './Ordering';
import { lazy, Suspense, useEffect, useState } from '@wordpress/element';
import { Spinner } from '@wordpress/components';
import { maybeParseJson } from '../common/common';
import PropTypes from 'prop-types';

const Ordering = lazy(() =>
	import(/* webpackChunkName: "ordering" */ './Ordering')
);

const OrderingComponent = ({ control }) => {
	const [value, setValue] = useState(maybeParseJson(control.setting.get()));
	const [isVisible, setVisible] = useState(false);
	const { section, components, label } = control.params;
	const updateValue = (newVal) => {
		setValue(newVal);
		control.setting.set(JSON.stringify(newVal));
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

	return (
		<div className="neve-white-background-control">
			<Suspense fallback={<Spinner />}>
				{isVisible && (
					<Ordering
						label={label}
						components={components}
						value={value}
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
