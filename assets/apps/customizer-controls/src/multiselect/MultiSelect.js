import { plusCircleFilled, cancelCircleFilled } from '@wordpress/icons';
import { Tooltip, Icon } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

import PropTypes from 'prop-types';

const MultiSelect = ({ choices, onChange, currentValue, label }) => {
	const Pill = ({ slug, isRemove = false }) => {
		const buttonIcon = isRemove ? cancelCircleFilled : plusCircleFilled;
		return (
			<Tooltip
				key={slug}
				text={
					isRemove
						? __('Remove Item', 'neve')
						: __('Add item', 'neve')
				}
			>
				<button
					type="button"
					className="token"
					onClick={() => {
						const newVal = isRemove
							? [...currentValue].filter((v) => v !== slug)
							: [...currentValue, slug];
						onChange(newVal);
					}}
				>
					<span className="title">{choices[slug]}</span>
					<Icon icon={buttonIcon} size={18} />
				</button>
			</Tooltip>
		);
	};

	const addable = Object.keys(choices)
		.filter((choice) => !currentValue.includes(choice))
		.map((slug, i) => <Pill key={i} slug={slug} />);

	const values = currentValue
		.filter((slug) => choices[slug])
		.map((slug, i) => <Pill key={i} slug={slug} isRemove={true} />);

	return (
		<div className="neve-white-background-control neve-multiselect">
			<span className="customize-control-title">{label}</span>
			<div className="selected-options">
				{values.length ? (
					values
				) : (
					<span className="placeholder">
						{__('Add items by clicking the ones below.', 'neve')}
					</span>
				)}
			</div>
			<div className="available-options">
				{addable.length > 0 ? (
					addable
				) : (
					<span className="placeholder">
						{__('All items are already selected.', 'neve')}
					</span>
				)}
			</div>
		</div>
	);
};

MultiSelect.propTypes = {
	choices: PropTypes.object.isRequired,
	onChange: PropTypes.func.isRequired,
	currentValue: PropTypes.array.isRequired,
	label: PropTypes.string,
};

export default MultiSelect;
