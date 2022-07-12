/* global neveDash */
import classnames from 'classnames';

import { __ } from '@wordpress/i18n';
import { useState } from '@wordpress/element';
import { external } from '@wordpress/icons';
import { Button, Dashicon, Icon } from '@wordpress/components';

const Notification = ({ data, slug }) => {
	// eslint-disable-next-line no-unused-vars
	const [hidden, setHidden] = useState(false);
	const { text, cta, type, update, url, targetBlank } = data;
	const [inProgress, setInProgress] = useState(false);
	const [done, setDone] = useState(false);
	const [errorMessage, setErrorMessage] = useState(null);
	const classes = classnames([
		'notification',
		slug,
		type && !done ? type : '',
		{
			'success hidden': 'done' === done,
			error: 'error' === done,
		},
	]);

	const updateEntity = () => {
		if (!update.type) {
			return false;
		}

		const executeAction = () => {
			return new Promise((resolve) => {
				if ('theme' === update.type) {
					if (!update.slug) {
						return false;
					}
					wp.updates.ajax('update-theme', {
						slug: update.slug,
						success: () => {
							resolve({ success: true });
						},
						error: (err) => {
							setErrorMessage(err.errorMessage);
							resolve({ success: false });
						},
					});
				}

				if ('plugin' === update.type) {
					if (update.slug === 'sparks-for-woocommerce') {
						window.location.href =
							window.neveDash.sparksInstallActivateEndpoint;
						return;
					}

					if (!update.slug || !update.path) {
						return false;
					}
					wp.updates.ajax('update-plugin', {
						slug: update.slug,
						plugin: update.path,
						success: () => {
							resolve({ success: true });
						},
						error: (err) => {
							setErrorMessage(err.errorMessage);
							resolve({ success: false });
						},
					});
				}

				if ('otter' === update.type) {
					if (!update.slug || !update.path) {
						return false;
					}

					if ('otter-old' === update.slug) {
						wp.updates.ajax('update-plugin', {
							slug: update.slug,
							plugin: update.path,
							success: () => {
								resolve({ success: true });
								window.location.href =
									window.neveDash.otterProInstall;
							},
							error: (err) => {
								setErrorMessage(err.errorMessage);
								resolve({ success: false });
							},
						});
					}

					if ('otter-new' === update.slug) {
						window.location.href = window.neveDash.otterProInstall;
					}
				}
			});
		};

		setInProgress(true);
		executeAction().then((r) => {
			if (!r.success) {
				setDone('error');
				setInProgress(false);
				return false;
			}
			setDone('done');
			setInProgress(false);
			setHidden(true);

			delete neveDash.notifications[update.slug];
		});
	};

	const UpdateNotification = () => {
		return (
			<div className={classes}>
				{!done && <p>{text}</p>}
				{'done' === done && (
					<p>
						<Dashicon icon="yes" />
						{__('Done!', 'neve')}
					</p>
				)}
				{'error' === done && (
					<p>
						<Dashicon icon="no" />
						{errorMessage ||
							__(
								'An error occured. Please reload the page and try again.',
								'neve'
							)}
					</p>
				)}
				{cta && !done && (
					<Button
						isSecondary
						disabled={inProgress}
						className={classnames({ 'is-loading': inProgress })}
						onClick={() => {
							if (update) {
								updateEntity();
							}
						}}
					>
						{inProgress ? (
							<span>
								<Dashicon icon="update" />{' '}
								{__('In Progress', 'neve') + '...'}{' '}
							</span>
						) : (
							cta
						)}
					</Button>
				)}
			</div>
		);
	};

	const LinkNotification = () => {
		return (
			<div className={classes}>
				<p dangerouslySetInnerHTML={{ __html: text }} />
				{url && cta && (
					<Button
						isSecondary
						target={targetBlank ? '_blank' : ''}
						href={url}
					>
						{cta}
						{targetBlank && <Icon size={20} icon={external} />}
					</Button>
				)}
			</div>
		);
	};

	if (update) {
		return <UpdateNotification />;
	}

	return <LinkNotification />;
};

export default Notification;
