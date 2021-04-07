import { Dashicon } from '@wordpress/components';
import { useState, createInterpolateElement } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import classnames from 'classnames';
import { ExternalLinkIcon } from '../../../inc/admin/metabox/src/helpers/icons.js'

const SvgIconExternal = () => { return '<svg xmlns="http://www.w3.org/2000/svg" focusable="false" role="img" viewBox="0 0 512 512" width="12" height="12" style={{marginRight: \'5px\'}}><path fill="currentColor" d="M432 320H400a16 16 0 0 0-16 16V448H64V128H208a16 16 0 0 0 16-16V80a16 16 0 0 0-16-16H48A48 48 0 0 0 0 112V464a48 48 0 0 0 48 48H400a48 48 0 0 0 48-48V336A16 16 0 0 0 432 320ZM488 0h-128c-21.4 0-32 25.9-17 41l35.7 35.7L135 320.4a24 24 0 0 0 0 34L157.7 377a24 24 0 0 0 34 0L435.3 133.3 471 169c15 15 41 4.5 41-17V24A24 24 0 0 0 488 0Z"/></svg>' };
const FeatureRow = ({ item }) => {
	const { title, description, inLite, docsLink } = item;
	const [tooltip, toggleTooltip] = useState(false);

	const showTooltip = () => toggleTooltip(true);
	const hideTooltip = () => toggleTooltip(false);

	return (
		<tr className="feature-row">
			<td className="large">
				<div className="feat-wrap">
					<h4>{title}</h4>
					<span
						onMouseEnter={(e) => {
							e.preventDefault();
							showTooltip();
						}}
						onMouseLeave={(e) => {
							e.preventDefault();
							hideTooltip();
						}}
						onFocus={(e) => {
							e.preventDefault();
							showTooltip();
						}}
						onBlur={(e) => {
							e.preventDefault();
							hideTooltip();
						}}
					>
						<Dashicon icon="info" />
						{tooltip && (
							<div className="tooltip-content">
								<div className="tooltip-inner">
									<p>
										{description + ' '}
										{docsLink &&
											createInterpolateElement(
												__(
													'More details <a><span></span>here<svg_icon/></a>.',
													'neve'
												),
												{
													span: (
														<span className="screen-reader-text">{ __( '(opens in a new tab)', 'neve') }</span>
													),
													a: (
														<a href={docsLink} target="_blank">
															#dumptext
														</a>
													),
													svg_icon: (
														<ExternalLinkIcon margin="left"/>
													),
												}
											)}
									</p>
								</div>
							</div>
						)}
					</span>
				</div>
			</td>
			<td
				className={classnames([
					'indicator',
					{
						error: !inLite,
						success: inLite,
					},
				])}
			>
				<Dashicon size={30} icon={inLite ? 'yes' : 'no-alt'} />
			</td>
			<td className="indicator success">
				<Dashicon size={30} icon="yes" />
			</td>
		</tr>
	);
};

export default FeatureRow;
