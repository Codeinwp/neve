const {Button} = wp.components;
const {__} = wp.i18n;

const StarterSiteCard = ({slug, data, upsell}) => {
	return (
		<div className="card starter-site-card">
			<div className="top">
				<div className="fav">
					<Button icon="star"/>
				</div>
				<div className="actions">
					<Button>{__('Preview', 'neve')}</Button>
					<Button>{__('Import', 'neve')}</Button>
				</div>
				{data.screenshot &&
				<div className="image">
					<img src={data.screenshot} alt={data.title}/>
				</div>
				}
			</div>
			<div className="bottom">
				<p className="title">{data.title}</p>
				{upsell && <span className="pro-badge">{__('Pro', 'neve')}</span>}
			</div>
		</div>
	);
};
export default StarterSiteCard;
