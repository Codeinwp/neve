import { Dashicon, Tooltip } from '@wordpress/components';

const NotificationIcon = ({ text }) => {
	return (
		<div className="notification-icon">
			<Tooltip text={text}>
				<span>
					<Dashicon icon="info" size={24} />
				</span>
			</Tooltip>
		</div>
	);
};

export default NotificationIcon;
