/* global neveDash */
import classnames from 'classnames';

const {__} = wp.i18n;
const {Button} = wp.components;

const Card = (props) => {
  const {slug} = props;
  const {banner, name, description, version, author, cta} = props.data;
  console.log(props);
  return (
    <div className={classnames([ 'card', 'plugin-card', slug ])}>
      <div className="card-header">
        <img src={banner} alt={__('Banner Image', 'name')}/>
      </div>
      <div className="card-body">
        <h3 className="name">{name}</h3>
        <p className="description">{description}</p>
      </div>
      <div className="card-footer">
        <div className="plugin-data">
          <span>v{version}</span>
          <span>{author}</span>
        </div>
        {renderActionButton(props.data)}
      </div>
    </div>
  );
};

function renderActionButton(data) {
  const stringMap = {
    'install': __('Install', 'neve'),
    'activate': __('Activate', 'neve'),
    'deactivate': __('Deactivate', 'neve')
  };
  
  return <Button
    isDefault
    isPrimary={[ 'install', 'activate' ].includes(data.cta)}
    isSecondary={'deactivate' === data.cta}
    onClick={() => {
      executePluginAction(data);
    }}
  >
    {stringMap[data.cta]}
  </Button>;
}


function executePluginAction(data) {


  const executeAction = () => {
    return new Promise(resolve => {

      if ('install' === data.cta) {
        wp.updates.ajax('install-plugin', {slug: data.slug}).then(() => {
          resolve('plugin-installed');
        });

        return false;
      }

      if ('activate' === data.cta) {
        wp.updates.ajax('activate-plugin', {slug: data.slug, plugin: data.path}).then(() => {
          resolve('plugin-activated');
        });
      }
    });
  };

  executeAction().then(() => {
    console.log('done');
  });
}


export default Card;
