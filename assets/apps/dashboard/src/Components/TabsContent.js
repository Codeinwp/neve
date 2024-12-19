import { tabs } from '../utils/common';

const TabsContent = ({ currentTab, setTab }) => {
	return tabs[currentTab].render(setTab);
};

export default TabsContent;
