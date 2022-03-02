import { Dashicon, Icon, Tooltip } from "@wordpress/components";

const NotificationIcon = ({text}) => {
    return  <div class="notification-icon">
        <Tooltip text={text}>
            <span>
                <Dashicon icon="info" size={24} />
            </span>
        </Tooltip>
    </div>
};

export default NotificationIcon;