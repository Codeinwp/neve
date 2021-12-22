/* global neveDash */
import classnames from 'classnames';

import { changeOption } from '../utils/rest';

import { useState } from '@wordpress/element';
import { Dashicon } from '@wordpress/components';

const Accordion = (props) => {
	const { isOpen, title, slug, children } = props;
	const { seen } = neveDash.modules[slug];
	const [open, setOpen] = useState(seen ? false : isOpen);
	const classes = classnames(['accordion', { open, closed: !open }]);
	return (
		<div className={classes}>
			<button
				aria-expanded={open}
				className="accordion-header"
				onClick={() => {
					if (open && seen !== undefined && !seen) {
						changeOption(slug, true, false, true, true).then();
					}
					setOpen(!open);
				}}
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
