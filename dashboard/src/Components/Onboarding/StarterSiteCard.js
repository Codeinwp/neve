const {Button} = wp.components;
const {withDispatch, withSelect} = wp.data;
const {compose} = wp.compose;

const StarterSiteCard = ({slug, data}) => {
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

			</div>
		</div>
	);
};
export default StarterSiteCard;
