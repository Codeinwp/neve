import React, { useState } from 'react';
import { __ } from '@wordpress/i18n';
import { Button } from '@wordpress/components';
import classnames from 'classnames';

declare let wp: any;

declare global {
	interface Window {
		tpcPluginData: TPCPluginData;
	}
}

/**
 * Type WpError
 */
type WpError = {
	errorCode: string;
	errorMessage: string;
};

/**
 * Type TPCPluginData
 */
type TPCPluginData = {
	nonce: string;
	slug: string;
	path: string;
	activate: string;
	deactivate: string;
	cta: string;
	version: string;
	adminURL: string;
	pluginsURL: string;
	ajaxURL: string;
	ajaxNonce: string;
};

const get = async (route: string, useNonce = '') => {
	const options: RequestInit = {
		method: 'GET',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
			'x-wp-nonce': useNonce,
		},
	};

	return await fetch(route, options).then((response) => {
		return response;
	});
};

const dismiss = async (route: string, action = '', useNonce = '') => {
	const formData = new FormData();
	formData.append('nonce', useNonce);
	formData.append('action', action);
	const options: RequestInit = {
		method: 'POST',
		body: formData,
	};

	return await fetch(route, options).then(() => {
		return true;
	});
};

const SSTryButton: React.FC = () => {
	const templatesPluginData = window.tpcPluginData as TPCPluginData;
	const tpcRedirect = templatesPluginData.adminURL + '&onboarding=yes';

	const [installing, setInstalling] = useState(false);
	const [activating, setActivating] = useState(false);
	const [error, setError] = useState('');

	const [currentState, setCurrentState] = useState(
		templatesPluginData?.cta || 'install'
	);

	const classes = classnames([
		'button',
		'button-primary',
		'button-hero',
		'install-now',
		installing || activating ? 'is-loading' : '',
	]);

	let buttonLabel = __('Try one of our ready to use Starter Sites', 'neve');
	if (installing) {
		buttonLabel = __('Installing', 'neve');
	}
	if (activating) {
		buttonLabel = __('Activating', 'neve');
	}

	const inProgress = installing || activating;

	const installPlugin = () => {
		if (currentState === 'deactivate') {
			cleanup();
			return;
		}
		if (currentState === 'activate') {
			activatePlugin();
			return;
		}
		setInstalling(true);
		wp.updates.ajax('install-plugin', {
			slug: 'templates-patterns-collection',
			success: () => {
				activatePlugin();
			},
			error: (e: WpError) => {
				if ('folder_exists' === e.errorCode) {
					activatePlugin();
				} else {
					setError(
						e.errorMessage
							? e.errorMessage
							: __(
									'Something went wrong while installing the plugin.',
									'neve'
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
		const activationURL = templatesPluginData?.activate || '';

		if (!activationURL) {
			window.location.href = templatesPluginData.pluginsURL;

			return;
		}

		get(activationURL, templatesPluginData.nonce).then((r: Response) => {
			if (r.ok) {
				cleanup();
			} else {
				setError(__('Could not activate plugin.', 'neve'));
			}
		});
	};

	const cleanup = () => {
		dismiss(
			templatesPluginData.ajaxURL,
			'neve_dismiss_welcome_notice',
			templatesPluginData.ajaxNonce
		).then(() => {
			window.location.href = tpcRedirect;
		});
	};

	return (
		<>
			<Button
				disabled={inProgress}
				isPrimary={!inProgress}
				isSecondary={inProgress}
				className={classes}
				icon={inProgress && 'update'}
				onClick={installPlugin}
				data-is-react={true}
				style={{
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					gap: '8px',
					minWidth: '300px',
				}}
			>
				{buttonLabel}
			</Button>
			{error && (
				<p
					className="error"
					style={{
						margin: 0,
						textAlign: 'center',
						color: '#ff0000',
						backgroundColor: '#ff00000a',
						width: '330px',
					}}
				>
					{error}
				</p>
			)}
		</>
	);
};

export default SSTryButton;
