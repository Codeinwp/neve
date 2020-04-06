import EditorSelector from './EditorSelector';
import StarterSiteCard from './StarterSiteCard';

const {useState} = wp.element;
const {__} = wp.i18n;
const {withSelect} = wp.data;

const Onboarding = ({sites, upsells}) => {
	const [ selectedEditor, selectEditor ] = useState('elementor');
	const [ searchQuery, setSearchQuery ] = useState('');

	function filterSites(sites) {

		if (! searchQuery) {
			return sites;
		}
		return Object.keys(sites).reduce((results, slug) => {
			console.log(results);
			return -1 === sites[slug].title.toLowerCase().indexOf(searchQuery.toLowerCase()) ?
				results :
				{
					...results,
					[slug]: sites[slug]
				};
		}, {});
	}

	function renderSites() {
		if (! sites[selectedEditor]) {
			return null;
		}
		const filtered = filterSites(sites[selectedEditor]);
		return Object.keys(filtered).map((slug) => {
			return <StarterSiteCard slug={slug} data={filtered[slug]}/>;
		});

	}

	function renderUpsells() {
		if (! upsells[selectedEditor]) {
			return null;
		}
		const filtered = filterSites(upsells[selectedEditor]);
		return Object.keys(filtered).map((slug) => {
			return <StarterSiteCard upsell={true} slug={slug} data={filtered[slug]}/>;
		});
	}

	return (
		<div className="ob">
			<div className="ob-head">
				<h2>{__('Ready to use pre-built websites with 1-click installation', 'neve')}</h2>
				<p>{__('With Neve, you can choose from multiple unique demos, specially designed for you, that can be installed with a single click. You just need to choose your favorite, and we will take care of everything else.', 'neve')}</p>
			</div>
			<div className="ob-body">
				<EditorSelector
					onSearch={(query) => {
						setSearchQuery(query);
					}}
					query={searchQuery}
					selected={selectedEditor}
					onChange={(editor) => {
						selectEditor(editor);
					}}/>

				<div className="ob-sites">
					{sites && renderSites()}
					{upsells && renderUpsells()}
				</div>
			</div>
		</div>
	);
};


export default withSelect((select) => {
	const {getSites, getUpsells} = select('neve-onboarding');
	return {
		sites: getSites(),
		upsells: getUpsells()
	};
})(Onboarding);
