import cn from 'classnames';

export default ({
	icon,
	title,
	children,
	afterTitle,
	className = '',
	id = null,
	flat = false,
}) => {
	// `flat` keeps the header styling but drops the box, for cards nested inside another one.
	const classes = cn(
		[
			{
				'p-6 rounded-lg shadow-sm': !flat,
				'bg-white': !flat && !className.includes('bg-'),
			},
		],
		className
	);

	return (
		<div className={classes} id={id}>
			{(icon || title) && (
				<div className="flex items-center mb-6 gap-3">
					{icon && (
						<span className="size-5 text-blue-600 shrink-0">
							{icon}
						</span>
					)}
					{title && (
						<h2 className="text-base font-semibold text-black">
							{title}
						</h2>
					)}
					{afterTitle && (
						<div className="ml-auto shrink-0">{afterTitle}</div>
					)}
				</div>
			)}
			{children}
		</div>
	);
};
