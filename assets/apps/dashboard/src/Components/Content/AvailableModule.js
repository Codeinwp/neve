/* global neveDash */
import { __ } from '@wordpress/i18n';
import {
	NEVE_AVAILABLE_MODULES_ICON_MAP,
	NEVE_STORE,
} from '../../utils/constants';
import { ArrowRight, LoaderCircle, LucideSettings } from 'lucide-react';
import Card from '../../Layout/Card';
import { useState } from '@wordpress/element';
import { useDispatch, useSelect } from '@wordpress/data';
import Toggle from '../Common/Toggle';
import { send } from '../../utils/rest';

const Toast = ({ message }) => {
	return (
		<div className="fixed flex items-center gap-2 z-[99999] top-10 right-5 bg-white text-black text-base font-medium px-4 py-2 rounded shadow border border-solid border-blue-600">
			{message}
		</div>
	);
};

const ModuleToggle = ({
	slug,
	moduleData,
	setMessage,
	isActive,
	setIsActive,
	isInstalled,
	setIsInstalled,
}) => {
	const [loading, setLoading] = useState(false);
	const { changeModuleStatus, setObfxModuleStatus, setToast } =
		useDispatch(NEVE_STORE);
	const { moduleStatus } = useSelect((select) => {
		const { getObfxModuleStatus } = select(NEVE_STORE);

		return {
			moduleStatus: getObfxModuleStatus(slug) || false,
		};
	});

	const { api } = neveDash;
	const { title } = moduleData;
	const toastMessage = {
		installing: __('Installing', 'neve'),
		activating: __('Activating', 'neve'),
	};

	const handleToggle = async (value) => {
		try {
			setLoading(true);
			changeModuleStatus(slug, value);

			let isPluginActive = true;
			// Handle plugin installation or activation
			if (!isInstalled) {
				setMessage(toastMessage.installing);
				isPluginActive = false;
			} else if (!isActive) {
				setMessage(toastMessage.activating);
				isPluginActive = false;
			}

			if (!isPluginActive) {
				await send(api + 'activate-plugin', {
					slug: 'themeisle-companion',
				}).then((res) => {
					if (res.success) {
						setIsInstalled(true);
						setIsActive(true);
					}
				});
			}

			// Fire the send method after install/activate or immediately if both are done
			const response = await send(api + 'activate-module', {
				slug,
				value,
			});

			setObfxModuleStatus(slug, response.success ? value : !value);
			setToast(
				response.success
					? (value
							? __('Module Activated', 'neve')
							: __('Module Deactivated.', 'neve')) + ` (${title})`
					: response.data
			);
		} catch (error) {
			setToast(
				__(
					'Something went wrong. Please reload the page and try again.',
					'neve'
				)
			);
		} finally {
			setLoading(false);
			setMessage('');
		}
	};

	return (
		<div className="flex gap-2 items-center">
			<Toggle
				checked={moduleStatus}
				onToggle={handleToggle}
				disabled={loading}
			/>
		</div>
	);
};

const AvailableModuleCard = ({
	moduleData,
	slug,
	setMessage,
	isActive,
	setIsActive,
	isInstalled,
	setIsInstalled,
}) => {
	const { title, description } = moduleData;
	const CardIcon = NEVE_AVAILABLE_MODULES_ICON_MAP[slug] || LucideSettings;

	return (
		<Card
			icon={<CardIcon size={18} />}
			title={title}
			className="bg-white p-6 rounded-lg shadow-sm"
			afterTitle={
				<ModuleToggle
					slug={slug}
					moduleData={moduleData}
					setMessage={setMessage}
					isActive={isActive}
					setIsActive={setIsActive}
					isInstalled={isInstalled}
					setIsInstalled={setIsInstalled}
				/>
			}
			id={`module-${slug}`}
		>
			<p className="text-gray-600 text-sm leading-relaxed">
				{description}
			</p>
			{!isActive ? (
				<p className="mt-2 italic text-sm text-gray-500">
					{__(
						'This feature is part of OrbitFox plugin, built by the Neve team. Enabling the toggle will automatically install and activate the plugin.',
						'neve'
					)}
				</p>
			) : (
				<a
					className="flex mt-2 text-blue-600 gap-2 align-middle"
					href="admin.php?page=obfx_companion"
				>
					{__('Settings', 'neve')}
					<ArrowRight size={18} />
				</a>
			)}
		</Card>
	);
};

export default () => {
	const [message, setMessage] = useState('');
	const [isInstalled, setIsInstalled] = useState(
		neveDash.orbitFox.isInstalled
	);
	const [isActive, setIsActive] = useState(neveDash.orbitFox.isActive);

	return (
		<>
			<div className="mb-6">
				<div className="flex items-center justify-between">
					<h2 className="text-lg font-semibold">
						{__('Available Modules', 'neve')}
					</h2>
				</div>
				<div className="grid xl:grid-cols-2 gap-6">
					{Object.entries(neveDash.availableModules).map(
						([slug, moduleData]) => (
							<AvailableModuleCard
								key={slug}
								slug={slug}
								moduleData={moduleData}
								setMessage={setMessage}
								isActive={isActive}
								setIsActive={setIsActive}
								isInstalled={isInstalled}
								setIsInstalled={setIsInstalled}
							/>
						)
					)}
				</div>
			</div>
			{message && (
				<Toast
					message={
						<>
							<LoaderCircle
								size={18}
								className="animate-spin text-blue-800"
							/>
							{message}
						</>
					}
				/>
			)}
		</>
	);
};
