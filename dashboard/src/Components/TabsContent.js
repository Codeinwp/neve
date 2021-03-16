import { tabs } from '../utils/common';
import classnames from 'classnames';

const TabsContent = ({ currentTab, setTab }) => {
	const classes = classnames(['tab-content', 'columns', currentTab]);
	return <div className={classes}>{tabs[currentTab].render(setTab)}</div>;
};

export default TabsContent;
