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

const Onboarding = ({editor, previewOpen, currentSiteData, importModal, isOnboarding, cancelOnboarding}) => {
	const [ searchQuery, setSearchQuery ] = useState('');
	const [ maxShown, setMaxShown ] = useState(9);
	const {sites, upsells, migration} = neveDash.onboarding.sites || null;
	const tags = [
		__('Business', 'neve'),
		__('Ecommerce', 'neve'),
		__('Fashion', 'neve'),
		__('Blogging', 'neve'),
		__('Photography', 'neve')
	];

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
		const upsellsData = upsells && upsells[editor] ? filterSites(upsells[editor]).map(i => {
			i.upsell = true;
			return i;
		}) : [];
		return [ ...sitesData, ...upsellsData ];
	};

	const renderSites = () => {
		const allData = getAllSites();
		return allData.slice(0, maxShown).map(site => {
			return <StarterSiteCard data={site}/>;
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
					<p>{neveDash.strings.starterSitesTabDescription}</p>
					{isOnboarding &&
					<Button isPrimary onClick={cancelOnboarding}>{__('Keep the Current Layout', 'neve')}</Button>}
				</div>
				<div className="ob-body">
					<EditorSelector
						onSearch={(query) => {
							setSearchQuery(query);
							setMaxShown(9);
						}}
						query={searchQuery}
					/>
					{0 === getAllSites().length ?
						<div className="no-results">
							<p>{__('No results found for', 'neve')} <span> {searchQuery}</span>. {__('You can try a different search or use one of the categories below.', 'neve')}</p>
							<div className="tags">
								{tags.map(tag => {
									return <Button isPrimary className="tag" onClick={(e) => {
										e.preventDefault();
										setSearchQuery(tag);
									}}>{tag}</Button>;
								})}
							</div>
						</div> :
						<div className="ob-sites">
							{renderSites()}
						</div>
					}
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
			cancelOnboarding: () => {
				setOnboardingState(false);
			}
		};
	}),
	withSelect(select => {
		const {
			getCurrentEditor,
			getPreviewStatus,
			getCurrentSite,
			getImportModalStatus,
			getOnboardingStatus
		} = select('neve-onboarding');
		return {
			editor: getCurrentEditor(),
			previewOpen: getPreviewStatus(),
			currentSiteData: getCurrentSite(),
			importModal: getImportModalStatus(),
			isOnboarding: getOnboardingStatus()
		};
	})
)(Onboarding);
