import { useDispatch, useSelect } from '@wordpress/data';
import { useState } from '@wordpress/element';
import { LucideLoaderCircle } from 'lucide-react';

import Toggle from '../Common/Toggle';
import ControlWrap from './ControlWrap';

import { NEVE_STORE } from '../../utils/constants';
import { changeOption } from '../../utils/rest';

export default ({
	icon,
	label,
	description,
	option,
	isPro = true,
	disabled,
	locked,
}) => {
	const [loading, setLoading] = useState(false);

	const value = useSelect((select) => {
		const { getOption, getProOption } = select(NEVE_STORE);

		return isPro ? getProOption(option) : getOption(option);
	});

	const { setToast, changeModuleOption } = useDispatch(NEVE_STORE);

	const onToggleChange = (nextValue) => {
		setLoading(true);
		window.tiTrk?.with('neve').set(option, {
			feature: 'module-settings',
			featureComponent: option,
			featureValue: nextValue,
		});
		changeModuleOption(option, nextValue);
		changeOption(option, nextValue)
			.then((r) => {
				if (!r.success) {
					changeModuleOption(option, !nextValue);
					setToast(false);

					return;
				}

				setToast(true);
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
						<LucideLoaderCircle
							size={20}
							className="animate-spin"
						/>
					)}
					<Toggle
						checked={value}
						onToggle={onToggleChange}
						disabled={loading || disabled || locked}
						loading={loading}
					/>
				</>
			}
		></ControlWrap>
	);
};
