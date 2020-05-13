/* global neveDash */
import classnames from 'classnames';
import {get} from '../utils/rest';

const {__} = wp.i18n;
const {Button, Dashicon} = wp.components;
const {useState} = wp.element;
const {withDispatch} = wp.data;

const Card = ({slug, data, setPluginState}) => {
	const {banner, name, description, version, author} = data;
	const action = data.cta;
	const [ inProgress, setInProgress ] = useState(false);

	const stringMap = {
		'install': {static: __('Install', 'neve'), progress: __('Installing', 'neve')},
		'activate': {static: __('Activate', 'neve'), progress: __('Activating', 'neve')},
		'deactivate': {static: __('Deactivate', 'neve'), progress: __('Deactivating', 'neve')}
	};

	return (
		<div className={classnames([ 'card', 'plugin', slug ])}>
			<div className="card-header">
				<img src={banner} alt={__('Banner Image', 'name')}/>
			</div>
			<div className="card-body">
				<h3 className="card-title">{name}</h3>
				<p className="card-description">{description}</p>
			</div>
			<div className="card-footer">
				<div className="plugin-data">
					<span className="version">v{version}</span> | <span className="author">{author}</span>
				</div>
				<Button
					className="plugin-action"
					isPrimary={[ 'install', 'activate' ].includes(action)}
					isSecondary={'deactivate' === action}
					disabled={inProgress}
					onClick={() => {
						setInProgress(true);
						if ('install' === action) {
							installPlugin(slug).then((r) => {
								if (! r.success) {

									// Todo handle error with toasts?
									setInProgress(false);
									return false;
								}
								setInProgress(false);
								setPluginState(slug, 'activate');
							});
							return false;
						}
						get(data[action], true).then((r) => {
							if (! r.ok) {

								// Todo handle error with toasts?
								setInProgress(false);
								return false;
							}

							if ('activate' === action) {
								setPluginState(slug, 'deactivate');
							} else {
								setPluginState(slug, 'activate');
							}
							setInProgress(false);
						});
					}}
				>
					{! inProgress && stringMap[action].static}
					{inProgress && (
						<span style={{display: 'flex', alignItems: 'center'}}>
            <Dashicon icon="update"/>
							{stringMap[action].progress + '...'}
            </span>)}
				</Button>
			</div>
		</div>
	);
};

const installPlugin = (slug) => {
	return new Promise(resolve => {
		wp.updates.ajax('install-plugin', {
			slug,
			success: (r) => {
				resolve({success: true});
			},
			error: (err) => {

				// errorCode, errorMessage are params of err if we toast.
				resolve({success: false});
			}
		});
	});
};


export default withDispatch(dispatch => {
	const {setPluginState} = dispatch('neve-dashboard');
	return {
		setPluginState: (slug, newState) => setPluginState(slug, newState)
	};
})(Card);
