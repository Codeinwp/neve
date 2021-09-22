import { chevronDown, closeSmall, chevronUp } from '@wordpress/icons';
import { __ } from '@wordpress/i18n';
import {
	Icon,
	Dropdown,
	MenuGroup,
	MenuItem,
	Button,
} from '@wordpress/components';
import PropTypes from 'prop-types';

const MultiSelect = ({ choices, onChange, currentValue, label }) => {
	const Pill = ({ slug }) => {
		return (
			<Button
				className="token"
				aria-expanded={true}
				label={__('Remove Item', 'neve')}
				onClick={() => {
					const newVal = [...currentValue].filter((v) => v !== slug);
					onChange(newVal);
				}}
			>
				<Icon width={16} icon={closeSmall} />
				<span className="title">{choices[slug]}</span>
			</Button>
		);
	};

	const addable = Object.keys(choices).filter(
		(choice) => !currentValue.includes(choice)
	);

	const values = currentValue
		.filter((slug) => choices[slug])
		.map((slug, i) => <Pill key={i} slug={slug} isRemove={true} />);

	const addItem = (slug) => onChange([...currentValue, slug]);

	return (
		<div className="neve-white-background-control neve-multiselect">
			<span className="customize-control-title">{label}</span>

			<div className="multiselect-wrap">
				<div className="selected-options">{values}</div>
				<Dropdown
					className="dd-toggle"
					focusOnMount={false}
					renderToggle={({ isOpen, onToggle }) => (
						<Button
							isSmall
							isDefault
							disabled={addable.length < 1}
							icon={isOpen ? chevronUp : chevronDown}
							onClick={onToggle}
							aria-expanded={isOpen}
						/>
					)}
					renderContent={({ onClose }) => (
						<MenuGroup>
							{Object.entries(choices).map(([slug, niceName]) => {
								if (currentValue.includes(slug)) {
									return null;
								}
								return (
									<MenuItem
										key={slug}
										onClick={() => {
											addItem(slug);
											onClose();
										}}
									>
										{niceName}
									</MenuItem>
								);
							})}
						</MenuGroup>
					)}
				/>
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
