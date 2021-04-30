import { Button, Icon, Tooltip } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { chevronDown, chevronUp } from '@wordpress/icons';
import { useState, useEffect } from '@wordpress/element';
import TextInput from '../common/TextInput';
import IconColor from '../icon-color/IconColor';
import IconField from '../icon-picker/IconField';
import { SortableHandle } from 'react-sortable-hoc';

const Repeater = ({
	value,
	fields,
	key,
	onUpdate,
	index,
	changeVisibility,
}) => {
	const { visibility, title } = value;
	const [expanded, setExpanded] = useState(false);
	const [updatedTitle, updateTitle] = useState(title);
	const [isVisible, setVisibility] = useState(visibility === 'yes');

	useEffect(() => updateTitle(title), [title]);

	useEffect(() => {
		if (!isVisible) {
			changeVisibility({ ...value, visibility: 'no' });
		} else {
			changeVisibility({ ...value, visibility: 'yes' });
		}
	}, [isVisible]);

	console.log('isVisible', isVisible);
	const toggleExpanded = (e) => {
		e.preventDefault();
		setExpanded(!expanded);
	};

	const toggleVisibility = () => {
		setVisibility(!isVisible);
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
					onClick={toggleVisibility}
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
										disabled={isVisible}
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
