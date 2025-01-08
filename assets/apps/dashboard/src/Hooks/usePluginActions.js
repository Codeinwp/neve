/* global neveDash */

import { useState } from '@wordpress/element';
import { useDispatch } from '@wordpress/data';
import { __ } from '@wordpress/i18n';
import { useEffect } from 'react';

const usePluginActions = (slug, activateAfterInstall = false) => {
	const buttonLabelsMap = {
		install: {
			static: activateAfterInstall
				? __('Install & Activate', 'neve')
				: __('Install', 'neve'),
			loading: __('Installing', 'neve') + '...',
		},
		activate: {
			static: __('Activate', 'neve'),
			loading: __('Activating', 'neve') + '...',
		},
		deactivate: {
			static: __('Deactivate', 'neve'),
			loading: __('Deactivating', 'neve') + '...',
		},
	};

	const activateURL = neveDash.plugins[slug].activate;
	const deactivateURL = neveDash.plugins[slug].deactivate;

	const [loading, setLoading] = useState(false);
	const [currentCTA, setCurrentCTA] = useState(neveDash.plugins[slug].cta);
	const [buttonText, setButtonText] = useState(
		buttonLabelsMap[currentCTA].static
	);

	const { setPluginState } = useDispatch('neve-dashboard');

	useEffect(() => {
		setButtonText(
			loading
				? buttonLabelsMap[currentCTA].loading
				: buttonLabelsMap[currentCTA].static
		);
	}, [loading, currentCTA]);

	const installPlugin = () => {
		return new Promise((resolve) => {
			wp.updates.ajax('install-plugin', {
				slug,
				success: () => resolve({ success: true }),
				error: (error) =>
					resolve({
						success: false,
						error:
							error.errorMessage ||
							__('Could not install plugin.', 'neve'),
					}),
			});
		});
	};

	const activatePlugin = async () => {
		try {
			const response = await window.fetch(activateURL, {
				headers: {
					'X-WP-Nonce': neveDash.nonce,
				},
			});

			if (!response.ok) {
				return {
					success: false,
					error: __('Could not activate plugin.', 'neve'),
				};
			}

			return { success: true };
		} catch (error) {
			return {
				success: false,
				error:
					error.message || __('Could not activate plugin.', 'neve'),
			};
		}
	};

	const deactivatePlugin = async () => {
		try {
			const response = await window.fetch(deactivateURL, {
				headers: {
					'X-WP-Nonce': neveDash.nonce,
				},
			});

			if (!response.ok) {
				return {
					success: false,
					error: __('Could not deactivate plugin.', 'neve'),
				};
			}

			return { success: true };
		} catch (error) {
			return { success: false, error: error.message };
		}
	};

	/**
	 * Do plugin action.
	 *
	 * @param {'activate'|'deactivate'|'install'|null} type - Action to perform. If null, it will use the currentCTA.
	 * @return {Promise<{success: boolean, error: Error}>} - Result of the action.
	 */
	const doPluginAction = async (type = null) => {
		return await handlePluginAction(type || currentCTA);
	};

	/**
	 * Handle plugin action.
	 *
	 * @param {'activate'|'deactivate'|'install'} action - Action to perform.
	 *
	 * @return {Promise<{success: boolean, error: Error}>} - Result of the action ().
	 *
	 */
	const handlePluginAction = async (action) => {
		setLoading(true);

		try {
			let result;

			switch (action) {
				case 'install':
					setLoading(true);
					result = await installPlugin();
					if (result.success) {
						setPluginState(slug, 'activate');
						setCurrentCTA('activate');

						if (activateAfterInstall) {
							return await handlePluginAction('activate');
						}
					}
					break;

				case 'activate':
					result = await activatePlugin();
					if (result.success) {
						setPluginState(slug, 'deactivate');
						setCurrentCTA('deactivate');

						if (slug === 'templates-patterns-collection') {
							window.location.href =
								neveDash.tpcAdminURL +
								(neveDash.canInstallPlugins
									? '&onboarding=yes'
									: '');
						}
					}
					break;

				case 'deactivate':
					result = await deactivatePlugin(slug);

					if (result.success) {
						setPluginState(slug, 'activate');
						setCurrentCTA('activate');
					}

					break;

				default:
					result = {
						success: false,
						error: __('Invalid action', 'neve'),
					};
			}

			return result;
		} finally {
			setLoading(false);
		}
	};

	return {
		loading,
		buttonText,
		doPluginAction,
	};
};

export default usePluginActions;
