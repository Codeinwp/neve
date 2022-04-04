/* global neveDash */
import { get } from '../../utils/rest';
import { untrailingSlashIt } from '../../utils/common';
import { __ } from '@wordpress/i18n';
import { useState } from '@wordpress/element';
import { Button } from '@wordpress/components';
import { withSelect } from '@wordpress/data';

const StarterSitesUnavailable = ({ templatesPluginData }) => {
	const { assets, tpcPath, tpcAdminURL, isOnboarding, pluginsURL } = neveDash;
	const tpcRedirect = tpcAdminURL + (isOnboarding ? '&onboarding=yes' : '');
	const [installing, setInstalling] = useState(false);
	const [activating, setActivating] = useState(false);
	const [updating, setUpdating] = useState(false);
	const [error, setError] = useState(false);
	const [currentState, setCurrentState] = useState(
		templatesPluginData?.cta || 'install'
	);
	const installPlugin = () => {
		setInstalling(true);
		wp.updates.ajax('install-plugin', {
			slug: 'templates-patterns-collection',
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
		const activationURL = templatesPluginData?.activate || '';

		if (!activationURL) {
			window.location.href = pluginsURL;

			return;
		}

		get(activationURL, true).then((r) => {
			if (r.ok) {
				window.location.href = tpcRedirect;
			} else {
				setError(__('Could not activate plugin.'));
			}
		});
	};

	const updatePlugin = () => {
		setUpdating(true);
		wp.updates.ajax('update-plugin', {
			slug: 'templates-patterns-collection',
			plugin: untrailingSlashIt(tpcPath),
			success: () => {
				window.location.href = tpcRedirect;
			},
			error: (e) => {
				setError(
					e.errorMessage
						? e.errorMessage
						: __('Something went wrong while updating the plugin.')
				);
			},
		});
	};

	const renderNoticeContent = () => {
		const buttonMap = {
			install: (
				<Button
					disabled={installing}
					isPrimary={!installing}
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
			activate: templatesPluginData?.activate && (
				<Button
					disabled={activating}
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
				<Button
					disabled={updating}
					isPrimary={!updating}
					isSecondary={updating}
					className={updating && 'is-loading'}
					icon={updating && 'update'}
					onClick={updatePlugin}
				>
					{updating ? __('Updating') + '...' : __('Update')}
				</Button>
			),
		};
		return (
			<>
				<h1>
					{'deactivate' === currentState
						? neveDash.strings.starterSitesUnavailableUpdate
						: neveDash.strings.starterSitesUnavailableActive}
				</h1>
				<br />
				{buttonMap[currentState]}
			</>
		);
	};

	return (
		<div className="unavailable-starter-sites">
			<div
				className="ss-background"
				style={{ backgroundImage: `url(${assets}/starter.jpg)` }}
			/>
			<div className="content-wrap">
				{!error ? (
					renderNoticeContent()
				) : (
					<h1 className="error">{error}</h1>
				)}
			</div>
		</div>
	);
};

export default withSelect((select) => {
	const { getPlugins } = select('neve-dashboard');
	return {
		templatesPluginData: getPlugins()['templates-patterns-collection'],
	};
})(StarterSitesUnavailable);
