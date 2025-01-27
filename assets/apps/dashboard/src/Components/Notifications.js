/* global neveDash */
import Notification from './Common/Notification';
import Container from '../Layout/Container';
import TransitionWrapper from './Common/TransitionWrapper';

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
					<TransitionWrapper
						key={index}
						from="top"
						className="delay-200"
					>
						<Notification
							data={neveDash.notifications[slug]}
							slug={slug}
						/>
					</TransitionWrapper>
				);
			})}
		</Container>
	);
};

export default Notifications;
