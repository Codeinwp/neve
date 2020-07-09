/* global neveDash */
import { get } from '../../utils/rest';

const { __ } = wp.i18n;
const { useState } = wp.element;
const { Button } = wp.components;

const StarterSitesUnavailable = () => {
  const { plugins, assets } = neveDash;
  const [ installing, setInstalling ] = useState(false);
  const [ error, setError ] = useState(false);

  const installPlugin = () => {
    setInstalling(true);
    wp.updates.ajax('install-plugin', {
      slug: 'themeisle-companion',
      success: r => {
        if (! r.success) {
          setError(__('Something went wrong while installing the plugin.'));
          return false;
        }
        activatePlugin();
      },
      error: e => {
        if ('folder_exists' === e.errorCode) {
          activatePlugin();
          return false;
        }
        setError(__('Something went wrong while installing the plugin.'));
      }
    });
  };

  const activatePlugin = () => {
    const activationURL = plugins['themeisle-companion'].activate;

    get(activationURL, true).then(r => {
      if ( r.ok ) {
          window.location.reload();
      }
    });
  };

  return (
    <>
      <div className="ss-background"
           style={{ backgroundImage: `url(${assets}/starter.jpg)` }}/>
      <div className="content-wrap">
        { ! error ? <>
        <h1>You must install and activate OrbitFox in order to import the Starter Sites</h1>
        <br/>
        <Button disabled={installing} isPrimary={! installing} isSecondary={installing}
                onClick={installPlugin}>{installing ? __('Installing and activating') + '...' : __('Install and Activate')}</Button>
        </> :
          <h1 className='error'>{__('Something went wrong while installing the necessary plugins.', 'neve')}</h1>
        }
      </div>
    </>
  );
};

export default StarterSitesUnavailable;
