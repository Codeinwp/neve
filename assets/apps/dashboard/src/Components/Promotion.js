import getPromotionContent from './Content/PromotionsContent';

const Promotion = ({ data, slug }) => {
	const { url, timeLeft, suffix } = data;
	return (
		<a
			style={{
				lineHeight: 0,
				display: 'block',
				marginBottom: '20px',
				borderRadius: '8px',
			}}
			href={url}
			target="_blank"
			rel="external noreferrer noopener"
		>
			{getPromotionContent(slug, timeLeft, suffix)}
		</a>
	);
};

export default Promotion;
