import { SelectControl } from '@wordpress/components';
import { withSelect, withDispatch } from '@wordpress/data';
import { compose } from '@wordpress/compose';
import { changeOption as changeSetting } from '../../utils/rest';

const Select = ({
	slug,
	label,
	choices,
	getOption,
	changeOption,
	setToast,
}) => {
	return (
		<div className="module-option toggle">
			<SelectControl
				style={{ minWidth: '200px' }}
				label={label}
				value={getOption(slug) || 'css'}
				onChange={(value) => {
					changeSetting(slug, value).then((r) => {
						if (r.success) {
							changeOption(slug, value);
							setToast(true);
							return false;
						}
						setToast(false);
					});
				}}
				options={Object.keys(choices).map((optionSlug) => {
					return {
						label: choices[optionSlug],
						value: optionSlug,
					};
				})}
			/>
		</div>
	);
};

export default compose(
	withSelect((select) => {
		const { getProOption } = select('neve-dashboard');
		return {
			getOption: (slug) => getProOption(slug),
		};
	}),
	withDispatch((dispatch) => {
		const { changeModuleOption, setToast } = dispatch('neve-dashboard');
		return {
			changeOption: (slug, value) => changeModuleOption(slug, value),
			setToast: (message) => setToast(message),
		};
	})
)(Select);
