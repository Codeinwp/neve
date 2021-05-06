import React from 'react';
import { __ } from '@wordpress/i18n';
import apiFetch from '@wordpress/api-fetch';
import {
	cancelCircleFilled,
	rotateRight,
	starFilled,
	undo,
} from '@wordpress/icons';
import { Button } from '@wordpress/components';
import { useState, useEffect } from '@wordpress/element';
import { StringObjectKeys } from '../@types/utils';

interface MigrationResponse {
	success: boolean;
}

type Props = {
	alreadyMigrated: boolean;
	hadOldBuilder: boolean;
};

export const HFGMigrationNotice: React.FC<Props> = ({
	alreadyMigrated,
	hadOldBuilder,
}) => {
	const [error, setError] = useState(false);
	const [isCustomizerSaved, setCustomizerSaved] = useState(true);

	useEffect(() => {
		if (alreadyMigrated && !hadOldBuilder) {
			return;
		}
		window.wp.customize.bind('ready', () => {
			window.wp.customize.state('saved').bind((status: boolean) => {
				setCustomizerSaved(status);
			});
		});
	}, []);

	if (typeof window.NeveProReactCustomize !== 'undefined') {
		const { whiteLabel } = window.NeveProReactCustomize;

		if (whiteLabel) {
			return null;
		}
	}

	if (!hadOldBuilder) {
		return null;
	}

	const { nonce } = window.NeveReactCustomize;

	const getReloadUrl = () => {
		const location = window.location.href;
		const currentPanel = window.wp.customize.state('expandedPanel').get();

		if (!currentPanel) return location;

		const panelId = currentPanel.id;

		if (!panelId) return location;

		const url = new URL(location);

		url.searchParams.set('autofocus[panel]', panelId);

		return url.href;
	};

	const runMigration = (rollback = false, dismiss = false) => {
		let message = __('Migrating builder data', 'neve');

		if (rollback) {
			message = __('Rolling back builder', 'neve');
		}

		if (dismiss) {
			message = __('Removing old data', 'neve');
		}

		window.wp.customize.notifications.add(
			new window.wp.customize.OverlayNotification(
				'neve_migrating_builders',
				{
					message: message + '...',
					type: 'success',
					loading: true,
				}
			)
		);

		const headers: StringObjectKeys = { 'X-WP-Nonce': nonce };
		if (rollback) {
			headers.rollback = 'yes';
		}

		if (dismiss) {
			headers.dismiss = 'yes';
		}

		apiFetch({
			path: '/nv/migration/new_header_builder',
			method: 'GET',
			headers,
		}).then((response: unknown) => {
			if (!(response as MigrationResponse).success) {
				window.wp.customize.notifications.remove(
					'neve_migrating_builders'
				);
				setError(true);
				return false;
			}
			reloadPage();
		});
	};

	const reloadPage = () => {
		const url = getReloadUrl();
		if (window.location.href === url) {
			window.location.reload();
			return false;
		}
		window.location.href = url;
	};

	const renderErrors = () => {
		return (
			<>
				{!isCustomizerSaved && !error && (
					<p>
						{__(
							'You must save the current customizer values before running the migration.',
							'neve'
						)}
					</p>
				)}

				{error && (
					<p>
						{__(
							'Something went wrong. Please reload the page and try again.',
							'neve'
						)}
					</p>
				)}
			</>
		);
	};

	if (alreadyMigrated && hadOldBuilder) {
		return (
			<>
				<hr />
				<p>{__('Want to roll back to the old builder?', 'neve')}</p>
				<Button
					style={{ marginRight: 10 }}
					disabled={!isCustomizerSaved && !error}
					isSecondary={!error}
					isDestructive={error}
					icon={undo}
					onClick={error ? reloadPage : () => runMigration(true)}
				>
					{error ? __('Reload', 'neve') : __('Roll Back', 'neve')}
				</Button>
				<Button
					isDestructive
					isSecondary
					disabled={!isCustomizerSaved}
					icon={cancelCircleFilled}
					onClick={() => {
						runMigration(false, true);
					}}
				>
					{__('Dismiss', 'neve')}
				</Button>
				{renderErrors()}
			</>
		);
	}

	return (
		<>
			<hr />
			<p>
				{__(
					"We've created a new Header/Footer Builder experience! You can always roll back to the old builder from right here.",
					'neve'
				)}
			</p>
			<p>
				<small>
					{__('Some manual adjustments may be required.', 'neve')}
				</small>
			</p>
			<Button
				disabled={!isCustomizerSaved && !error}
				isSecondary={!error}
				isDestructive={error}
				icon={error ? rotateRight : starFilled}
				onClick={error ? reloadPage : () => runMigration()}
			>
				{error
					? __('Reload', 'neve')
					: __('Migrate Builders Data', 'neve')}
			</Button>
			{renderErrors()}
		</>
	);
};
