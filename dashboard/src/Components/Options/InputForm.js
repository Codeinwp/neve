import { changeOption as changeSetting } from '../../utils/rest';

import { useState } from '@wordpress/element';
import { Button } from '@wordpress/components';
import { withSelect, withDispatch } from '@wordpress/data';
import { compose } from '@wordpress/compose';
import { __ } from '@wordpress/i18n';

const InputForm = ({
	slug,
	label,
	placeholder,
	getOption,
	setToast,
	changeOption,
}) => {
	const [value, setValue] = useState(getOption(slug));
	const [loading, setLoading] = useState(false);
	return (
		<div className="module-option text">
			<form
				onSubmit={(e) => {
					e.preventDefault();
					setLoading(true);
					changeSetting(slug, value).then((r) => {
						if (r.success) {
							changeOption(slug, value);
							setToast(true);
							setLoading(false);
							return false;
						}
						setToast(r.message ? r.message : false);
						setLoading(false);
					});
				}}
			>
				{label && <label htmlFor={slug}>{label}</label>}
				<div className="input-wrap">
					<input
						id={slug}
						placeholder={placeholder}
						value={value}
						onChange={(e) => {
							setValue(e.target.value);
						}}
					/>
					<div className="actions">
						<Button
							className={loading ? 'is-loading' : null}
							type="submit"
							disabled={loading}
							label={__('Save', 'neve')}
							icon={loading ? 'update' : 'editor-break'}
						/>
					</div>
				</div>
			</form>
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
)(InputForm);
