import { Dashicon } from '@wordpress/components';
import { useState, createInterpolateElement } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import classnames from 'classnames';

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
													'More details <a>here</a>.',
													'neve'
												),
												{
													a: (
														<a href={docsLink}>
															#dumptext
														</a>
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
