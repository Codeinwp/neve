import React, {useState} from 'react';
import { __ } from '@wordpress/i18n';
import { Button, Icon } from '@wordpress/components';
import { WPCustomizeControl } from '../@types/customizer-control';

type Props = {
	control: WPCustomizeControl;
};

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
const BannerUpsell: React.FC<Props> = ({ control }) => {
	const { params } = control;
	const { title, text, buttonText, logoPath, useLogo, url, nonce, id } =
		params;

	const textContent = title || text;
	const buttonTextDisplay = buttonText || __('Learn More', 'neve');

	const [hide, setHide] = useState(false);

	if (hide) {
		return null;
	}

	return (
		<div className="upsell-inner">
			{textContent && (
				<div className="neve-customizer-heading">
					{useLogo && logoPath && (
						<img src={logoPath} alt="Logo" className="logo" />
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
							setHide(true);
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
