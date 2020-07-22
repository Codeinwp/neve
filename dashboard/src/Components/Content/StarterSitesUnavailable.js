/* global neveDash */
import { get } from '../../utils/rest';

const { __ } = wp.i18n;
const { useState } = wp.element;
const { Button } = wp.components;

const StarterSitesUnavailable = () => {
  const { plugins, assets, hasNeededCompanionVersion, pluginsPageUrl } = neveDash;
  const [ installing, setInstalling ] = useState(false);
  const [ error, setError ] = useState(false);

  const installPlugin = () => {
    setInstalling(true);
    wp.updates.ajax('install-plugin', {
      slug: 'templates-patterns-collection',
      success: r => {
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
    const activationURL = plugins['templates-patterns-collection'].activate;

    get(activationURL, true).then(r => {
      if (r.ok) {
        window.location.reload();
      }
    });
  };
  const companionActive = 'deactivate' === plugins['templates-patterns-collection'].cta;

  const renderNoticeContent = () => {
    if (! companionActive) {
      return (
        <>
          <h1>{__('In order to be able to import any starter sites for Neve you would need to have the Templates Patterns Collection plugin active.')}</h1>
          <br/>
          <Button disabled={installing} isPrimary={! installing} isSecondary={installing}
                  onClick={installPlugin}>{installing ? __('Installing and activating') + '...' : __('Install and Activate')}</Button>
        </>
      );
    }

    if (! hasNeededCompanionVersion) {
      return (
        <>
          <h1>{__('In order to be able to import any starter sites for Neve you would need to have the Templates Patterns Collection plugin updated to the latest version.')}</h1>
          <br/>
          <Button href={pluginsPageUrl} isPrimary>{__('Go to plugins page')}</Button>
        </>
      );
    }

    return (
      <>
        <h1>{__('It seems something went wrong. Please make sure that you have the Templates Patterns Collection plugin activated and updated to the latest version.')}</h1>
        <br/>
        <Button href={pluginsPageUrl} isPrimary>{__('Go to plugins page')}</Button>
      </>
    );
  };

  return (
    <>
      <div className="ss-background"
           style={{ backgroundImage: `url(${assets}/starter.jpg)` }}/>
      <div className="content-wrap">
        {! error ?
          renderNoticeContent() : <h1 className='error'>{error}</h1>
        }
      </div>
    </>
  );
};

export default StarterSitesUnavailable;
