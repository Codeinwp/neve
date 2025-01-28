import cn from 'classnames';

import { useEffect, useState } from '@wordpress/element';
import {
	LucideCircleAlert,
	LucideCircleCheck,
	LucideCircleX,
	LucideInfo,
} from 'lucide-react';
import TransitionInOut from './TransitionInOut';

const Toast = ({ message, dismiss, time, type = 'info', className }) => {
	const [show, setShow] = useState(false);

	useEffect(() => {
		setShow(true);

		const timeBeforeHide = time || 2000;
		const timeBeforeDismiss = timeBeforeHide + 1000;

		const hideTimeout = setTimeout(() => {
			setShow(false);
		}, timeBeforeHide);

		const dismissTimeout = setTimeout(() => {
			if (dismiss) dismiss('');
		}, timeBeforeDismiss);

		return () => {
			clearTimeout(hideTimeout);
			clearTimeout(dismissTimeout);
		};
	}, []);

	const iconMap = {
		info: LucideInfo,
		error: LucideCircleX,
		success: LucideCircleCheck,
		warning: LucideCircleAlert,
	};

	const classes = cn(
		'px-2 py-1.5 flex items-center text-sm border rounded gap-2',
		{
			'bg-sky-50 text-sky-800': type === 'info',
			'bg-red-50 text-red-800': type === 'error',
			'bg-lime-50 text-lime-800': type === 'success',
			'bg-orange-50 text-orange-800': type === 'warning',
		},
		className
	);

	const ICON = iconMap[type];

	return (
		<TransitionInOut show={show}>
			<div className={classes}>
				<ICON size={20} />
				<span>{message}</span>
			</div>
		</TransitionInOut>
	);
};

export default Toast;
