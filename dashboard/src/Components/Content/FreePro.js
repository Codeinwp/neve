/* global neveDash */
import FeatureRow from '../FeatureRow';

const {__} = wp.i18n;
const {Button} = wp.components;

const Pro = (props) => {
	const {featureData} = neveDash;
	return (
		<div className="col">
			<table className="card table">
				<tbody className="table-body">
				<tr className="table-head">
					<th className="large"/>
					<th className="indicator">{__('Neve', 'neve')}</th>
					<th className="indicator">{__('Neve Pro', 'neve')}</th>
				</tr>
				{featureData.map((item) => <FeatureRow item={item}/>)}
				</tbody>
			</table>

			<div className="card upsell">
				<p>{__('Get access to all Pro features and power-up your website', 'neve')}</p>
				<Button
					href={neveDash.upgradeURL}
					isPrimary>
					{__('Get Neve Pro Now', 'neve')}
				</Button>
			</div>
		</div>
	);
};

export default Pro;
