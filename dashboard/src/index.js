import './style.scss';
import Header from './Components/Header';
import TabsContent from './Components/TabsContent';
import Notifications from './Components/Notifications';
import Sidebar from './Components/Sidebar';

const { registerStore } = wp.data;

import actions from './store/actions';
import reducer from './store/reducer';
import selectors from './store/selectors';

registerStore('neve-dashboard', {
	reducer,
	actions,
	selectors
});

const {render, useState, Fragment} = wp.element;

const App = () => {
  const [ currentTab, setTab ] = useState('start');

  return (
    <Fragment>
      <Header currentTab={currentTab} setTab={setTab}/>
      <div className="container content">
        <div className="main">
          <Notifications/>
          <TabsContent currentTab={currentTab} setTab={setTab}/>
        </div>
        <Sidebar currentTab={currentTab}/>
      </div>
    </Fragment>
  );
};

render(
  <App/>,
  document.getElementById('neve-dashboard')
);

