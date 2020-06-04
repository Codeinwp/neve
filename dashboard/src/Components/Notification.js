/* global neveDash */
import classnames from 'classnames';

const { useState } = wp.element;
const { __ } = wp.i18n;
const { Button, Dashicon } = wp.components;

const Notification = ({ data, slug }) => {
  const [ hidden, setHidden ] = useState(false);
  const { text, cta, type, update } = data;
  const [ inProgress, setInProgress ] = useState(false);
  const [ done, setDone ] = useState(false);
  const [ errorMessage, setErrorMessage ] = useState(null);
  const classes = classnames(
    [
      'notification',
      slug,
      type && ! done ? type : '',
      {
        'success hidden': 'done' === done,
        'error': 'error' === done
      }
    ]
  );

  const updateEntity = () => {
    if (! update.type) {
      return false;
    }

    const executeAction = () => {
      return new Promise(resolve => {
        if ('theme' === update.type) {
          if (! update.slug) {
            return false;
          }
          wp.updates.ajax('update-theme', {
            slug: update.slug,
            success: (r) => {
              resolve({ success: true });
            },
            error: (err) => {
              setErrorMessage(err.errorMessage);
              resolve({ success: false });
            }
          });
        }

        if ('plugin' === update.type) {
          if (! update.slug || ! update.path) {
            return false;
          }
          wp.updates.ajax('update-plugin', {
            slug: update.slug,
            plugin: update.path,
            success: (r) => {
              resolve({ success: true });
            },
            error: (err) => {
              setErrorMessage(err.errorMessage);
              resolve({ success: false });
            }
          });
        }
      });
    };

    setInProgress(true);
    executeAction().then((r) => {
      if (! r.success) {
        setDone('error');
        setInProgress(false);
        return false;
      }
      setDone('done');
      setInProgress(false);
      setHidden(true);

      delete (neveDash.notifications[update.slug]);
    });
  };

  return (
    <div className={classes}>
      {! done && <p>{text}</p>}
      {'done' === done && <p><Dashicon icon="yes"/>{__('Done!', 'neve')}</p>}
      {'error' === done && <p><Dashicon icon="no"/>{errorMessage || __('An error occured. Please reload the page and try again.', 'neve')}</p>}
      {(cta && ! done) &&
      <Button
        secondary
        disabled={inProgress}
        className={classnames({ 'is-loading': inProgress })}
        onClick={
          () => {
            if (update) {
              updateEntity();
            }
          }
        }>
        {
          inProgress ?
            <span><Dashicon icon="update"/> {__('In Progress', 'neve') + '...'} </span> :
            cta
        }
      </Button>}
    </div>
  );
};

export default Notification;
