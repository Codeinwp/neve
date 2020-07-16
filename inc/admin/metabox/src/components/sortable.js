/**
 * External dependencies
 */
import classnames from 'classnames';

import {SortableContainer, SortableElement, SortableHandle} from 'react-sortable-hoc';

/**
 * WordPress dependencies
 */
const {
	startCase,
	toLower
} = lodash;

const {__} = wp.i18n;

const {
	IconButton,
	TextControl,
	SelectControl,
	ToggleControl
} = wp.components;

const {
	Fragment,
	useState
} = wp.element;

const DragHandle = SortableHandle(() => {
	return (
		<div className="wp-block-themeisle-blocks-posts-grid-builder-handle">
			<span></span>
		</div>
	);
});

export const SortableItem = (
	{value, disabled, getFields, toggleFields, imageSize, titleTag, excerptLimit}) => {
	const [ isOpen, setOpen ] = useState(false);

	const label = startCase(toLower(value));
	let icon = 'hidden';
	let message = __(`Display ${label}`);

	if (getFields(value)) {
		icon = 'visibility';
		message = __(`Hide ${label}`);
	}

	let edit;

	switch (value) {
		case 'image':
			edit = true;
			break;
		case 'title':
			edit = true;
			break;
		case 'meta':
			edit = true;
			break;
		case 'description':
			edit = true;
			break;
		default:
			edit = false;
			break;
	}

	return (
		<div
			className={classnames(
				'wp-block-themeisle-blocks-posts-grid-builder-item-area',
				`wp-block-themeisle-blocks-posts-grid-builder-item-area-${value}`
			)}
		>
			<div
				className={classnames(
					'wp-block-themeisle-blocks-posts-grid-builder-item',
					{
						'disabled': disabled,
						'hidden': ! getFields(value),
						'editable': edit
					}
				)}
			>
				{ ! disabled && <DragHandle/> }

				<div className="wp-block-themeisle-blocks-posts-grid-builder-label">
					{label}
				</div>

				{edit && (
					<IconButton
						icon={isOpen ? 'arrow-up-alt2' : 'arrow-down-alt2'}
						label={isOpen ? __('Close Settings') : __('Open Settings')}
						className="wp-block-themeisle-blocks-posts-grid-builder-button"
						onClick={ () => setOpen( ! isOpen ) }
					/>
				)}

				<IconButton
					icon={icon}
					label={message}
					className="wp-block-themeisle-blocks-posts-grid-builder-button"
					onClick={() => {
						toggleFields(value);
						setOpen(false);
					}}
				/>
			</div>

			{edit && (
				<div
					className={classnames(
						'wp-block-themeisle-blocks-posts-grid-builder-control-area',
						{'opened': isOpen && getFields(value)}
					)}
				>
					{('image' === value) && (
						<Fragment>
							<SelectControl
								label={__('Image Size')}
								value={imageSize.value}
								options={[
									{label: __('Thumbnail'), value: 'thumbnail'},
									{label: __('Medium'), value: 'medium'},
									{label: __('Medium Large'), value: 'medium_large'},
									{label: __('Large'), value: 'large'},
									{label: __('Full'), value: 'full'}
								]}
								onChange={imageSize.onChange}
							/>

							<ToggleControl
								label={'Display Box Shadow?'}
								checked={getFields('imageBoxShadow')}
								onChange={() => toggleFields('imageBoxShadow')}
							/>
						</Fragment>
					)}

					{('title' === value) && (
						<SelectControl
							label={__('Title Tag')}
							value={titleTag.value || 'h5'}
							options={[
								{label: __('H1'), value: 'h1'},
								{label: __('H2'), value: 'h2'},
								{label: __('H3'), value: 'h3'},
								{label: __('H4'), value: 'h4'},
								{label: __('H5'), value: 'h5'},
								{label: __('H6'), value: 'h6'}
							]}
							onChange={titleTag.onChange}
						/>
					)}

					{('description' === value) && (
						<TextControl
							label={__('Excerpt Limit')}
							type="number"
							value={excerptLimit.value}
							onChange={excerptLimit.onChange}
						/>
					)}

					{('meta' === value) && (
						<Fragment>
							<ToggleControl
								label={'Display Date?'}
								checked={getFields('date')}
								onChange={() => toggleFields('date')}
							/>

							<ToggleControl
								label={'Display Author?'}
								checked={getFields('author')}
								onChange={() => toggleFields('author')}
							/>
						</Fragment>
					)}
				</div>
			)}
		</div>
	);
};

const SortableItemContainer = SortableElement(
	({value, disabled, getFields, toggleFields, titleTag, excerptLimit}) => {
	return (
		<SortableItem
			value={value}
			disabled={disabled}
			getFields={getFields}
			toggleFields={toggleFields}
			titleTag={titleTag}
			excerptLimit={excerptLimit}
		/>
	);
});

export const SortableList = SortableContainer(
	({template, getFields, toggleFields, titleTag, excerptLimit}) => {
		return (
			<div>
				{template.map((value, index) => (
					<SortableItemContainer
						key={`item-${index}`}
						index={index}
						value={value}
						getFields={getFields}
						toggleFields={toggleFields}
						titleTag={titleTag}
						excerptLimit={excerptLimit}
					/>
				))}
			</div>
		);
	}
);
