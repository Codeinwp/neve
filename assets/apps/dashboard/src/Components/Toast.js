import classnames from 'classnames';

import { useEffect } from '@wordpress/element';
import { Dashicon } from '@wordpress/components';

const Toast = ({ message, dismiss, time, type = 'info' }) => {
	useEffect(() => {
		const timeout = setTimeout(() => {
			dismiss('');
			clearTimeout(timeout);
		}, time || 2000);
	});
	const iconMap = {
		info: 'info',
		error: 'no',
		success: 'yes',
		warning: 'warning',
	};
	const classes = classnames([
		'toast',
		'components-animate__appear',
		'is-from-middle',
		type,
	]);
	return (
		<div className={classes}>
			<Dashicon icon={iconMap[type]} />
			<span>{message}</span>
		</div>
	);
};

export default Toast;
