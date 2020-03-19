import './style.scss';
import Header from './Components/Header';
import TabsContent from './Components/TabsContent';
import Notifications from './Components/Notifications';
import Sidebar from './Components/Sidebar';
import {getTabHash} from './utils/common';

const {render, useState, useEffect, Fragment} = wp.element;

const App = () => {
  const [ currentTab, setTab ] = useState('start');

  useEffect(() => {
    document.addEventListener('DOMContentLoaded', () => {
      const hash = getTabHash();
      if (null !== hash) {
        setTab(hash);
      }
    });
  });

  return (
    <Fragment>
      <Header currentTab={currentTab} setTab={setTab}/>
      <div className="container content">
        <div className="main">
          <Notifications/>
          <TabsContent currentTab={currentTab} setTab={setTab}/>
        </div>
        <Sidebar/>
      </div>
    </Fragment>
  );
};

render(
  <App/>,
  document.getElementById('neve-dashboard')
);

