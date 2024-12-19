/* global neveDash */
import Notification from './Common/Notification';
import Container from '../Layout/Container';

const Notifications = () => {
	if (!neveDash.notifications) {
		return null;
	}
	if (1 > neveDash.notifications.length) {
		return null;
	}

	return (
		<Container className="grid gap-3">
			{Object.keys(neveDash.notifications).map((slug, index) => {
				return (
					<Notification
						key={index}
						data={neveDash.notifications[slug]}
						slug={slug}
					/>
				);
			})}
		</Container>
	);
};

export default Notifications;
