import getPromotionContent from './Content/PromotionsContent';

const Promotion = ({ data, slug }) => {
	const { url, timeLeft, suffix } = data;
	return <a href={url}>{getPromotionContent(slug, timeLeft, suffix)}</a>;
};

export default Promotion;
