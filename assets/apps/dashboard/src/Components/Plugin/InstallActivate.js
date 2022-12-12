/* global neveDash */
import { get } from '../../utils/rest';
import { untrailingSlashIt } from '../../utils/common';
import { __ } from '@wordpress/i18n';
import { useState } from '@wordpress/element';
import { Button, Dashicon } from '@wordpress/components';

const InstallActivate = ({
	slug,
	pluginBasename,
	successActivation,
	smallButton = false,
	successUpdate,
	pluginState,
	activateURL,
	description,
}) => {
	const { pluginsURL } = neveDash;

	const [installing, setInstalling] = useState(false);
	const [activating, setActivating] = useState(false);
	// const [updating, setUpdating] = useState(false);
	const [error, setError] = useState(false);
	const [currentState, setCurrentState] = useState(pluginState);
	const installPlugin = () => {
		setInstalling(true);
		wp.updates.ajax('install-plugin', {
			slug,
			success: () => {
				activatePlugin();
			},
			error: (e) => {
				if ('folder_exists' === e.errorCode) {
					activatePlugin();
				} else {
					setError(
						e.errorMessage
							? e.errorMessage
							: __(
									'Something went wrong while installing the plugin.'
							  )
					);
				}
			},
		});
	};

	const activatePlugin = () => {
		setInstalling(false);
		setActivating(true);
		setCurrentState('activate');
		const activationURL = activateURL;

		if (!activationURL) {
			window.location.href = pluginsURL;

			return;
		}

		get(activationURL, true).then((r) => {
			if (r.ok) {
				successActivation();
				updatePluginState();
			} else {
				setError(__('Could not activate plugin.'));
			}
		});
	};

	// const updatePlugin = () => {
	// 	setUpdating(true);
	// 	wp.updates.ajax('update-plugin', {
	// 		slug,
	// 		plugin: untrailingSlashIt(pluginBasename),
	// 		success: () => {
	// 			successUpdate();
	// 			updatePluginState();
	// 		},
	// 		error: (e) => {
	// 			setError(
	// 				e.errorMessage
	// 					? e.errorMessage
	// 					: __('Something went wrong while updating the plugin.')
	// 			);
	// 		},
	// 	});
	// };

	// TODO: update the endpoint URL (generate it dynamically)
	const updatePluginState = (successCallback = () => {}) => {
		get(`/wp-json/neve_pro/v1/plugin-state/${slug}`, false, true).then(
			(r) => {
				setCurrentState(r.state);
				successCallback(r.state);
			}
		);
	};

	const renderNoticeContent = () => {
		const buttonMap = {
			install: (
				<Button
					disabled={installing}
					isPrimary={!installing}
					isSmall={smallButton}
					isSecondary={installing}
					className={installing && 'is-loading'}
					icon={installing && 'update'}
					onClick={installPlugin}
				>
					{installing
						? __('Installing') + '...'
						: __('Install and Activate')}
				</Button>
			),
			activate: activateURL && (
				<Button
					disabled={activating}
					isSmall={smallButton}
					isPrimary={!activating}
					isSecondary={activating}
					className={activating && 'is-loading'}
					icon={activating && 'update'}
					onClick={activatePlugin}
				>
					{activating ? __('Activating') + '...' : __('Activate')}
				</Button>
			),
			deactivate: (
				<span className="installed">
					<Dashicon size={14} icon="yes-alt" />
					{__('Installed', 'neve')}
				</span>
			),
		};

		return (
			<>
				{description}
				{buttonMap[currentState]}
			</>
		);
	};

	return error ? <h1 className="error">{error}</h1> : renderNoticeContent();
};

export default InstallActivate;
