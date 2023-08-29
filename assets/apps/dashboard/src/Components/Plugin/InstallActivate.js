/* global neveDash */
import { get } from '../../utils/rest';
import { sprintf, __ } from '@wordpress/i18n';
import { useState, useEffect } from '@wordpress/element';
import { Button, Tooltip } from '@wordpress/components';

const InstallActivate = ({
	labels = {},
	pluginData,
	successActivation,
	autoInstall = false,
	smallButton = false,
	description,
}) => {
	const { slug, pluginState, activateURL, pluginBasename } = pluginData;
	const { getPluginStateBaseURL, pluginsURL, canInstallPlugins, canActivatePlugins } = neveDash;

	const [progress, setProgress] = useState(false);
	// const [updating, setUpdating] = useState(false);
	const [error, setError] = useState(false);
	const [currentState, setCurrentState] = useState(pluginState);
	const [buttonLabels, setButtonLabels] = useState({
		firstLabel: false,
		installing: `${__('Installing', 'neve')}...`,
		activating: `${__('Activating', 'neve')}...`,
		installActivate: __('Install and Activate', 'neve'),
		activate: __('Activate', 'neve'),
	});

	const setCustomLabels = (customLabels) => {
		setButtonLabels({
			...buttonLabels,
			...(customLabels.firstLabel !== false && {
				firstLabel: customLabels.firstLabel,
			}),
			...(customLabels.installing && {
				installing: customLabels.installing,
			}),
			...(customLabels.activating && {
				activating: customLabels.activating,
			}),
			...(customLabels.installActivate && {
				installActivate: customLabels.installActivate,
			}),
			...(customLabels.activate && { activate: customLabels.activate }),
		});
	};

	useEffect(() => {
		setCustomLabels(labels);
	}, []);

	const getLabel = (type) => {
		return progress || !buttonLabels.firstLabel
			? buttonLabels[type]
			: buttonLabels.firstLabel;
	};

	const hideFirstLabel = () => {
		setButtonLabels({ ...buttonLabels, firstLabel: false });
	};

	const installPlugin = () => {
		setProgress('installing');
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
						e.errorMessage ||
							__(
								'Something went wrong while installing the plugin.',
								'neve'
							)
					);
				}
			},
		});
	};

	const activatePlugin = () => {
		setProgress('activating');
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
				setError(__('Could not activate plugin.', 'neve'));
			}
		});
	};

	useEffect(() => {
		if (autoInstall) {
			if (currentState === 'install') {
				installPlugin();
			}

			if (currentState === 'activate') {
				activatePlugin();
			}
		}
	}, [autoInstall]);

	const updatePluginState = () => {
		get(`${getPluginStateBaseURL}${slug}`, false, true).then((r) => {
			setCurrentState(r.state);
		});
	};

	const isProgress = (type) => progress === type;

	const isButtonDisabled = () => {
		if (progress) {
			return true;
		}
		if (isProgress('installing')) {
			return !canInstallPlugins;
		}
		if (isProgress('activating')) {
			return !canActivatePlugins;
		}
		return false;
	};

	const renderNoticeContent = () => {
		const buttonMap = {
			install: (
				<Button
					disabled={isButtonDisabled()}
					isPrimary={!isProgress('installing')}
					isSmall={smallButton}
					isSecondary={isProgress('installing')}
					className={isProgress('installing') && 'is-loading'}
					icon={isProgress('installing') && 'update'}
					onClick={installPlugin}
				>
					{isProgress('installing')
						? getLabel('installing')
						: getLabel('installActivate')}
				</Button>
			),
			activate: activateURL && (
				<Button
					disabled={isButtonDisabled()}
					isSmall={smallButton}
					isPrimary={!isProgress('activating')}
					isSecondary={isProgress('activating')}
					className={isProgress('activating') && 'is-loading'}
					icon={isProgress('activating') && 'update'}
					onClick={activatePlugin}
				>
					{isProgress('activating')
						? getLabel('activating')
						: getLabel('activate')}
				</Button>
			),
		};

		const showTooltip =
			(!canInstallPlugins && isProgress('installing')) ||
			(!canActivatePlugins && isProgress('activating'));

		const wrappedButtonContent = showTooltip ? (
			<Tooltip
				text={sprintf(
					// translators: %s: Plugin name.
					__('Ask your admin to enable %s on your site', 'neve'),
					'Cloud Templates & Patterns Collection'
				)}
				position="top center"
			>
				{buttonMap[currentState]}
			</Tooltip>
		) : (
			buttonMap[currentState]
		);

		return (
			<>
				{description}
				{buttonMap.hasOwnProperty(currentState) && wrappedButtonContent}
			</>
		);
	};

	return error ? <h1 className="error">{error}</h1> : renderNoticeContent();
};

export default InstallActivate;
