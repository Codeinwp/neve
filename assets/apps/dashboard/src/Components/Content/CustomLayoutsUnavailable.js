/* global neveDash */
import { __ } from '@wordpress/i18n';
import { Button } from '@wordpress/components';
import { compose } from '@wordpress/compose';
import { withSelect } from '@wordpress/data';
import { useEffect } from '@wordpress/element';

const CustomLayoutsUnavailable = ({ license, setTab }) => {
	const { customLayoutsNeveProURL, assets } = neveDash;

	const hasPro = neveDash.pro || neveDash.hasOldPro;
	const secondButtonMessage = hasPro
		? __('Activate', 'neve')
		: __('Free vs Pro', 'neve');
	const navigateToFreeVsPro = () => {
		setTab('free-pro');
	};

	const navigateToProActivate = () => {
		setTab('pro');
	};

	useEffect(() => {
		if (license && 'valid' === license.valid) {
			setTab('pro');
			window.location.href = 'edit.php?post_type=neve_custom_layouts';
		}
	}, [license]);

	return (
		<div className="unavailable-custom-layouts">
			<div
				className="ss-background"
				style={{ backgroundImage: `url(${assets}/starter.jpg)` }}
			/>
			<div className="content-wrap">
				<img src={`${assets}/logo.svg`} alt="Neve" />
				<h1>{__('Custom Layouts', 'neve')}</h1>
				<p>
					{__(
						'Get access to all Pro features and power-up your website',
						'neve'
					)}
				</p>
				<iframe
					width="560"
					height="315"
					src="https://www.youtube.com/embed/4XFoSHTHpes"
					title="YouTube video player"
					frameBorder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					allowFullScreen
				></iframe>
				<Button
					target="_blank"
					rel="external noreferrer noopener"
					href={customLayoutsNeveProURL}
					variant="primary"
				>
					{__('Get Neve Pro Now', 'neve')}
					<span className="components-visually-hidden">
						{__('(opens in a new tab)', 'neve')}
					</span>
				</Button>
				<Button
					variant="link"
					onClick={
						hasPro ? navigateToProActivate : navigateToFreeVsPro
					}
				>
					{secondButtonMessage}
				</Button>
			</div>
		</div>
	);
};

export default compose(
	withSelect((select) => {
		const { getLicense } = select('neve-dashboard');
		return {
			license: getLicense(),
		};
	})
)(CustomLayoutsUnavailable);
