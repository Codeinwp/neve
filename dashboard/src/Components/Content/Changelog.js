/* global neveDash */
import Accordion from '../Accordion';
import classnames from 'classnames';

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
					className={classnames([ {'active': ! showForPro } ])}
					onClick={() => {
						setShowForPro(false);
					}}>Neve</a>
				<a
					className={classnames([ {'active': showForPro } ])}
					onClick={() => {
						setShowForPro(true);
					}}>Neve Pro</a>
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
						<Accordion key={index} isOpen={0 === index} title={title}>
							{features &&
							<div className="features changelog-category">
								<div className="label-wrap">
									<span className="label success">{__('Features', 'neve')}</span>
								</div>
								<ul className="entries">
									{features.map((feature, index) => <li key={index} dangerouslySetInnerHTML={{__html: feature}}/>)}
								</ul>
							</div>
							}
							{fixes &&
							<div className="bugs changelog-category">
								<div className="label-wrap">
									<span className="label error">{__('Bug Fixes', 'neve')}</span>
								</div>
								<ul className="entries">
									{fixes.map((fix, index) => <li key={index} dangerouslySetInnerHTML={{__html: fix}}/>)}
								</ul>
							</div>
							}
							{tweaks &&
							<div className="tweaks changelog-category">
								<div className="label-wrap">
									<span className="label info">{__('Tweaks', 'neve')}</span>
								</div>
								<ul className="entries">
									{tweaks.map((tweak, index) => <li key={index} dangerouslySetInnerHTML={{__html: tweak}}/>)}
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
