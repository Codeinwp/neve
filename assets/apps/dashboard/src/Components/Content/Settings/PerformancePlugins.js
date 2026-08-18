/* global neveDash */
import { useSelect } from '@wordpress/data';
import { useEffect, useState } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import cn from 'classnames';
import { LoaderCircle, LucidePuzzle, LucideRocket } from 'lucide-react';

import Pill from '../../Common/Pill';
import Toast from '../../Common/Toast';
import TransitionInOut from '../../Common/TransitionInOut';
import Card from '../../../Layout/Card';
import usePluginActions from '../../../Hooks/usePluginActions';
import {
	NEVE_HIDE_PLUGINS,
	NEVE_PLUGIN_ICON_MAP,
	NEVE_STORE,
} from '../../../utils/constants';

const PROMOTED_SLUGS = ['optimole-wp', 'wp-cloudflare-page-cache'];

const PluginCard = ({ slug }) => {
	const ICON = NEVE_PLUGIN_ICON_MAP[slug] || LucidePuzzle;
	// Titles and descriptions are already localized in inc/admin/dashboard/main.php.
	const { title, description } = neveDash.plugins[slug];

	const [error, setError] = useState(null);
	const [success, setSuccess] = useState(false);

	const { doPluginAction, loading, buttonText } = usePluginActions(
		slug,
		true
	);

	const isPluginActive = useSelect(
		(select) => select(NEVE_STORE).getPlugins()[slug]?.cta === 'deactivate'
	);

	useEffect(() => {
		if (!success) {
			return;
		}

		const timeoutId = window.setTimeout(() => {
			setSuccess(false);
		}, 1500);

		return () => window.clearTimeout(timeoutId);
	}, [success]);

	if (isPluginActive && !success) {
		return null;
	}

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
				<h3 className="text-sm font-medium text-gray-900">{title}</h3>

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
	const plugins = useSelect((select) => select(NEVE_STORE).getPlugins(), []);

	// A promoted plugin can be absent entirely, e.g. Super Page Cache is dropped when SPC Pro is installed.
	const availableSlugs = PROMOTED_SLUGS.filter(
		(slug) => plugins[slug] && plugins[slug].cta !== 'deactivate'
	);

	if (NEVE_HIDE_PLUGINS || availableSlugs.length < 1) {
		return null;
	}

	return (
		<Card
			flat
			className="mt-6 pt-6 border-t border-gray-200"
			icon={<LucideRocket size={18} />}
			title={__('Recommended Plugins', 'neve')}
		>
			<div
				className={cn('grid gap-4', {
					'md:grid-cols-2': availableSlugs.length > 1,
				})}
			>
				{availableSlugs.map((slug) => (
					<PluginCard key={slug} slug={slug} />
				))}
			</div>
		</Card>
	);
};

export default PerformancePlugins;
