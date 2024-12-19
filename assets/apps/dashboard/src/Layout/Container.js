import cn from 'classnames';

export default ({ children, className }) => (
	<div
		className={cn([
			'max-w-[90vw] lg:container mx-auto px-2 lg:px-6',
			className,
		])}
	>
		{children}
	</div>
);
