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
	} = props;

	const classNames = cn([
		'flex items-center px-3 py-2 transition-colors duration-150 text-sm border gap-2',
		{
			rounded: !className.includes('rounded'),
			'border-transparent bg-blue-600 text-white hover:bg-blue-700 hover:text-white':
				isPrimary,
			'border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white':
				isSecondary,
			'border-transparent text-gray-600 hover:text-gray-900': isLink,
			'cursor-not-allowed opacity-50': disabled,
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

	if (props.target) {
		passedProps.target = props.target;

		if (props.target === '_blank') {
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
