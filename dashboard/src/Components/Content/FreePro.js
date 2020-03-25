/* global neveDash */
import FeatureRow from '../FeatureRow';

const {__} = wp.i18n;
const {Button} = wp.components;

const Pro = (props) => {
	const {featureData} = neveDash;
	return (
		<div className="col">
			<div className="card table">
				<div className="table-header">
					<div className="large"/>
					<div className="indicator">{__('Neve', 'neve')}</div>
					<div className="indicator">{__('Neve Pro', 'neve')}</div>
				</div>
				<div className="table-body">
					{featureData.map((item) => <FeatureRow item={item}/>)}
				</div>

			</div>
			<div className="upsell">
				<p>{__('Get access to all Pro features and power-up your website', 'neve')}</p>
				<Button isPrimary>{__('Get Neve Pro Now', 'neve')}</Button>
			</div>
		</div>
	);
};

export default Pro;
