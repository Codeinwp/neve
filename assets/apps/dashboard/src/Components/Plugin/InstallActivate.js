/* global neveDash */
import { useEffect, useState } from '@wordpress/element';
import { __, sprintf } from '@wordpress/i18n';
import { LucideLoaderCircle } from 'lucide-react';
import { get } from '../../utils/rest';
import Button from '../Common/Button';
import Notice from '../Common/Notice';
import Tooltip from '../Common/Tooltip';
import TransitionInOut from '../Common/TransitionInOut';

const STATUS = {
	INSTALLING: 'installing',
	ACTIVATING: 'activating',
};

const InstallActivate = ({
	labels = {},
	pluginData,
	successActivation,
	autoInstall = false,
	smallButton = false,
	description,
}) => {
	const { slug, pluginState, activateURL, name } = pluginData;
	const {
		getPluginStateBaseURL,
		pluginsURL,
		canInstallPlugins,
		canActivatePlugins,
		isOtterProInstalled,
	} = neveDash;
	const [progress, setProgress] = useState(false);

	const [error, setError] = useState('');
	const [currentState, setCurrentState] = useState(pluginState);
	const [buttonLabels, setButtonLabels] = useState({
		firstLabel: false,
		installing: `${__('Installing', 'neve')}...`,
		activating: `${__('Activating', 'neve')}...`,
		installActivate: __('Install and Activate', 'neve'),
		activate: __('Activate', 'neve'),
		...labels,
	});

	const getLabel = (type) => {
		return progress || !buttonLabels.firstLabel
			? buttonLabels[type]
			: buttonLabels.firstLabel;
	};

	const hideFirstLabel = () => {
		setButtonLabels({ ...buttonLabels, firstLabel: false });
	};

	const installPlugin = () => {
		setProgress(STATUS.INSTALLING);

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
		setProgress(STATUS.ACTIVATING);
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

	const renderNoticeContent = () => {
		const isSuperAdmin = canInstallPlugins && canActivatePlugins;

		const actionsAreDisabled = () => {
			// Super admins can always perform actions
			if (isSuperAdmin) {
				return false;
			}

			// Prevent installing or activating plugins if not allowed
			if (currentState === 'install' && !canInstallPlugins) {
				return true;
			}
			if (currentState === 'activate' && !canActivatePlugins) {
				return true;
			}

			// For non super admins, prevent installing specific plugins if Otter Pro is not installed
			if (
				(pluginData.slug === 'otter-blocks' ||
					pluginData.slug === 'otter-pro') &&
				!isOtterProInstalled
			) {
				return !canInstallPlugins;
			}

			return false;
		};

		const isButtonDisabled = () => {
			if (progress) {
				return true;
			}

			return actionsAreDisabled();
		};

		const installing = progress === STATUS.INSTALLING;
		const activating = progress === STATUS.ACTIVATING;

		const buttonMap = {
			install: (
				<Button
					disabled={isButtonDisabled() || installing}
					isPrimary={!installing}
					isSecondary={installing}
					loading={installing}
					onClick={installPlugin}
					isSmall={smallButton}
				>
					{installing
						? getLabel(STATUS.INSTALLING)
						: getLabel('installActivate')}
				</Button>
			),
			activate: activateURL && (
				<Button
					disabled={isButtonDisabled() || activating}
					isPrimary={!activating}
					isSecondary={activating}
					loading={activating}
					onClick={activatePlugin}
					isSmall={smallButton}
				>
					{activating
						? getLabel(STATUS.ACTIVATING)
						: getLabel('activate')}
				</Button>
			),
		};

		const WrappedButton = () => {
			if (actionsAreDisabled()) {
				const text = sprintf(
					// translators: %s: Plugin name.
					__('Ask your admin to enable %s on your site', 'neve'),
					name
				);

				return <Tooltip text={text}>{buttonMap[currentState]}</Tooltip>;
			}

			return buttonMap[currentState];
		};

		return (
			<>
				{description}
				{!!buttonMap[currentState] && <WrappedButton />}
			</>
		);
	};

	return (
		<>
			<TransitionInOut show={!!error}>
				{<Notice isError>{error}</Notice>}
			</TransitionInOut>
			{!error && renderNoticeContent()}
		</>
	);
};

export default InstallActivate;
