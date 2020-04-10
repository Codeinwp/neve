const {Dashicon} = wp.components;
const {useState} = wp.element;

import classnames from 'classnames';

const FeatureRow = ({item}) => {
	const {title, description, inLite} = item;
	const [ tooltip, toggleTooltip ] = useState(false);
	const [ forceToolTip, toggleForceTooltip ] = useState(false);

	return (
		<tr className="feature-row">
			<td className="large">
				<div className="feat-wrap">
					<h4>{title}</h4>
					<a
						onMouseEnter={(e) => {
							e.preventDefault();
							toggleTooltip(true);
						}}
						onMouseLeave={(e) => {
							e.preventDefault();
							toggleTooltip(false);
						}}
						onClick={(e) => {
							e.preventDefault();
							toggleForceTooltip(true);
						}}>
						<Dashicon icon="info"/>
						{(tooltip || forceToolTip) &&
						<div className="tooltip-content">
							<p>{description}</p>
						</div>
						}
					</a>
				</div>
			</td>
			<td className={classnames([ 'indicator', {'error': ! inLite, 'success': inLite} ])}>
				<Dashicon size={30} icon={inLite ? 'yes' : 'no-alt'}/>
			</td>
			<td className="indicator success">
				<Dashicon size={30} icon="yes"/>
			</td>
		</tr>
	);
};

export default FeatureRow;
