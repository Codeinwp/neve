/* global neveDash */
import cn from 'classnames';

import { useState, useEffect } from '@wordpress/element';
import { __, sprintf } from '@wordpress/i18n';

import {
	LucideCircleCheck,
	LucideCircleX,
	LucideExternalLink,
} from 'lucide-react';
import Card from '../../Layout/Card';
import Button from './Button';
import Tooltip from './Tooltip';
import TransitionInOut from './TransitionInOut';

const Notification = ({ data }) => {
	const [hidden, setHidden] = useState(false);
	const { text, cta, type, update, url, targetBlank } = data;
	const { canInstallPlugins } = neveDash;
	const [inProgress, setInProgress] = useState(false);
	const [done, setDone] = useState(false);
	const [errorMessage, setErrorMessage] = useState(null);

	useEffect(() => {
		let timeout;
		if (done === 'done') {
			timeout = setTimeout(() => {
				setHidden(true);
			}, 5000);
		}

		return () => {
			clearTimeout(timeout);
		};
	}, [done]);

	const classes = cn([
		'text-white !p-3 rounded flex flex-col md:flex-row items-center justify-between gap-4',
		{
			'bg-blue-500': type === 'info' || (!type && !done),
			'bg-amber-500': 'warning' === type && !done,
			'bg-emerald-500': 'success' === type || 'done' === done,
			'bg-red-500':
				('error' === type && 'done' !== done) || 'error' === done,
		},
	]);

	const buttonClasses = cn([
		'bg-white border-white hover:opacity-90 text-blue-500 font-medium text-center',
		{
			'!text-blue-600': type === 'info' || (!type && !done),
			'!text-amber-600': 'warning' === type && !done,
			'!text-emerald-600': 'success' === type || 'done' === done,
			'!text-red-600':
				('error' === type && 'done' !== done) || 'error' === done,
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

	const ctaContent = () => {
		if (!cta || done) {
			return null;
		}
		return (
			<Button
				disabled={inProgress || !canInstallPlugins}
				loading={inProgress}
				className={buttonClasses}
				onClick={() => {
					if (update) {
						updateEntity();
					}
				}}
			>
				{inProgress ? null : cta}
			</Button>
		);
	};

	const wrappedButtonContent = !canInstallPlugins ? (
		<Tooltip
			text={sprintf(
				// translators: %s: the plugin and theme to update (label: 'Neve and Neve Pro').
				__('Ask your admin to update %s on your site', 'neve'),
				sprintf(
					// translators: %1$s: theme name (Neve), %2$s: plugin name (Neve Pro).
					__('%1$s and %2$s', 'neve'),
					__('Neve', 'neve'),
					__('Neve Pro', 'neve')
				)
			)}
		>
			{ctaContent()}
		</Tooltip>
	) : (
		ctaContent()
	);

	const UpdateNotification = () => {
		return (
			<>
				{!done && (
					<p className="text-sm font-medium leading-relaxed">
						{text}
					</p>
				)}
				{'done' === done && (
					<p className="text-sm font-medium leading-relaxed">
						<LucideCircleCheck className="size-5 mr-3 inline" />
						{__('Done!', 'neve')}
					</p>
				)}
				{'error' === done && (
					<p className="text-sm font-medium leading-relaxed">
						<LucideCircleX className="size-5 mr-3 inline" />
						{errorMessage ||
							__(
								'An error occurred. Please reload the page and try again.',
								'neve'
							)}
					</p>
				)}
				{wrappedButtonContent}
			</>
		);
	};

	const LinkNotification = () => (
		<>
			<p
				className="text-sm font-medium leading-relaxed"
				dangerouslySetInnerHTML={{ __html: text }}
			/>
			{url && cta && (
				<Button
					target={targetBlank ? '_blank' : ''}
					className={buttonClasses}
					href={url}
				>
					{cta}
					{targetBlank && (
						<LucideExternalLink size={18} className="ml-2" />
					)}
				</Button>
			)}
		</>
	);

	return (
		<TransitionInOut show={!hidden}>
			<Card className={classes}>
				{update ? <UpdateNotification /> : <LinkNotification />}
			</Card>
		</TransitionInOut>
	);
};

export default Notification;
