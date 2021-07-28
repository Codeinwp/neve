/* global neveDash */
import { changeOption as changeSetting } from '../../utils/rest';

import { ToggleControl, Dashicon, ExternalLink } from '@wordpress/components';
import { withSelect, withDispatch } from '@wordpress/data';
import { compose } from '@wordpress/compose';
import { useState } from '@wordpress/element';

const Toggle = ({
	slug,
	label,
	documentation,
	getOption,
	changeOption,
	setToast,
}) => {
	const [loading, setLoading] = useState(false);
	return (
		<div className="module-option toggle">
			<ToggleControl
				checked={getOption(slug) || false}
				label={label}
				onChange={(value) => {
					setLoading(true);
					changeSetting(slug, value).then((r) => {
						if (r.success) {
							changeOption(slug, value);
							setToast(true);
							setLoading(false);
							return false;
						}
						setToast(false);
						setLoading(false);
					});
				}}
			/>
			.&nbsp;{' '}
			{!neveDash.whiteLabel && documentation && documentation.url && (
				<ExternalLink href={documentation.url}>
					{documentation.label}
				</ExternalLink>
			)}
			{loading && (
				<Dashicon size={18} icon="update" className="is-loading" />
			)}
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
)(Toggle);
