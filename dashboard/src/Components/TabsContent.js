/* global neveDash */
import {tabs} from '../utils/common';
import classnames from 'classnames';

const {__} = wp.i18n;

const TabsContent = (props) => {
  const {currentTab, setTab} = props;

  const classes = classnames([ 'tab-content', 'columns', currentTab ]);
  return (
    <div className={classes}>
      {tabs[currentTab].render(setTab)}
    </div>
  );
};

export default TabsContent;
