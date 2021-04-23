import React from 'react';
import { __ } from '@wordpress/i18n';
import apiFetch from '@wordpress/api-fetch';
import { rotateRight, starFilled } from '@wordpress/icons';
import { Button } from '@wordpress/components';
import { useState, useEffect } from '@wordpress/element';

interface MigrationResponse {
	success: boolean;
}

export const HFGMigrationNotice: React.FC = () => {
	const [error, setError] = useState(false);
	const [isCustomizerSaved, setCustomizerSaved] = useState(true);

	useEffect(() => {
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

	const runMigration = () => {
		window.wp.customize.notifications.add(
			new window.wp.customize.OverlayNotification(
				'neve_migrating_builders',
				{
					message: __('Migrating builder data', 'neve') + '...',
					type: 'success',
					loading: true,
				}
			)
		);

		apiFetch({
			path: '/nv/migration/new_header_builder',
			headers: { 'X-WP-Nonce': nonce },
			method: 'GET',
		}).then((response: unknown) => {
			if (!(response as MigrationResponse).success) {
				window.wp.customize.notifications.remove(
					'neve_migrating_builders'
				);
				setError(true);
				return false;
			}
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
				onClick={error ? reloadPage : runMigration}
			>
				{error
					? __('Reload', 'neve')
					: __('Migrate Builders Data', 'neve')}
			</Button>

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
