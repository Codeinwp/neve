import { Button, Icon, Tooltip } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { chevronDown, chevronUp } from '@wordpress/icons';
import { useState, useEffect } from '@wordpress/element';
import TextInput from '../common/TextInput';
import IconField from '../common/icon-picker/IconField';
import { SortableHandle } from 'react-sortable-hoc';
import ColorControl from '../common/ColorControl';

const Item = ({
	value,
	fields,
	key,
	onUpdate,
	updateValue,
	index,
	changeVisibility,
	removeFields,
	changeColor,
}) => {
	const { visibility, title } = value;
	const [isExpanded, expand] = useState(false);
	const [updatedTitle, updateTitle] = useState(title);

	useEffect(() => updateTitle(title), [title]);

	const isVisible = visibility === 'yes';

	const toggleExpanded = (e) => {
		e.preventDefault();
		expand(!isExpanded);
	};

	const hiddenField = () => {
		changeVisibility(index);
	};

	const Handle = SortableHandle(() => (
		<Tooltip text={__('Drag to Reorder', 'neve')}>
			<button
				aria-label={__('Drag to Reorder', 'neve')}
				className="reorder-button"
				onClick={(e) => e.preventDefault()}
			>
				<Icon icon="menu" />
			</button>
		</Tooltip>
	));

	return (
		<div className="nv-item" key={key}>
			<div className="nv-header">
				<Button
					icon={isVisible ? 'visibility' : 'hidden'}
					onClick={hiddenField}
					// --> className="visibility-btn" <-- //
				/>

				<Button
					className="nv-title"
					onClick={toggleExpanded}
					disabled={!isVisible}
				>
					<span className="nv-text">
						{updatedTitle ?? __('Item', 'neve')}
					</span>
					<Handle />
					{/*<Icon*/}
					{/*	icon={expanded ? chevronUp : chevronDown}*/}
					{/*	className="expanded-icon"*/}
					{/*/>*/}
				</Button>
			</div>

			{isExpanded && (
				<div className="field-content">
					{/* eslint-disable-next-line array-callback-return */}
					{Object.keys(fields).map((fieldId) => {
						const { type, label } = fields[fieldId];

						let selectedIcon;
						if (!value[fieldId]) {
							selectedIcon = null;
						} else {
							selectedIcon = value[fieldId];
						}

						if (type === 'text') {
							return (
								<TextInput
									label={label === 'Fields' ? 'Title' : label}
									type={type}
									index={index}
									val={value[fieldId]}
									title={updatedTitle}
									updateTitle={updateValue}
									disabled={isVisible}
								/>
							);
						}

						if (type === 'color') {
							return (
								<div className="field-repeat">
									<ColorControl
										defaultValue=""
										label={label}
										onChange={changeColor}
										selectedColor="#f00"
									/>
								</div>
							);
						}

						if (type === 'icon') {
							return (
								<IconField
									label={label}
									selectedIcon={selectedIcon}
								/>
							);
						}
					})}
					<div className="remove-field-section">
						<Button
							className="remove-field"
							onClick={() => removeFields(index)}
						>
							Remove
						</Button>
					</div>
				</div>
			)}
		</div>
	);
};
export default Item;
