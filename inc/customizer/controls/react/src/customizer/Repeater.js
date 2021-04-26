import { Button, Icon } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { chevronDown, chevronUp } from '@wordpress/icons';
import { useState } from '@wordpress/element';
import TextInput from '../common/TextInput';
import IconColor from '../icon-color/IconColor';
import IconField from '../icon-picker/IconField';

const Repeater = ({ value, fields, onUpdate, itemIndex }) => {
	const { visibility, title } = value;
	const [expanded, setExpanded] = useState(false);
	const [updatedTitle, updateTitle] = useState(title);

	const isVisible = visibility === 'yes';

	const toggleExpanded = () => setExpanded(!expanded);
	const toggleVisibility = () => {};
	return (
		<div className="nv-item">
			<div className="nv-header">
				<Button
					icon={isVisible ? 'visibility' : 'hidden'}
					onClick={toggleVisibility}
					// --> className="visibility-btn" <-- //
				/>

				<Button className="nv-title" onClick={toggleExpanded}>
					<span className="nv-text">
						{updatedTitle ?? __('Item', 'neve')}
					</span>
					<Icon
						icon={expanded ? chevronUp : chevronDown}
						className="expanded-icon"
					/>
				</Button>
			</div>

			{expanded && (
				<div className="nv-item--content">
					{/* eslint-disable-next-line array-callback-return */}
					{Object.keys(fields).map((fieldId) => {
						const { type, label } = fields[fieldId];

						if (type === 'text') {
							return (
								<div>
									<TextInput
										label={
											label === 'Fields' ? 'Title' : label
										}
										type={type}
										val={value[fieldId]}
										title={updatedTitle}
										updateTitle={updateTitle}
									/>
								</div>
							);
						}

						if (type === 'color') {
							return <IconColor label={label} />;
						}

						if (type === 'icon') {
							return (
								<IconField
									label={label}
									selectedIcon={value[fieldId]}
								/>
							);
						}
					})}
				</div>
			)}
		</div>
	);
};
export default Repeater;
