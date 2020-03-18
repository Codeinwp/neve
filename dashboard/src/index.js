import './style.scss';
import Header from './Components/Header';
import TabsContent from './Components/TabsContent';
import Notifications from './Components/Notifications';
import Sidebar from './Components/Sidebar';

const {render, useState, Fragment} = wp.element;

const App = () => {
  const [ currentTab, setTab ] = useState( 'start' );

  return (
    <Fragment>
      <Header currentTab={currentTab} setTab={setTab}/>
      <div className="container content">
        <div className="main">
          <Notifications/>
          <TabsContent currentTab={currentTab}/>
        </div>
        <Sidebar/>
      </div>
    </Fragment>
  );
};

render(
  <App />,
  document.getElementById( 'neve-dashboard' )
);
