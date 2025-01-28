import { Transition } from '@headlessui/react';
import cn from 'classnames';

export default ({ children, from = 'bottom', className }) => {
	const directionClasses = {
		left: {
			enterFrom: '-translate-x-2',
			enterTo: 'translate-x-0',
		},
		right: {
			enterFrom: 'translate-x-2',
			enterTo: 'translate-x-0',
		},
		top: {
			enterFrom: '-translate-y-2',
			enterTo: 'translate-y-0',
		},
		bottom: {
			enterFrom: 'translate-y-2',
			enterTo: 'translate-y-0',
		},
	};

	const animationData = directionClasses[from] || directionClasses.bottom;

	const transitionClasses = {
		enter: 'ease-out duration-150',
		enterFrom: `opacity-0 ${animationData.enterFrom}`,
		enterTo: `opacity-100 ${animationData.enterTo}`,
	};

	return (
		<Transition
			as="div"
			show
			appear
			className={cn('transition', className)}
			{...transitionClasses}
		>
			{children}
		</Transition>
	);
};
