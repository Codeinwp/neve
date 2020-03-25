const {Dashicon} = wp.components;
const {useState, useRef, useEffect} = wp.element;

import OnClickOutside from './Utils/OnClickOutside';
import classnames from 'classnames';

const FeatureRow = ({item}) => {
	const {title, description, inLite} = item;
	const [ tooltip, toggleTooltip ] = useState(false);

	return (
		<div className="feature-row">
			<div className="large">
				<h4>{title}</h4>
				<a onClick={(e) => {
					e.preventDefault();
					toggleTooltip(true);
				}}>
					<Dashicon icon="info"/>
				</a>
				{tooltip &&
				<OnClickOutside action={() => {
					if (! tooltip) {
						return false;
					}
					toggleTooltip(false);
				}}>
					<div className="tooltip-content"><p>{description}</p></div>
				</OnClickOutside>
				}
			</div>
			<span className={classnames([ 'indicator', {'error': ! inLite, 'success': inLite} ])}>
				<Dashicon icon={inLite ? 'yes' : 'no'}/>
			</span>
			<span className="indicator success">
				<Dashicon icon="yes"/>
			</span>
		</div>
	);
};

export default FeatureRow;
