/* global neveDash */
import { __ } from '@wordpress/i18n';
import { Button } from '@wordpress/components';

const CustomLayoutsUnavailable = (props) => {
	const { setTab } = props;
	const { customLayoutsNeveProURL, assets } = neveDash;

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
				<Button variant="link" onClick={() => setTab('free-pro')}>
					{__('Free vs Pro', 'neve')}
				</Button>
			</div>
		</div>
	);
};

export default CustomLayoutsUnavailable;
