/* global neveDash */
import FeatureRow from '../FeatureRow';

import { __ } from '@wordpress/i18n';
import { Button } from '@wordpress/components';

const Pro = () => {
	const { featureData } = neveDash;
	return (
		<div className="col">
			<table className="card table">
				<tbody className="table-body">
					<tr className="table-head">
						<th className="large" />
						<th className="indicator">Neve</th>
						<th className="indicator">Neve Pro</th>
					</tr>
					{featureData.map((item, index) => (
						<FeatureRow key={index} item={item} />
					))}
				</tbody>
			</table>

			<div className="card upsell">
				<p>
					{__(
						'Get access to all Pro features and power-up your website',
						'neve'
					)}
				</p>
				<Button
					target="_blank"
					rel="external noreferrer noopener"
					href={neveDash.upgradeURL}
					isPrimary
				>
					{__('Get Neve Pro Now', 'neve')}
					<span className="components-visually-hidden">
						{__('(opens in a new tab)', 'neve')}
					</span>
				</Button>
			</div>
		</div>
	);
};

export default Pro;
