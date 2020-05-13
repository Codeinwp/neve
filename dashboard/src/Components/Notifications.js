/* global neveDash */
import Notification from './Notification';

const Notifications = () => {
  if (! neveDash.notifications) {
    return null;
  }
  if (1 > neveDash.notifications.length) {
    return null;
  }

  return (
    <div className="notifications">
      {
        Object.keys(neveDash.notifications).map((slug) => {
          return (
            <Notification data={neveDash.notifications[slug]} slug={slug}/>
          );
        })
      }
    </div>
  );
};

export default Notifications;
