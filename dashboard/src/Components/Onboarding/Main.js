import EditorSelector from './EditorSelector';
import StarterSiteCard from './StarterSiteCard';
import PreviewFrame from './PreviewFrame';
import ImportModal from './ImportModal';
import Migration from './Migration';
import VizSensor from 'react-visibility-sensor';
import Fuse from 'fuse.js';

const {useState, Fragment} = wp.element;
const {Button} = wp.components;
const {__} = wp.i18n;
const {withSelect, withDispatch} = wp.data;
const {compose} = wp.compose;

const Onboarding = ({sites, upsells, editor, previewOpen, currentSiteData, importModal, isOnboarding, cancelOnboarding, migration}) => {
	const [ searchQuery, setSearchQuery ] = useState('');
	const [ maxShown, setMaxShown ] = useState(9);

	const filterSites = (sites) => {
		Object.keys(sites).map((slug) => {
			sites[slug].slug = slug;
		});

		sites = Object.values(sites);

		if (! searchQuery) {
			return sites;
		}

		const fuse = new Fuse(sites, {
			includeScore: true,
			keys: [ 'title', 'slug', 'keywords' ]
		});
		const search = fuse.search(searchQuery);
		return search.map(item => item.item);
	};

	const getAllSites = () => {
		const sitesData = sites && sites[editor] ? filterSites(sites[editor]) : [];
		const upsellsData = upsells && upsells[editor] ? filterSites(upsells[editor]) : [];
		return [ ...sitesData, ...upsellsData ];
	};

	const renderSites = () => {
		const allData = getAllSites();

		return allData.slice(0, maxShown).map(site => {
			return <StarterSiteCard upsell={site['in_pro']} data={site}/>;
		});
	};

	const getSiteNav = (prev = false) => {
		if (null === currentSiteData) {
			return null;
		}
		const allSites = getAllSites();
		const position = allSites.indexOf(currentSiteData);

		if (-1 === position) {
			return null;
		}

		if (1 === allSites.length) {
			return null;
		}

		if (prev && 0 === position) {
			return allSites[allSites.length - 1];
		}

		if (! prev && position === allSites.length - 1) {
			return allSites[0];
		}

		return allSites[prev ? position - 1 : position + 1];
	};

	function renderMigration() {
		if (! migration) {
			return null;
		}
		return <Migration data={migration}/>;
	}

	return (
		<Fragment>
			<div className="ob">
				{renderMigration()}
				<div className="ob-head">
					<h2>{__('Ready to use pre-built websites with 1-click installation', 'neve')}</h2>
					<p>{isOnboarding ?
						__('With Neve, you can choose from multiple unique demos, specially designed for you, that can be installed with a single click.', 'neve') :
						__('With Neve, you can choose from multiple unique demos, specially designed for you, that can be installed with a single click. You just need to choose your favorite, and we will take care of everything else.', 'neve')
					}</p>
					{isOnboarding &&
					<Button isPrimary onClick={cancelOnboarding}>{__('Keep the Current Layout', 'neve')}</Button>}
				</div>
				<div className="ob-body">
					<EditorSelector
						onSearch={(query) => {
							setSearchQuery(query);
							setMaxShown(9);
						}}
						query={searchQuery}/>
					<div className="ob-sites">
						{(sites || upsells) && renderSites()}
					</div>
					<VizSensor onChange={(isVisible) => {
						if (! isVisible) {
							return false;
						}
						setMaxShown(maxShown + 9);
					}}>
						<span style={{height: 10, width: 10, display: 'block'}}/>
					</VizSensor>
				</div>
			</div>
			{(previewOpen && currentSiteData) && <PreviewFrame next={getSiteNav()} prev={getSiteNav(true)}/>}
			{(importModal && currentSiteData) && <ImportModal/>}
		</Fragment>
	);
};


export default compose(
	withDispatch(dispatch => {
		const {setOnboardingState} = dispatch('neve-onboarding');
		return {
			cancelOnboarding: () => setOnboardingState(false)
		};
	}),
	withSelect(select => {
		const {
			getSites,
			getUpsells,
			getCurrentEditor,
			getPreviewStatus,
			getCurrentSite,
			getImportModalStatus,
			getOnboardingStatus,
			getMigrationData
		} = select('neve-onboarding');
		return {
			sites: getSites(),
			upsells: getUpsells(),
			editor: getCurrentEditor(),
			previewOpen: getPreviewStatus(),
			currentSiteData: getCurrentSite(),
			importModal: getImportModalStatus(),
			isOnboarding: getOnboardingStatus(),
			migration: getMigrationData()
		};
	})
)(Onboarding);
