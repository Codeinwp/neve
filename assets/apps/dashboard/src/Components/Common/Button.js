import cn from 'classnames';
import { LoaderCircle } from 'lucide-react';
import PropTypes from 'prop-types';

const Button = (props) => {
	const {
		href,
		onClick,
		className = '',
		isSubmit,
		isPrimary,
		isSecondary,
		isLink,
		children,
		disabled,
		loading,
		target,
	} = props;

	const classNames = cn([
		'flex items-center px-3 py-2 transition-colors duration-150 text-sm border gap-2',
		{
			rounded: !className.includes('rounded'),
			'border-transparent bg-blue-600 text-white': isPrimary,
			'border-blue-600 text-blue-600': isSecondary,
			'border-transparent text-gray-600': isLink,
			'cursor-not-allowed opacity-50': disabled,
			'hover:bg-blue-700 hover:text-white': !disabled && isPrimary,
			'hover:bg-blue-600 hover:text-white': !disabled && isSecondary,
			'hover:text-gray-900': !disabled && isLink,
		},
		className,
	]);

	const passedProps = {
		className: classNames,
		disabled,
		onClick,
	};

	if (isSubmit) {
		passedProps.type = 'submit';
	}

	if (href) {
		passedProps.href = href;
	}

	if (target) {
		passedProps.target = target;

		if (target === '_blank') {
			passedProps.rel = 'noopener noreferrer';
		}
	}

	const TAG = href && !onClick ? 'a' : 'button';

	return (
		<TAG {...passedProps}>
			{loading && <LoaderCircle size={18} className="animate-spin" />}

			{children}
		</TAG>
	);
};

Button.propTypes = {
	href: PropTypes.string,
	onClick: PropTypes.func,
	className: PropTypes.string,
	isSubmit: PropTypes.bool,
	isPrimary: PropTypes.bool,
	isSecondary: PropTypes.bool,
	isLink: PropTypes.bool,
	children: PropTypes.node,
	disabled: PropTypes.bool,
	target: PropTypes.oneOf(['_blank', '_self', '_parent', '_top']),
};

export default Button;
