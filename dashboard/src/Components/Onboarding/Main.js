import EditorSelector from './EditorSelector';
import StarterSiteCard from './StarterSiteCard';

const {useState} = wp.element;
const {__} = wp.i18n;

const Onboarding = ({sites, upsells}) => {
	const [ selectedEditor, selectEditor ] = useState('elementor');

	function renderSites() {

		if (! sites) {
			return null;
		}
		return Object.keys(sites[selectedEditor]).map((slug) => {
			return <StarterSiteCard slug={slug} data={sites[selectedEditor][slug]}/>;
		});
	}

	return (
		<div className="ob">
			<div className="ob-head">
				<h2>{__('Ready to use pre-built websites with 1-click installation', 'neve')}</h2>
				<p>{__('With Neve, you can choose from multiple unique demos, specially designed for you, that can be installed with a single click. You just need to choose your favorite, and we will take care of everything else.', 'neve')}</p>
			</div>
			<div className="ob-body">
				<EditorSelector selected={selectedEditor} onChange={(editor) => {
					selectEditor(editor);
				}}/>

				<div className="ob-sites">
					{renderSites()}
				</div>
			</div>
		</div>
	);
};


export default compose(
	withSelect((select) => {
		const {getSites, getUpsells} = select('neve-onboarding');
		return {
			sites: getSites(),
			upsells: getUpsells()
		};
	})
)(Onboarding);
