import React from 'react';
import { __ } from '@wordpress/i18n';
import { Button } from '@wordpress/components';
import { WPCustomizeControl } from '../@types/customizer-control';

type Props = {
	control: WPCustomizeControl;
};

const Upsells: React.FC<Props> = ({ control }) => {
	const { params } = control;
	const { title, url, cta } = params;

	if (
		window?.NeveReactCustomize?.blackFriday?.saleUrl &&
		window?.NeveReactCustomize?.blackFriday?.bannerSrc
	) {
		return (
			<div className="upsell-inner">
				<a
					href={window?.NeveReactCustomize?.blackFriday?.saleUrl}
					target="_blank"
					rel="external noreferrer noopener"
					style={{ width: '100%', lineHeight: '0' }}
				>
					<img
						src={window?.NeveReactCustomize?.blackFriday?.bannerSrc}
						style={{ width: '100%' }}
						alt={window?.NeveReactCustomize?.blackFriday?.message}
					/>
				</a>
			</div>
		);
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
							{cta || __('Learn More', 'neve')}
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
