import { withDispatch } from '@wordpress/data';
import { ReactSortable } from 'react-sortablejs';
import { Button } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

const SortableItems = (props) => {
	const { value, elements, updateElement, toggle } = props;
	return (
		<div>
			<ReactSortable
				className="neve-meta-control neve-meta-sortable-items"
				list={value}
				setList={updateElement}
				handle=".ti-sortable-handle"
				animation="300"
			>
				{value.map((item) => {
					const { id, visible } = item;
					return (
						<div
							className={`ti-sortable-item-area ti-sortable-item-area-${id}`}
							key={id}
						>
							<div
								className={
									visible
										? 'ti-sortable-item'
										: 'ti-sortable-item hidden'
								}
							>
								<Button
									isTertiary
									icon={visible ? 'visibility' : 'hidden'}
									label={__('Toggle', 'neve')}
									showTooltip={true}
									className="ti-sortable-item-toggle"
									onClick={() => {
										toggle(id);
									}}
								/>
								<div className="ti-sortable-item-label">
									{elements[id]}
								</div>
								<div className="ti-sortable-handle">
									<Button isTertiary icon="menu" />
								</div>
							</div>
						</div>
					);
				})}
			</ReactSortable>
		</div>
	);
};

export default withDispatch((dispatch, props) => {
	const { stateUpdate, id } = props;
	return {
		updateElement(value) {
			const dbValue = value
				.filter(function (element) {
					return element.visible === true;
				})
				.map((element) => {
					return element.id;
				});
			stateUpdate(id, JSON.stringify(dbValue));
			dispatch('core/editor').editPost({
				meta: { [props.id]: JSON.stringify(dbValue) },
			});
		},

		toggle(currentValue) {
			const { value } = props;
			const updatedValue = value.map(function (element) {
				if (element.id === currentValue) {
					element.visible = !element.visible;
				}
				return element;
			});
			this.updateElement(updatedValue);
		},
	};
})(SortableItems);
