import { Transition } from '@headlessui/react';

export default ({ children, show }) => {
	const className = `transition
		 data-[closed]:transform data-[closed]:-translate-y-2 data-[closed]:opacity-0
		 data-[open]:transform data-[open]:translate-y-0 data-[open]:opacity-100
		 duration-300 ease-in-out`;

	return (
		<Transition show={show}>
			<div className={className}>{children}</div>
		</Transition>
	);
};
