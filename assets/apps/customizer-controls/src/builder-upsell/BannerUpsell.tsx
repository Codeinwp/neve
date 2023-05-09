import React, { useState } from 'react';
import { __ } from '@wordpress/i18n';
import { Button, Icon } from '@wordpress/components';
import { WPCustomizeControl } from '../@types/customizer-control';
import { useEffect } from '@wordpress/element';

type Props = {
	control: WPCustomizeControl;
	useHideBannerState: () => {
		hide: boolean;
		setHide: (hide: boolean) => void;
	};
};

/**
 * Dismiss upsell via an ajax call..
 *
 * @param {string} id
 * @param {string} nonce
 */
const dismissUpsell = (id = '', nonce = '') => {
	const formData = new FormData();
	formData.append('action', 'neve_dismiss_customizer_upsell_notice');
	formData.append('nonce', nonce);
	formData.append('id', id);
	fetch('/wp-admin/admin-ajax.php', {
		method: 'POST',
		body: formData,
	}).then((resp) => resp.json());
};

const UpsellEventName = 'neve_upsell_banner_hide';

const BannerUpsell: React.FC<Props> = ({ control }) => {
	const { params } = control;
	const { title, text, buttonText, logoPath, useLogo, url, nonce, id } =
		params;

	const textContent = title || text;
	const buttonTextDisplay = buttonText || __('Learn More', 'neve');

	const [hide, setHide] = useState(false);

	/**
	 * Hide the upsell when the event is triggered.
	 * This is used to synchronize hide events between multiple instances of the component.
	 */
	useEffect(() => {
		const handleHide = (event: Event) => {
			if (!event || !(event instanceof Event)) {
				return;
			}
			if (event.type !== UpsellEventName) {
				return;
			}
			setHide(true);
		};
		document.addEventListener(UpsellEventName, handleHide);

		return () => {
			document.removeEventListener(UpsellEventName, handleHide);
		};
	}, []);

	if (hide) {
		return null;
	}

	return (
		<div className="upsell-inner">
			{textContent && (
				<div className="neve-customizer-heading">
					{useLogo && logoPath && (
						<img src={logoPath} alt="Neve" className="logo" />
					)}
					<span className="accordion-heading">{textContent}</span>
					{url && (
						<Button
							target="_blank"
							rel="external noreferrer noopener"
							href={url}
							isPrimary
						>
							{buttonTextDisplay}
							<span className="components-visually-hidden">
								{__('(opens in a new tab)', 'neve')}
							</span>
						</Button>
					)}
					<Button
						className="nv-dismiss-upsell"
						onClick={() => {
							dismissUpsell(id, nonce);
							document.dispatchEvent(new Event(UpsellEventName));
						}}
						style={{ padding: 3 }}
					>
						<Icon icon="no-alt" size={20} />
					</Button>
				</div>
			)}
		</div>
	);
};

export default BannerUpsell;
