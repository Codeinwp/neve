const {Button, Dashicon} = wp.components;
const {__} = wp.i18n;
const {withDispatch} = wp.data;

const StarterSiteCard = ({data, setSite, setPreview, setModal}) => {
	const {upsell} = data;
	return (
		<div className="card starter-site-card">
			<div className="top">
				{/*<div className="fav">
					<Button icon="star-filled"/>
				</div>*/}
				<div className="actions">
					<Button
						className="preview"
						onClick={(e) => {
							e.preventDefault();
							setSite(data);
							setPreview(true);
						}}
					>
						{__('Preview', 'neve')}
					</Button>
					{! upsell &&
					<Button
						className="import"
						onClick={(e) => {
							e.preventDefault();
							setSite(data);
							setModal(true);
						}}
					>
						{__('Import', 'neve')}
					</Button>
					}
				</div>
				{data.screenshot && <div className="image" style={{backgroundImage: `url("${data.screenshot}")`}}/>}
			</div>
			<div className="bottom">
				<p className="title">{data.title}</p>
				{upsell && <span className="pro-badge">
					<Dashicon icon="lock" size={15}/>
					<span>{__('Premium', 'neve')}</span>
				</span>}
			</div>
		</div>
	);
};

export default withDispatch((dispatch) => {
	const {setCurrentSite, setPreviewStatus, setImportModalStatus} = dispatch('neve-onboarding');
	return {
		setSite: (data) => setCurrentSite(data),
		setPreview: (status) => setPreviewStatus(status),
		setModal: (status) => setImportModalStatus(status)
	};
})
(StarterSiteCard);
