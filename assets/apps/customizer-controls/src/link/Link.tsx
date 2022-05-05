import React from 'react';
import { WPCustomizeControl } from '../@types/customizer-control';

type Props = {
	control: WPCustomizeControl;
};

const Link: React.FC<Props> = ({ control }) => {
	const { label, url, description } = control.params;

	return (
		<div className="neve-white-background-control">
			{description && description !== '' && <p>{description}</p>}
			<a href={url}>{label}</a>
		</div>
	);
};

export default Link;
