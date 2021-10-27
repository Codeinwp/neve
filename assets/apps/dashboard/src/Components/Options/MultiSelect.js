import { changeOption as changeSetting } from '../../utils/rest';
import { compose } from '@wordpress/compose';
import { withDispatch, withSelect } from '@wordpress/data';
import { MultiSelect } from '@neve-wp/components';

const MultiSelectOption = ({
	slug,
	label,
	choices,
	getOption,
	changeOption,
	setToast,
}) => {
	return (
		<div className="module-option neve-multiselect">
			<MultiSelect
				style={{ minWidth: '200px' }}
				label={label}
				choices={choices}
				currentValue={getOption(slug) || ['category']}
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
)(MultiSelectOption);
