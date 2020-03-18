/* global neveDash */
import {addUrlHash, tabs} from '../utils/common';

const {__} = wp.i18n;

const Header = (props) => {
  return (
    <header>
      <div className="container">
        {renderHead()}
        {renderNavigation(props)}
      </div>
    </header>
  );
};

const renderHead = () => {
  return (
    <div className="top">
      <h1 className="heading">{neveDash.strings.header}</h1>
      <span className="version">{neveDash.version}</span>
      <img src={neveDash.assets + '/logo.svg'} alt={__('Neve Theme Logo', 'neve')}/>
    </div>
  );
};

const renderNavigation = (props) => {
  const {currentTab, setTab} = props;
  return (
    <nav className="navigation">
      {Object.keys(tabs).map((item) => {
        return (
          <li><a
            className={currentTab === item ? 'active' : ''}
            onClick={(e) => {
              e.preventDefault();
              setTab(item);
              addUrlHash(item);
            }}
          >{tabs[item].label}
          </a></li>
        );
      })}
    </nav>
  );
};

export default Header;
