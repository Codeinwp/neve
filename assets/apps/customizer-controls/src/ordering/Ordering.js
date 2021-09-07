import { ReactSortable } from 'react-sortablejs';
import classnames from 'classnames';
import PropTypes from 'prop-types';

import { __ } from '@wordpress/i18n';
import { Tooltip, Icon } from '@wordpress/components';

const Handle = () => (
	<Tooltip text={__('Drag to Reorder', 'neve')}>
		<button
			aria-label={__('Drag to Reorder', 'neve')}
			className="handle"
			onClick={(e) => {
				e.preventDefault();
			}}
		>
			<Icon icon="menu" />
		</button>
	</Tooltip>
);

const Item = ({
	label,
	slug,
	onToggle,
	className,
	allowsToggle = true,
	disabled = false,
}) => {
	return (
		<div
			className={classnames([
				'neve-sortable-item',
				className,
				{ 'no-toggle': !allowsToggle },
			])}
		>
			{allowsToggle && (
				<Tooltip text={__('Toggle Visibility', 'neve')}>
					<button
						aria-label={__('Toggle Visibility', 'neve')}
						className="toggle"
						onClick={(e) => {
							e.preventDefault();
							e.stopPropagation();
							onToggle(slug);
						}}
					>
						<Icon icon="visibility" />
					</button>
				</Tooltip>
			)}
			<span className="label">{label}</span>
			{!disabled && <Handle />}
		</div>
	);
};

Item.propTypes = {
	label: PropTypes.string.isRequired,
	slug: PropTypes.string.isRequired,
	onToggle: PropTypes.func.isRequired,
	className: PropTypes.string,
	disabled: PropTypes.bool,
};

const Ordering = ({
	onUpdate,
	components,
	label,
	value,
	allowsToggle = true,
	orderHeaderElements,
}) => {
	const disabled = Object.keys(components).filter(
		(item) => !value.includes(item)
	);

	const handleToggle = (slug) => {
		let newValue = [...value];
		if (newValue.includes(slug)) {
			newValue = newValue.filter((item) => item !== slug);
		} else {
			newValue.push(slug);
		}

		onUpdate(newValue);
	};

	return (
		<>
			{label /* TODO: Add proper label id for this */ && (
				/* eslint-disable-next-line jsx-a11y/label-has-for */
				<label className="customize-control-title">{label}</label>
			)}
			{/*<List*/}
			{/*	items={value}*/}
			{/*	lockAxis="y"*/}
			{/*	useDragHandle*/}
			{/*	onSortEnd={handleSortEnd}*/}
			{/*>*/}


			{/*	/!*{disabled.map((slug, index) => (*!/*/}
			{/*	/!*	<Item*!/*/}
			{/*	/!*		className="disabled"*!/*/}
			{/*	/!*		key={index}*!/*/}
			{/*	/!*		slug={slug}*!/*/}
			{/*	/!*		label={components[slug]}*!/*/}
			{/*	/!*		index={index}*!/*/}
			{/*	/!*		onToggle={handleToggle}*!/*/}
			{/*	/!*		allowsToggle={allowsToggle}*!/*/}
			{/*	/!*		disabled*!/*/}
			{/*	/!*	/>*!/*/}
			{/*	/!*))}*!/*/}
			{/*</List>*/}

			<ReactSortable
				className="items-list"
				list={value}
				setList={onUpdate}
				animation={300}
				forceFallback={true}
				handle=".handle"
			>
				{value.map(
					(slug, index) =>
						Object.keys(components).includes(slug) && (
							<Item
								key={index}
								index={index}
								label={components[slug]}
								slug={slug}
								onToggle={handleToggle}
								allowsToggle={allowsToggle}
								orderHeaderElements={orderHeaderElements}
							/>
						)
				)}
			</ReactSortable>
		</>
	);
};

Ordering.propTypes = {
	onUpdate: PropTypes.func.isRequired,
	components: PropTypes.object.isRequired,
	label: PropTypes.string.isRequired,
	value: PropTypes.array.isRequired,
	allowsToggle: PropTypes.bool,
};

export default Ordering;
