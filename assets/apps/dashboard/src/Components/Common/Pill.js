import cn from 'classnames';

export default ({ children, type = 'primary', className }) => {
	if (!children) {
		return null;
	}

	const typeClasses = {
		primary: 'bg-blue-100 text-blue-700',
		secondary: 'bg-gray-100 text-gray-700',
		success: 'bg-green-100 text-green-700',
		error: 'bg-red-100 text-red-700',
		warning: 'bg-yellow-100 text-yellow-700',
	};

	const classes = cn([
		typeClasses[type],
		'px-1.5 py-0.5 text-sm font-medium rounded leading-none uppercase',
		className,
	]);

	return <span className={classes}>{children}</span>;
};
