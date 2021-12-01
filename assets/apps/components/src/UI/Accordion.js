import classnames from 'classnames';
import { useState } from '@wordpress/element';
import { Icon } from '@wordpress/components';
import { chevronUp, chevronDown } from '@wordpress/icons';

const Accordion = ({ children, label, initiallyExpanded = true }) => {
	const [expanded, setExpanded] = useState(initiallyExpanded);

	const toggle = (e) => {
		e.preventDefault();
		setExpanded(!expanded);
	};

	const classes = classnames(['nv-accordion', { expanded }]);
	return (
		<>
			<button className={classes} onClick={toggle}>
				<h4>
					{label}
					<Icon
						width={30}
						height={30}
						size={30}
						icon={expanded ? chevronUp : chevronDown}
					/>
				</h4>
			</button>
			{expanded && children}
		</>
	);
};

export default Accordion;
