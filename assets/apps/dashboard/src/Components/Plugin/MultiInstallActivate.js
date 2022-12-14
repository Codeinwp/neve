import InstallActivate from './InstallActivate';
import { useState, useEffect } from '@wordpress/element';

const MultiInstallActivate = ({ plugins, buttonLabels }) => {
	// Sorts plugins as will be installed first, then will be activated ones.
	const sortPlugins = () => {
		plugins.sort((plugin1) =>
			['activate'].includes(plugin1.pluginState) ? -1 : 0
		);
		plugins.sort((plugin1) =>
			['install'].includes(plugin1.pluginState) ? -1 : 0
		);
	};

	const installActivateNeeded =
		plugins.filter((p) => ['install', 'activate'].includes(p.pluginState))
			.length > 0;

	useEffect(() => {
		sortPlugins();
	}, []);

	const [pluginIndex, setPluginIndex] = useState(0);
	const [autoInstall, setAutoInstall] = useState(false);
	const [showCTA, setShowCTA] = useState(installActivateNeeded);
	const { name, slug, pluginState, activateURL } = plugins[pluginIndex];

	return (
		showCTA &&
		['install', 'activate'].includes(pluginState) && (
			<InstallActivate
				labels={buttonLabels}
				name={name}
				slug={slug}
				pluginState={pluginState}
				activateURL={activateURL}
				autoInstall={autoInstall}
				successActivation={(setCurrentState) => {
					if (plugins.length - 1 === pluginIndex) {
						setShowCTA(false);
						return;
					}

					setPluginIndex(pluginIndex + 1);
					setCurrentState(pluginState);
					setAutoInstall(true);
				}}
			/>
		)
	);
};

export default MultiInstallActivate;
