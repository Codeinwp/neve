/* global neveDash */

const Deal = () => {
	if (!Boolean(window.neveDash?.deal?.active)) {
		return <></>;
	}

	return (
		<div className="nv-deal">
			<a href={neveDash?.deal?.linkDashboard} target="_blank" rel="external noreferrer noopener">
				<img
					src={neveDash?.deal?.bannerUrl}
					alt={neveDash?.deal?.bannerAlt}
				/>
				<div className="nv-urgency">{neveDash?.deal?.urgencyText}</div>
			</a>
		</div>
	);
};

export default Deal;
