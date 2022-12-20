import InstallActivate from './InstallActivate';
import { useState, useEffect } from '@wordpress/element';

const MultiInstallActivate = ({ plugins, buttonLabels }) => {
	const installActivatePlugins = plugins.filter((p) => ['install', 'activate'].includes(p.pluginState));
	console.log(installActivatePlugins)

	const installActivateNeeded = installActivatePlugins.length > 0;
	console.log(installActivateNeeded);

	const [pluginIndex, setPluginIndex] = useState(0);
	const [autoInstall, setAutoInstall] = useState(false);
	const [showCTA, setShowCTA] = useState(installActivateNeeded);
	const pluginData = plugins[pluginIndex];

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

export default MultiInstallActivate;
