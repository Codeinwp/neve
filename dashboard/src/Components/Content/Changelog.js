/* global neveDash */
import Accordion from '../Accordion';

const {__} = wp.i18n;
const {Fragment} = wp.element;

const Changelog = (props) => {
	const {changelog} = neveDash;

	return (
		<div className="card">
			{
				changelog.map((entry, index) => {
					const {date, version, tweaks, fixes, features} = entry;
					const title =
						<Fragment>
							{/* eslint-disable-next-line max-len */}
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
									{features.map((feature) => <li>{feature}</li>)}
								</ul>
							</div>
							}
							{fixes &&
							<div className="bugs changelog-category">
								<div className="label-wrap">
									<span className="label error">{__('Bug Fixes', 'neve')}</span>
								</div>
								<ul className="entries">
									{fixes.map((fix) => <li>{fix}</li>)}
								</ul>
							</div>
							}
							{tweaks &&
							<div className="tweaks changelog-category">
								<div className="label-wrap">
									<span className="label info">{__('Tweaks', 'neve')}</span>
								</div>
								<ul className="entries">
									{tweaks.map((tweak) => <li>{tweak}</li>)}
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
