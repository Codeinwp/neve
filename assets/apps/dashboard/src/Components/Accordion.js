import classnames from 'classnames';

import { useState } from '@wordpress/element';
import { Dashicon } from '@wordpress/components';

const Accordion = (props) => {
	const { isOpen, title, children } = props;
	const [open, setOpen] = useState(isOpen);
	const classes = classnames(['accordion', { open, closed: !open }]);
	return (
		<div className={classes}>
			<button
				aria-expanded={open}
				className="accordion-header"
				onClick={() => setOpen(!open)}
			>
				{title && <div className="accordion-title">{title}</div>}
				<Dashicon icon={open ? 'arrow-up-alt2' : 'arrow-down-alt2'} />
			</button>
			<div
				className="accordion-body"
				style={{ height: open ? 'auto' : '0px' }}
			>
				{children && children}
			</div>
		</div>
	);
};

export default Accordion;
