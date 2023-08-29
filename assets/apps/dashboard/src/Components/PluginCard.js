/* global neveDash */
import classnames from 'classnames';
import { get } from '../utils/rest';

import { sprintf, __ } from '@wordpress/i18n';
import { Button, Dashicon, ExternalLink, Tooltip } from '@wordpress/components';
import { useState } from '@wordpress/element';
import { withDispatch } from '@wordpress/data';

const Card = ({ slug, data, setPluginState }) => {
	const { banner, name, description, version, author, url, premium } = data;
	const { canInstallPlugins, canActivatePlugins } = neveDash;
	const action = data.cta;
	const [inProgress, setInProgress] = useState(false);

	const stringMap = {
		install: {
			static: __('Install', 'neve'),
			progress: __('Installing', 'neve'),
		},
		activate: {
			static: __('Activate', 'neve'),
			progress: __('Activating', 'neve'),
		},
		deactivate: {
			static: __('Deactivate', 'neve'),
			progress: __('Deactivating', 'neve'),
		},
		external: __('Learn More', 'neve'),
	};

	const ctaContent = () => {
		if (action === 'external') {
			return null;
		}

		const isButtonDisabled = () => {
			if (inProgress) {
				return true;
			}
			if (action === 'install') {
				return !canInstallPlugins;
			}
			if (action === 'activate') {
				return !canActivatePlugins;
			}
			return false;
		};

		return (
			<Button
				className="plugin-action"
				isPrimary={['install', 'activate'].includes(action)}
				isSecondary={'deactivate' === action}
				disabled={isButtonDisabled()}
				onClick={() => {
					setInProgress(true);
					if ('install' === action) {
						installPlugin(slug).then((r) => {
							if (!r.success) {
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
						if (!r.ok) {
							// Todo handle error with toasts?
							setInProgress(false);
							return false;
						}

						if ('activate' === action) {
							setPluginState(slug, 'deactivate');
						} else {
							setPluginState(slug, 'activate');
						}
						if ('templates-patterns-collection' === slug) {
							window.location.reload();
						}
						setInProgress(false);
					});
				}}
			>
				{!inProgress && stringMap[action].static}
				{inProgress && (
					<span
						style={{
							display: 'flex',
							alignItems: 'center',
						}}
					>
						<Dashicon icon="update" />
						{stringMap[action].progress + '...'}
					</span>
				)}
			</Button>
		);
	};

	const showTooltip =
		(!canInstallPlugins && action === 'install') ||
		(!canActivatePlugins && action === 'activate');

	const wrappedButtonContent = showTooltip ? (
		<Tooltip
			text={sprintf(
				// translators: %s: Plugin name.
				__('Ask your admin to enable %s on your site', 'neve'),
				name
			)}
			position="top center"
		>
			{ctaContent()}
		</Tooltip>
	) : (
		ctaContent()
	);

	return (
		<div className={classnames(['card', 'plugin', slug])}>
			<div className="card-header">
				<img src={banner} alt={__('Banner Image', 'name')} />
				{premium && <span className="premium-label">{'Premium'}</span>}
			</div>
			<div className="card-body">
				<h3 className="card-title">{name}</h3>
				<p className="card-description">{description}</p>
			</div>
			<div className="card-footer">
				<div className="plugin-data">
					{version && <span className="version">v{version} | </span>}
					{author && <span className="author">{author}</span>}
				</div>
				{wrappedButtonContent}
				{action === 'external' && (
					<ExternalLink className="plugin-action" href={url}>
						{stringMap[action]}
					</ExternalLink>
				)}
			</div>
		</div>
	);
};

const installPlugin = (slug) => {
	return new Promise((resolve) => {
		wp.updates.ajax('install-plugin', {
			slug,
			success: () => {
				resolve({ success: true });
			},
			error: () => {
				// errorCode, errorMessage are params of err if we toast.
				resolve({ success: false });
			},
		});
	});
};

export default withDispatch((dispatch) => {
	const { setPluginState } = dispatch('neve-dashboard');
	return {
		setPluginState: (slug, newState) => setPluginState(slug, newState),
	};
})(Card);
