/* global neveDash */
import PluginCard from '../PluginCard';

const {withSelect} = wp.data;
const {Fragment} = wp.element;

const Header = ({plugins}) => {
	if (! plugins) {
		return null;
	}

	return (
		<Fragment>
			{
				Object.keys(plugins).map((slug) => {
					return <PluginCard key={slug} slug={slug} data={plugins[slug]}/>;
				})
			}
		</Fragment>
	);
};

export default withSelect(select => {
	const {getPlugins} = select('neve-dashboard');
	return {
		plugins: getPlugins()
	};
})(Header);
