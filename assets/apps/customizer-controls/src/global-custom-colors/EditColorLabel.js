import { Button, TextControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { useState } from '@wordpress/element';

const EditColorLabel = ({ currentLabel, slug, save, cancel }) => {
	const [label, setLabel] = useState(currentLabel);

	return (
		<div className="custom-label-edit-wrapper">
			<TextControl onChange={setLabel} value={label} />
			<Button
				onClick={() => {
					save(slug, label);
				}}
				isSmall
				variant="primary"
			>
				{__('Save', 'neve')}
			</Button>
			<Button onClick={cancel} isSmall variant="secondary">
				{__('Cancel', 'neve')}
			</Button>
		</div>
	);
};

export default EditColorLabel;
