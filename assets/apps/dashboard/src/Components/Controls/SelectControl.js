import { useDispatch, useSelect } from '@wordpress/data';
import { useState } from '@wordpress/element';
import { NEVE_STORE } from '../../utils/constants';
import { changeOption as changeSetting } from '../../utils/rest';

import Select from '../Common/Select';
import ControlWrap from './ControlWrap';

export default ({
	icon,
	label,
	description,
	option,
	isPro = true,
	disabled,
	locked,
	choices,
}) => {
	const [loading, setLoading] = useState(false);

	const { changeModuleOption, setToast } = useDispatch(NEVE_STORE);
	const value = useSelect((select) => {
		const { getOption, getProOption } = select(NEVE_STORE);

		return isPro ? getProOption(option) : getOption(option);
	});

	const handleChange = (nextValue) => {
		setLoading(true);
		window.tiTrk?.with('neve').set(option, {
			feature: 'module-settings',
			featureComponent: option,
			featureValue: nextValue,
		});
		changeSetting(option, nextValue)
			.then((r) => {
				if (r.success) {
					changeModuleOption(option, nextValue);
					setToast(true);
					return;
				}
				setToast(false);
			})
			.finally(() => {
				setLoading(false);
			});
	};

	return (
		<ControlWrap
			description={description}
			label={label}
			icon={icon}
			locked={locked}
			id={option}
			afterTitle={
				<Select
					choices={choices}
					value={value}
					loading={loading}
					disabled={disabled}
					onChange={handleChange}
				/>
			}
		></ControlWrap>
	);
};
