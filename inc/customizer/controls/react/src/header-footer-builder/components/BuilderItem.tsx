import React from 'react';
import { Button } from '@wordpress/components';
import { closeSmall, cog, menu } from '@wordpress/icons';
import { __ } from '@wordpress/i18n';

interface Props {
	componentId: string;
	builder: string;
}

const BuilderItem: React.FC<Props> = ({ componentId, builder }) => {
	const itemDetails = window.HFG_Layout_Builder[builder].items[componentId];

	const removeItem = () => {};
	const focusItemSection = () => {};

	const { name } = itemDetails;
	const iconSize = 18;

	return (
		<div className="builder-item">
			<Button icon={menu} iconSize={15} />
			<span className="name">{name}</span>
			<div className="actions">
				<Button
					icon={cog}
					iconSize={iconSize}
					onClick={removeItem}
					label={__('Remove Item', 'neve')}
				/>
				<Button
					iconSize={iconSize}
					icon={closeSmall}
					onClick={focusItemSection}
					label={__('Item Settings', 'neve')}
				/>
			</div>
		</div>
	);
};

export default BuilderItem;
