/* global neveDash */
import usePluginActions from '../Hooks/usePluginActions';
import Card from '../Layout/Card';
import { NEVE_HIDE_PLUGINS, NEVE_PLUGIN_ICON_MAP } from '../utils/constants';

import { useSelect } from '@wordpress/data';
import { useState } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import cn from 'classnames';
import { LoaderCircle, LucidePuzzle } from 'lucide-react';
import Pill from './Common/Pill';
import TransitionInOut from './Common/TransitionInOut';
import Toast from './Toast';

const PluginCard = ({ slug, data }) => {
	const ICON = NEVE_PLUGIN_ICON_MAP[slug] || LucidePuzzle;

	const [error, setError] = useState(null);
	const [success, setSuccess] = useState(false);

	const { title, description } = data;

	const { doPluginAction, loading, buttonText } = usePluginActions(
		slug,
		true
	);

	const isPluginActive = useSelect((select) => {
		const { getPlugins } = select('neve-dashboard');

		const plugins = getPlugins();

		return plugins[slug].cta === 'deactivate';
	});

	if (isPluginActive && !success) {
		return null;
	}

	const handleClick = async () => {
		setError(null);

		const result = await doPluginAction();

		if (result.success) {
			setSuccess(true);

			return;
		}

		if (!result.success) {
			setError(result.error);
		}
	};

	return (
		<div className="flex items-start p-3 bg-white rounded-lg border border-gray-100 hover:shadow-md transition-shadow ">
			<div className="flex-grow">
				<div className="flex gap-4 items-center">
					<ICON className="size-6 text-blue-500" />
					<h3 className="text-sm font-medium text-gray-900">
						{title}
					</h3>

					{!success && (
						<button
							onClick={handleClick}
							disabled={loading}
							className={cn(
								'ml-auto text-blue-600 hover:text-blue-700 text-sm font-medium flex items-center',
								{
									'opacity-75 cursor-not-allowed': loading,
								}
							)}
						>
							{loading && (
								<LoaderCircle
									size={14}
									className="animate-spin mr-2"
								/>
							)}
							<span>{buttonText}</span>
						</button>
					)}
					{success && (
						<div className="ml-auto">
							<TransitionInOut show>
								<Pill type="success">
									{__('Active', 'neve')}
								</Pill>
							</TransitionInOut>
						</div>
					)}
				</div>
				<p className="text-sm leading-relaxed text-gray-600 mt-1">
					{description}
				</p>

				{error && (
					<div className="mt-2">
						<Toast
							type="error"
							dismiss={setError}
							message={error}
						/>
					</div>
				)}
			</div>
		</div>
	);
};

const PluginsCard = () => {
	const { plugins } = neveDash;

	if (NEVE_HIDE_PLUGINS || plugins.length < 1) {
		return null;
	}

	return (
		<Card title={__('Recommended Plugins', 'neve')} className="space-y-3">
			{Object.entries(plugins).map(([slug, args]) => (
				<PluginCard key={slug} slug={slug} data={args} />
			))}
		</Card>
	);
};

export default PluginsCard;
