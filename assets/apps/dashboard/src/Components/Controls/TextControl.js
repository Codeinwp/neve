import { useDispatch, useSelect } from '@wordpress/data';
import { useState } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import { NEVE_STORE } from '../../utils/constants';
import { changeOption } from '../../utils/rest';
import Button from '../Common/Button';
import TextInput from '../Common/TextInput';
import ControlWrap from './ControlWrap';

export default ({
	icon,
	label,
	description,
	option,
	isPro = true,
	disabled,
	locked,
	placeholder = '',
}) => {
	const { changeModuleOption, setToast } = useDispatch(NEVE_STORE);
	const value = useSelect((select) => {
		const { getOption, getProOption } = select(NEVE_STORE);

		return isPro ? getProOption(option) : getOption(option);
	});

	const [loading, setLoading] = useState(false);

	return (
		<ControlWrap
			label={label}
			description={description}
			icon={icon}
			locked={locked}
			afterTitle={
				<form
					disabled={loading || disabled || locked}
					onSubmit={(e) => {
						e.preventDefault();
						setLoading(true);
						changeOption(option, value)
							.then((r) => {
								if (r.success) {
									setToast(true);
									return;
								}
								setToast(r.message ? r.message : false);
							})
							.finally(() => {
								setLoading(false);
							});
					}}
				>
					<div className="flex">
						<TextInput
							type="text"
							id={option}
							placeholder={placeholder}
							disabled={loading || disabled || locked}
							className="!border-r-0 !rounded-r-none px-2"
							value={value}
							onChange={(e) => {
								changeModuleOption(option, e.target.value);
								if (option === 'typekit_id') {
									window.tiTrk?.with('neve').add({
										feature: 'typekit-fonts',
										featureComponent: 'typekit-id',
										featureValue: 'enabled',
									});
								}
							}}
						/>

						<Button
							loading={loading}
							type="submit"
							isSecondary
							disabled={loading || disabled || locked}
							className="rounded-r"
						>
							{loading
								? __('Saving', 'neve') + '...'
								: __('Save', 'neve')}
						</Button>
					</div>
				</form>
			}
		/>
	);
};
