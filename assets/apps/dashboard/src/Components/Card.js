import classnames from 'classnames';

import { Icon } from '@wordpress/components';

const Card = (props) => {
	const {
		icon,
		iconAlt,
		title,
		description,
		children,
		classNames,
		dashicon,
		lockIcon,
	} = props;
	return (
		<div className={classnames(['card', classNames])}>
			{lockIcon && <Icon className="icon dashicon" icon="lock" />}
			<div className="card-header">
				{icon &&
					(dashicon ? (
						<Icon className="icon dashicon" icon={icon} />
					) : (
						<img
							className="icon"
							src={icon}
							alt={iconAlt || 'icon'}
						/>
					))}
				{title && <h3 className="title">{title}</h3>}
			</div>
			<div className="card-content">
				{description && (
					<p className="card-description">{description}</p>
				)}
				{children}
			</div>
		</div>
	);
};

export default Card;
