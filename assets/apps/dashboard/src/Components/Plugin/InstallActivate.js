/* global neveDash */
import { get } from '../../utils/rest';
import { __ } from '@wordpress/i18n';
import { useState } from '@wordpress/element';
import { Button, Dashicon } from '@wordpress/components';
import { useEffect } from 'react';

const InstallActivate = ({
	name = '',
	labels = [],
	slug,
	successActivation,
	autoInstall = false,
	smallButton = false,
	pluginState,
	activateURL,
	description,
	// pluginBasename,
	// successUpdate,
}) => {
	const { getPluginStateBaseURL, pluginsURL } = neveDash;

	const [installing, setInstalling] = useState(false);
	const [activating, setActivating] = useState(false);
	// const [updating, setUpdating] = useState(false);
	const [error, setError] = useState(false);
	const [currentState, setCurrentState] = useState(pluginState);

	const [buttonLabels, setButtonLabels] = useState({
		firstLabel: labels.firstLabel ?? false,
		installing: labels.installing ?? `${__('Installing', 'neve')}...`,
		activating: labels.activating ?? `${__('Activating', 'neve')}...`,
		installActivate:
			labels.installActivate ?? `${__('Install and Activate', 'neve')}`,
		activate: labels.activate ?? `${__('Activate', 'neve')}`,
		installed: labels.installed ?? `${__('Installed', 'neve')}`,
	});

	const getLabel = (type) => {
		if (buttonLabels.firstLabel) {
			return buttonLabels.firstLabel;
		}

		return buttonLabels[type].replace('{plugin}', name);
	};

	const hideFirstLabel = () => {
		buttonLabels.firstLabel = false;
		setButtonLabels(buttonLabels);
	};

	const installPlugin = () => {
		setInstalling(true);
		hideFirstLabel();
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
		hideFirstLabel();
		const activationURL = activateURL;

		if (!activationURL) {
			window.location.href = pluginsURL;

			return;
		}

		get(activationURL, true).then((r) => {
			if (r.ok) {
				const action = successActivation(setCurrentState);

				if (action === 'updateState') {
					updatePluginState();
				}
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

	useEffect(() => {
		if (autoInstall) {
			installPlugin();
		}
	}, [autoInstall]);

	const updatePluginState = () => {
		get(`${getPluginStateBaseURL}${slug}`, false, true).then((r) => {
			setCurrentState(r.state);
		});
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
						? getLabel('installing')
						: getLabel('installActivate')}
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
					{activating ? getLabel('activating') : getLabel('activate')}
				</Button>
			),
			deactivate: (
				<span className="installed">
					<Dashicon size={14} icon="yes-alt" />
					{getLabel('installed')}
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
