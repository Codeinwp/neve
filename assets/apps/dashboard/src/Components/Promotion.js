import promotions from './Content/PromotionsContent';

const Promotion = ({ data, slug }) => {
	if (!promotions[slug]) {
		return;
	}

	if (slug === 'bf22') {
		const { url, timeLeft } = data;
		const css = `
			.bf22 .promotion-link {
				line-height: 0,
				display: block,
				margin-bottom: 20px,
				border-radius: 8px,
				position: relative,
			}
			.bf22 img {
				max-width: 100%
			}
			.bf22 .promotion-content{
				position: absolute;
				right: 9px;
				background-color: #1F2733;
				color: #fff;
				top: 9px;
				padding: 10px;
				font-weight: bold,
				font-size: 0.85em,
				border-radius: 6px,
				margin: 0,
			}
		`;
		return (
			<div className={slug}>
				<style>{css}</style>
				<a
					className="promotion-link"
					href={url}
					target="_blank"
					rel="external noreferrer noopener"
				>
					<img alt={slug} src={promotions[slug]} />
					<p className="promotion-content">
						HURRY UP!{' '}
						<span style={{ color: '#FFCB7C' }}>{timeLeft}</span> LEFT
					</p>
				</a>
			</div>
		);
	}
};

export default Promotion;
