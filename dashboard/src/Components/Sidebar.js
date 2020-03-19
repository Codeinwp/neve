/* global neveDash */
import {send} from '../utils/rest';

const {__} = wp.i18n;
const {ToggleControl} = wp.components;
const {useState} = wp.element;

const Sidebar = () => {
  const [ tracking, setTracking ] = useState(neveDash.options.logger || false);
  return (
    <aside className="sidebar card">
      <div className="sidebar-section">
        <h4>{__('Neve Community', 'neve')}</h4>
        {/* eslint-disable-next-line max-len */}
        <p>{__('Join the community of Neve users. Get connected, share opinions, ask questions and help each other!')}</p>
        <a href="https://www.facebook.com/groups/648646435537266/">
          {__('Join our Facebook Group', 'neve')}
        </a>
      </div>
      <hr/>
      <div className="sidebar-section">
        <h4>{__('Leave us a review', 'neve')}</h4>
        <p>{__('Are you are enjoying Neve? We would love to hear your feedback.', 'neve')}</p>
        <a href="https://www.facebook.com/groups/648646435537266/">
          {__('Join our Facebook Group', 'neve')}
        </a>
      </div>
      <hr/>
      <div className="sidebar-section">
        <h4>{__('Contributing', 'neve')}</h4>
        {/* eslint-disable-next-line max-len */}
        <p>{__('Become a contributor by opting in to our anonymous data tracking. We guarantee no sensitive data is collected.', 'neve')}
          &nbsp;<a href="https://docs.themeisle.com/article/1122-neve-usage-tracking">
            {__('What do we track?', 'neve')}
          </a>
        </p>
        <ToggleControl
          checked={tracking}
          label={__('Allow Anonymous Tracking', 'neve')}
          onChange={(value) => {
            setTracking(value);
            send('toggle_tracking', {value}).then((x) => {
              console.log(x);
            });
          }}
        />
      </div>

    </aside>
  );
};

export default Sidebar;
