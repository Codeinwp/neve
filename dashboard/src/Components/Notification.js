/* global neveDash */
import classnames from 'classnames';

const {useState} = wp.element;
const {__} = wp.i18n;
const {Button, Dashicon} = wp.components;

const Notification = (props) => {
  const [ hidden, setHidden ] = useState(false);
  const {text, cta, type, update} = props.data;
  const [ inProgress, setInProgress ] = useState(false);
  const [ done, setDone ] = useState(false);
  const classes = classnames(
    [
      'notification',
      props.slug,
      type ? type : '',
      {
        'success': done,
        'hidden': done
      }
    ]
  );

  return (
    <div className={classes}>
      {! done ? <p>{text}</p> : <p><Dashicon icon="yes"/>{__('Done!', 'neve')}</p>}
      {(cta && ! done) &&
      <Button
        secondary
        disabled={inProgress}
        className={classnames({'is-loading': inProgress})}
        onClick={
          () => {
            if (update) {
              updateEntity(update, setDone, setInProgress, setHidden);
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

const updateEntity = (args, setDone, setInProgress, setHidden) => {
  if (! args.type) {
    return false;
  }

  const executeAction = () => {
    return new Promise(resolve => {
      if ('theme' === args.type) {
        if (! args.slug) {
          return false;
        }
        wp.updates.ajax('update-theme', {slug: args.slug}).then(() => {
          resolve('theme-updated');
        });
      }

      if ('plugin' === args.type) {
        if (! args.slug || ! args.path) {
          return false;
        }
        wp.updates.ajax('update-plugin', {slug: args.slug, plugin: args.path}).then(() => {
          resolve('plugin-updated');
        });
      }
    });
  };

  setInProgress(true);
  executeAction().then(() => {
    setDone(true);
    setInProgress(false);
    setHidden(true);
  });
};


export default Notification;
