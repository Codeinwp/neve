import Notification from './Common/Notification';
import Container from '../Layout/Container';
import TransitionWrapper from './Common/TransitionWrapper';
import { useSelect } from '@wordpress/data';

const Notifications = () => {
	const notifications = useSelect((select) => {
		return select('neve-dashboard').getNotifications();
	});

	if (Object.keys(notifications).length < 1) {
		return null;
	}

	return (
		<Container className="grid gap-3">
			{Object.entries(notifications).map(([slug, data]) => (
				<TransitionWrapper key={slug} from="top" className="delay-300">
					<Notification slug={slug} data={data} />
				</TransitionWrapper>
			))}
		</Container>
	);
};

export default Notifications;
