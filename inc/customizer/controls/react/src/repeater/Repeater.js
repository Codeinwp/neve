import { Icon } from '@wordpress/components';
import classnames from 'classnames';
import { useState } from '@wordpress/element';

const Repeater = ({ title }) => {
	const [isVisible, setVisibility] = useState(true);
	const [isToggle, toggle] = useState(false);

	return (
		<div className="nv-repeater--item">
			<div className="nv-repeater--header">
				<span
					className={classnames(['nv-repeater--toggle', 'has-value'])}
				>
					<Icon
						size={18}
						icon={isVisible ? 'visibility' : 'hidden'}
					/>
				</span>
				<div className="nv-repeater--item-title">
					<span className="nv-repeater--title-text">{title}</span>
					<span
						className={classnames([
							'dashicons',
							{ 'opened dashicons-arrow-up': !isToggle },
							{ 'closed dashicons-arrow-down': isToggle },
						])}
					/>
				</div>
			</div>
		</div>
	);
};

export default Repeater;
