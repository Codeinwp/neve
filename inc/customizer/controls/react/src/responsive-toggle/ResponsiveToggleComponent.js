/* jshint esversion: 6 */

import PropTypes from 'prop-types';
import ControlWithLink from '../common/ControlWithLink';
import ResponsiveControl from '../common/Responsive';

import { ToggleControl } from '@wordpress/components';
import { useState, Fragment, useEffect } from '@wordpress/element';

const ConditionalWrapper = ({ condition, wrapper, children }) =>
	condition ? wrapper(children) : children;

const ResponsiveToggleComponent = ({ control }) => {
	useEffect(() => {
		global.addEventListener('neve-changed-customizer-value', (e) => {
			if (!e.detail) {
				return false;
			}
			if (e.detail.id !== control.id) {
				return false;
			}
			setValue(e.detail.value);
		});
	}, []);

	const [value, setValue] = useState(control.setting.get());
	const [device, setDevice] = useState('desktop');

	const link = control.params.link || null;

	return (
		<div
			className={
				'neve-white-background-control flex-contents' +
				(link ? ' flex-wrap-row' : '')
			}
		>
			<ConditionalWrapper
				condition={link}
				wrapper={(children) => (
					<ControlWithLink link={link}>{children}</ControlWithLink>
				)}
			>
				<Fragment>
					<ToggleControl
						className="neve-toggle-control"
						checked={value[device]}
						label={control.params.label}
						onChange={(newValue) => {
							const nextValue = { ...value };
							nextValue[device] = newValue;
							setValue(nextValue);
							control.setting.set(nextValue);
						}}
					/>
					<ResponsiveControl
						excluded={control.params.excluded || []}
						hideResponsive={control.params.hideResponsive || false}
						onChange={(nextDevice) => {
							setDevice(nextDevice);
						}}
					/>
				</Fragment>
			</ConditionalWrapper>
		</div>
	);
};

ResponsiveToggleComponent.propTypes = {
	control: PropTypes.object.isRequired,
};

export default ResponsiveToggleComponent;
