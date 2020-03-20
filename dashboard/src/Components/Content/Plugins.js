/* global neveDash */
import PluginCard from '../PluginCard';

const {Fragment} = wp.element;

const Header = () => {
  const {plugins} = neveDash;

  if ( ! plugins ) {
    return null;
  }

  return (
    <Fragment>
      {
        Object.keys( plugins ).map( (slug) => {
          return <PluginCard key={slug} slug={slug} data={plugins[slug]}/>;
        } )
      }
    </Fragment>
  );
};

export default Header;
