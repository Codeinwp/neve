/* global neveDash */
import { __ } from '@wordpress/i18n';
import InstallActivate from '../Plugin/InstallActivate';

const StarterSitesUnavailable = () => {
	const { assets } = neveDash;

	return (
		<div className="unavailable-starter-sites">
			<div
				className="ss-background"
				style={{ backgroundImage: `url(${assets}/starter.jpg)` }}
			/>
			<div className="content-wrap">
				<InstallActivate />
			</div>
		</div>
	);
};

export default StarterSitesUnavailable;