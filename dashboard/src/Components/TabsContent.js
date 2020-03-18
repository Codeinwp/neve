/* global neveDash */
import {tabs} from '../utils/common';

const {__} = wp.i18n;

const TabsContent = (props) => {
  const {currentTab} = props;
    return tabs[currentTab].render();
};

export default TabsContent;
