/* global neveDash */
import { useEffect, useState } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import cn from 'classnames';
import { LoaderCircle, LucidePuzzle, LucideRocket } from 'lucide-react';

import Pill from '../../Common/Pill';
import Toast from '../../Common/Toast';
import TransitionInOut from '../../Common/TransitionInOut';
import ControlWrap from '../../Controls/ControlWrap';
import usePluginActions from '../../../Hooks/usePluginActions';
import {
	NEVE_HIDE_PLUGINS,
	NEVE_PLUGIN_ICON_MAP,
} from '../../../utils/constants';

const PROMOTED_SLUGS = ['optimole-wp', 'wp-cloudflare-page-cache'];

// How long the "Active" pill stays up before the card removes itself.
const ACTIVE_PILL_TIMEOUT = 1500;

const PluginCard = ({ slug, data, onDismiss }) => {
	const ICON = NEVE_PLUGIN_ICON_MAP[slug] || LucidePuzzle;
	// Titles and descriptions are already localized in inc/admin/dashboard/main.php.
	const { title, description } = data;

	const [error, setError] = useState(null);
	const [success, setSuccess] = useState(false);

	const { doPluginAction, loading, buttonText } = usePluginActions(
		slug,
		true
	);

	useEffect(() => {
		if (!success) {
			return;
		}

		// Only `success` belongs in the deps: onDismiss is recreated on every
		// parent render and would restart a countdown already in progress.
		const timeoutId = window.setTimeout(() => {
			onDismiss(slug);
		}, ACTIVE_PILL_TIMEOUT);

		return () => window.clearTimeout(timeoutId);
	}, [success]);

	const handleClick = async () => {
		setError(null);

		window.tiTrk?.with('neve').set(slug, {
			feature: 'performance-plugin-promo',
			featureComponent: slug,
		});

		const result = await doPluginAction();

		if (result.success) {
			setSuccess(true);

			return;
		}

		setError(result.error);
	};

	return (
		<div
			className="flex flex-col h-full p-4 bg-white rounded-lg border border-gray-100"
			data-plugin={slug}
		>
			<div className="flex gap-3 items-center">
				<ICON className="size-6 text-blue-500 shrink-0" />
				<h4 className="text-sm font-medium text-gray-900">{title}</h4>

				{success && (
					<div className="ml-auto">
						<TransitionInOut show>
							<Pill type="success">{__('Active', 'neve')}</Pill>
						</TransitionInOut>
					</div>
				)}
			</div>

			{/* grow keeps the CTAs aligned when descriptions wrap to different heights */}
			<p className="grow text-sm leading-relaxed text-gray-600 mt-2">
				{description}
			</p>

			{!success && (
				<button
					type="button"
					onClick={handleClick}
					disabled={loading}
					className={cn(
						'mt-3 self-start text-blue-600 hover:text-blue-700 text-sm font-medium flex items-center',
						{ 'opacity-75 cursor-not-allowed': loading }
					)}
				>
					{loading && (
						<LoaderCircle size={14} className="animate-spin mr-2" />
					)}
					<span>{buttonText}</span>
				</button>
			)}

			{error && (
				<div className="mt-2">
					<Toast type="error" dismiss={setError} message={error} />
				</div>
			)}
		</div>
	);
};

const PerformancePlugins = () => {
	// Snapshot: a card leaves this list when it asks to, not when the store
	// changes, so the "Active" pill outlives the activation request.
	const [visibleSlugs, setVisibleSlugs] = useState(() =>
		PROMOTED_SLUGS.filter((slug) => {
			// Super Page Cache is dropped server side when SPC Pro is
			// installed, so a promoted slug can be missing entirely.
			const plugin = neveDash.plugins?.[slug];

			return plugin && plugin.cta !== 'deactivate';
		})
	);

	if (NEVE_HIDE_PLUGINS || visibleSlugs.length < 1) {
		return null;
	}

	const handleDismiss = (dismissed) =>
		setVisibleSlugs((current) =>
			current.filter((slug) => slug !== dismissed)
		);

	return (
		<ControlWrap
			label={__('Recommended Plugins', 'neve')}
			icon={LucideRocket}
		>
			<div
				className={cn('grid gap-4', {
					'md:grid-cols-2': visibleSlugs.length > 1,
				})}
			>
				{visibleSlugs.map((slug) => (
					<PluginCard
						key={slug}
						slug={slug}
						data={neveDash.plugins[slug]}
						onDismiss={handleDismiss}
					/>
				))}
			</div>
		</ControlWrap>
	);
};

export default PerformancePlugins;
