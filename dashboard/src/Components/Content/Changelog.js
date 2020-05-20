/* global neveDash */
import Accordion from '../Accordion';

const {__} = wp.i18n;
const {Fragment, useState} = wp.element;

const Changelog = (props) => {
	const {changelog, changelogPro} = neveDash;
	const [ showForPro, setShowForPro ] = useState(false);

	return (
		<div className="card">
			{changelogPro &&
			<div className="changelog-tabs">
				<span>{__('Show changelog for', 'neve')}</span>
				<a
					className={! showForPro && 'active'}
					onClick={() => {
						setShowForPro(false);
					}}>{__('Neve', 'neve')}</a>
				<a
					className={showForPro && 'active'}
					onClick={() => {
						setShowForPro(true);
					}}>{__('Neve Pro', 'neve')}</a>
			</div>
			}
			{
				(showForPro ? changelogPro : changelog).map((entry, index) => {
					const {date, version, tweaks, fixes, features} = entry;
					if (! tweaks && ! fixes && ! features) {
						return null;
					}
					const title =
						<Fragment>
							<span className="version">v{version}</span> - <span className="date">{date}</span>
						</Fragment>;

					return (
						<Accordion isOpen={0 === index} title={title}>
							{features &&
							<div className="features changelog-category">
								<div className="label-wrap">
									<span className="label success">{__('Features', 'neve')}</span>
								</div>
								<ul className="entries">
									{features.map((feature) => <li dangerouslySetInnerHTML={{__html: feature}}/>)}
								</ul>
							</div>
							}
							{fixes &&
							<div className="bugs changelog-category">
								<div className="label-wrap">
									<span className="label error">{__('Bug Fixes', 'neve')}</span>
								</div>
								<ul className="entries">
									{fixes.map((fix) => <li dangerouslySetInnerHTML={{__html: fix}}/>)}
								</ul>
							</div>
							}
							{tweaks &&
							<div className="tweaks changelog-category">
								<div className="label-wrap">
									<span className="label info">{__('Tweaks', 'neve')}</span>
								</div>
								<ul className="entries">
									{tweaks.map((tweak) => <li dangerouslySetInnerHTML={{__html: tweak}}/>)}
								</ul>
							</div>
							}
						</Accordion>
					);
				})
			}
		</div>
	);
};

export default Changelog;
