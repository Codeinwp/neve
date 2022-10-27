/* global neveDash */
import Promotion from './Promotion';
const Promotions = () => {
	if (!neveDash.promotions) {
		return null;
	}
	if (1 > neveDash.promotions.length) {
		return null;
	}

	return (
		<div className="promotions">
			{Object.keys(neveDash.promotions).map((slug, index) => {
				return (
					<Promotion
						key={index}
						data={neveDash.promotions[slug]}
						slug={slug}
					/>
				);
			})}
		</div>
	);
};

export default Promotions;
