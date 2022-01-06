import React from 'react';
import { __ } from '@wordpress/i18n';
import { Button } from '@wordpress/components';
import { WPCustomizeControl } from '../@types/customizer-control';

type Props = {
	control: WPCustomizeControl;
};

const Documentation: React.FC<Props> = ({ control }) => {
	const { params } = control;
	const { title, url } = params;

	return (
		<div className="documentation-inner">
			{title && (
				<div className="neve-customizer-heading">
					<span className="accordion-heading">{params.title}</span>
					{url && (
						<Button
							target="_blank"
							rel="external noreferrer noopener"
							href={url}
							isSecondary
						>
							{__('Documentation', 'neve')}
							<span className="components-visually-hidden">
								{__('(opens in a new tab)', 'neve')}
							</span>
						</Button>
					)}
				</div>
			)}
		</div>
	);
};

export default Documentation;
