/* global neveDash */
import { __, sprintf } from '@wordpress/i18n';
import { createInterpolateElement } from '@wordpress/element';

const Promotion = ({ data }) => {

	const { url, timeLeft } = data;
	const css = `
		.neve-bf-banner .promotion-link {
			line-height: 0;
			display: block;
			margin-bottom: 20px;
			border-radius: 8px;
			position: relative;
		}
		.neve-bf-banner img {
			max-width: 100%;
		}
		.neve-bf-banner .promotion-content{
			position: absolute;
			right: 9px;
			background-color: #1F2733;
			color: #fff;
			top: 9px;
			padding: 10px;
			font-weight: bold;
			font-size: 0.85em;
			border-radius: 6px;
			margin: 0;
			text-transform: uppercase;
		}
	`;

	const timeLeftText = createInterpolateElement(
		sprintf(
			// translators: %s: time left.
			__('Hurry up! <span>%s</span> left', 'neve'),
			timeLeft
		),
		{
			span: <span style={{ color: '#FFCB7C' }} />,
		}
	);
	return (
		<div className="neve-bf-banner">
			<style>{css}</style>
			<a
				className="promotion-link"
				href={url}
				target="_blank"
				rel="external noreferrer noopener"
			>
				<img
					src={neveDash.assets + 'bf22.svg'}
					alt={__('Black Friday deal for Neve!', 'neve')}
				/>
				<p className="promotion-content">{timeLeftText}</p>
			</a>
		</div>
	);
};

export default Promotion;
