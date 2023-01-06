import InstallActivate from './InstallActivate';
import { useState } from '@wordpress/element';
import { compose } from '@wordpress/compose';
import { withDispatch } from '@wordpress/data';
import { useEffect } from 'react';

const MultiInstallActivate = ({
	slug,
	plugins,
	buttonLabels,
	changeModuleStatus,
}) => {
	plugins = plugins.filter((p) =>
		['install', 'activate'].includes(p.pluginState)
	);

	const installActivateNeeded = plugins.length > 0;

	const [pluginIndex, setPluginIndex] = useState(0);
	const [autoInstall, setAutoInstall] = useState(false);
	const [showCTA, setShowCTA] = useState(installActivateNeeded);
	const pluginData = plugins[pluginIndex];

	// if there are needed plugins, set module status as false to do not show action buttons.
	useEffect(() => {
		if (installActivateNeeded) {
			changeModuleStatus(slug, false);
		}
	}, []);

	return (
		showCTA &&
		['install', 'activate'].includes(pluginData.pluginState) && (
			<InstallActivate
				labels={buttonLabels[pluginData.slug]}
				pluginData={pluginData}
				autoInstall={autoInstall}
				successActivation={(setCurrentState) => {
					if (plugins.length - 1 === pluginIndex) {
						setShowCTA(false);
						changeModuleStatus(slug, true);
						return;
					}

					setPluginIndex(pluginIndex + 1);
					setCurrentState(pluginData.pluginState);
					setAutoInstall(true);
				}}
			/>
		)
	);
};

export default compose(
	withDispatch((dispatch) => {
		const { changeModuleStatus } = dispatch('neve-dashboard');
		return {
			changeModuleStatus,
		};
	})
)(MultiInstallActivate);
