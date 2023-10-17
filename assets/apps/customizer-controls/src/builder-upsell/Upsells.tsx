import React from 'react';
import { __ } from '@wordpress/i18n';
import { Button } from '@wordpress/components';
import { WPCustomizeControl } from '../@types/customizer-control';

type Props = {
	control: WPCustomizeControl;
};

const Upsells: React.FC<Props> = ({ control }) => {
	const { params } = control;
	const { title, url } = params;

	if ( window?.NeveReactCustomize?.deal?.active ) {
		return (
			<div className="upsell-inner">
				<a
					href={window?.NeveReactCustomize?.deal?.linkCustomizer}
					target="_blank"
					rel="external noreferrer noopener"
					style={{ width: '100%', lineHeight: '0' }}
				>
					<img
						src={window?.NeveReactCustomize?.deal?.customizerBannerUrl}
						alt={'Black Friday deal for Neve!'}
						style={{ width: '100%' }}
					/>
				</a>
			</div>
		)
	}

	return (
		<div className="upsell-inner">
			{title && (
				<div className="neve-customizer-heading">
					<span className="accordion-heading">{params.title}</span>
					{url && (
						<Button
							target="_blank"
							rel="external noreferrer noopener"
							href={url}
							isPrimary
						>
							{__('Learn More', 'neve')}
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

export default Upsells;
