/* global neveDash */
import classnames from 'classnames';

const {useState} = wp.element;
const {__} = wp.i18n;
const {Button, Dashicon} = wp.components;

const Notification = (props) => {
  const [ hidden, setHidden ] = useState(false);

  if (hidden) {
    return null;
  }

  if ( done ) {
    setTimeout( () => {
      setHidden(true);
    }, 15000 );
  }

  const {text, cta, type, update} = props.data;
  const [ inProgress, setInProgress ] = useState(false);
  const [ done, setDone ] = useState(false);
  const classes = classnames(
    [
      props.slug,
      'notification',
      type ? type : '',
      {
        'success': done,
        'hidden': done
      }
    ]
  );

  return (
    <div className={classes}>
      {(text && ! done) ? <p>{text}</p> : <p><Dashicon icon="yes"/>{__('Done!', 'neve')}</p>}
      {(cta && ! done) &&
      <Button
        isDefault
        secondary
        disabled={inProgress}
        className={classnames({'is-loading': inProgress})}
        onClick={
          () => {
            setInProgress(true);
            if (update) {
              updateEntity(update, setDone, setInProgress);
            }
          }
        }>
        {
          inProgress &&
          <span><Dashicon icon="update"/> {__('In Progress', 'neve') + '...'} </span>
        }
        {! inProgress && cta}
      </Button>}
    </div>
  );
};

const updateEntity = (args, setDone, setInProgress) => {
  if (! args.type) {
    return false;
  }

  if ('theme' === args.type) {
    if (! args.slug) {
      return false;
    }

    const updateTheme = () => {
      return new Promise(resolve => {
        wp.updates.ajax('update-theme', {slug: args.slug}).then(() => {
          resolve();
        });
      });
    };

    updateTheme().then( () => {
      setDone(true);
      setInProgress(false);
    } );
  }

  if ('plugin' === args.type) {
    if (! args.slug || ! args.path) {
      return false;
    }

    wp.updates.ajax('update-plugin', {slug: args.slug, plugin: args.path});
  }
};

export default Notification;
