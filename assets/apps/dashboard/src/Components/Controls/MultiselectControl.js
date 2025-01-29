import { useDispatch, useSelect } from '@wordpress/data';
import { useState } from '@wordpress/element';
import { LoaderCircle } from 'lucide-react';
import { NEVE_STORE } from '../../utils/constants';
import { changeOption } from '../../utils/rest';
import MultiSelect from '../Common/Multiselect';
import ControlWrap from './ControlWrap';

const MultiSelectControl = ({
	icon,
	label,
	description,
	option,
	isPro = true,
	disabled,
	locked,
	choices = {},
}) => {
	const [loading, setLoading] = useState(false);

	const { changeModuleOption, setToast } = useDispatch(NEVE_STORE);
	const value = useSelect((select) => {
		const { getOption, getProOption } = select(NEVE_STORE);

		return isPro ? getProOption(option) : getOption(option);
	});

	const handleChange = (nextValues) => {
		setLoading(true);

		window.tiTrk?.with('neve').set(option, {
			feature: 'module-settings',
			featureComponent: option,
			featureValue: nextValues,
		});

		changeModuleOption(option, nextValues);

		changeOption(option, nextValues)
			.then((r) => {
				if (r.success) {
					setToast(true);
					return;
				}
				changeModuleOption(option, value);
				setToast(false);
			})
			.finally(() => {
				setLoading(false);
			});
	};

	return (
		<ControlWrap
			label={label}
			description={description}
			icon={icon}
			locked={locked}
			id={option}
			afterTitle={
				<>
					{loading && (
						<LoaderCircle
							size={18}
							className="animate-spin shrink-0"
						/>
					)}

					<MultiSelect
						choices={choices}
						value={value}
						disabled={loading || locked || disabled}
						onChange={handleChange}
					/>
				</>
			}
		/>
	);
};

export default MultiSelectControl;
