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
        Object.keys( neveDash.plugins ).map( (slug) => {
          return <PluginCard key={slug} slug={slug} data={neveDash.plugins[slug]}/>;
        } )
      }
    </Fragment>
  );
};

export default Header;
