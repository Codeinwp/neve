const Deal = () => {

	if ( ! Boolean(window.neveDash?.deal?.active)) {
		return <></>;
	}

	return (
		<div className="nv-deal">
			<a href={neveDash?.deal?.linkDashboard}>
				<img src={neveDash?.deal?.bannerUrl} alt="Neve Promotion" />
				<div className="nv-urgency">{neveDash?.deal?.urgencyText}</div>
			</a>
		</div>
	)
}

export default Deal;
