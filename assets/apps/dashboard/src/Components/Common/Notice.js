import { useEffect } from '@wordpress/element';
import cn from 'classnames';
import {
	LucideCircleAlert,
	LucideCircleCheck,
	LucideCircleX,
	LucideInfo,
} from 'lucide-react';

const Notice = ({
	children,
	className = '',

	// Type variants
	isSuccess = false,
	isWarning = false,
	isError = false,

	// Optional custom icon
	icon: CustomIcon,
	isAutoDismiss: autoDismiss = 0,
	onDismiss = () => {},
}) => {
	useEffect(() => {
		if (autoDismiss < 1000) return;

		const dismissTimeout = setTimeout(() => {
			onDismiss();
		}, autoDismiss);

		return () => {
			clearTimeout(dismissTimeout);
		};
	}, [autoDismiss, onDismiss]);

	if (!children) return null;

	const getTypeClasses = () => {
		if (isSuccess) return 'border-lime-300 bg-lime-50 text-lime-800';
		if (isWarning) return 'border-orange-300 bg-orange-50 text-yellow-800';
		if (isError) return 'border-red-300 bg-red-50 text-red-800';
		return 'border-sky-300 bg-sky-50 text-sky-800';
	};

	const getIcon = () => {
		if (CustomIcon) return CustomIcon;
		if (isSuccess) return LucideCircleCheck;
		if (isWarning) return LucideCircleAlert;
		if (isError) return LucideCircleX;
		return LucideInfo;
	};

	const iconColor = {
		'text-lime-500': isSuccess,
		'text-orange-500': isWarning,
		'text-red-500': isError,
		'text-sky-500': !isSuccess && !isWarning && !isError,
	};

	const Icon = getIcon();

	return (
		<div
			className={cn(
				'flex gap-2 p-3 rounded border transition-all duration-500 items-center',
				getTypeClasses(),
				className
			)}
		>
			<Icon className={cn('size-4.5 shrink-0 mt-0.5', iconColor)} />

			<div className="flex-1 flex flex-col gap-1">
				{children && <div className="text-sm">{children}</div>}
			</div>
		</div>
	);
};

export default Notice;
