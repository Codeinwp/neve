import { useEffect, useState, lazy, Suspense } from '@wordpress/element';
import { Spinner } from '@wordpress/components';
import PropTypes from 'prop-types';

const RichText = lazy(() => import('./RichText'));

const RichTextComponent = ({ control }) => {
	const [isVisible, setVisible] = useState(false);
	let controlValue = control.setting.get();
	// this replaces the default line breaks for old textarea content
	controlValue = controlValue.replace(/[a-zA-Z0-9\}(?:\s)]\n/g, function (a) {
		return a + '<br/>';
	});
	const [value, setValue] = useState(controlValue);
	const { id: controlId, params } = control;
	const { label, section, toolbars, allowedDynamicFields } = params;

	/**
	 * Method to update state and trigger control setting change.
	 *
	 * @param {string} nextVal The next value for the control.
	 */
	const updateValues = (nextVal) => {
		setValue(nextVal);
		control.setting.set(nextVal);
	};

	/**
	 * We check here that the section is visible so that we trigger the load of the component
	 */
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

					if (expandedSection.id === section && isVisible === false) {
						setVisible(true);
					}
				});
		});
	}, []);

	useEffect(() => {
		document.addEventListener('neve-changed-customizer-value', (e) => {
			if (isVisible) return;
			if (!e.detail) return false;
			if (e.detail.id !== controlId) return false;
			updateValues(e.detail.value);
		});
	}, []);

	return (
		<Suspense fallback={<Spinner />}>
			{isVisible && (
				<RichText
					id={controlId}
					label={label}
					onChange={updateValues}
					toolbars={toolbars}
					allowedDynamicFields={allowedDynamicFields}
					currentValue={value}
				/>
			)}
		</Suspense>
	);
};

RichTextComponent.propTypes = {
	control: PropTypes.object.isRequired,
};

export default RichTextComponent;
