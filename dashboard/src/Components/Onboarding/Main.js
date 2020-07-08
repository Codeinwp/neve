import Search from './Search';
import StarterSiteCard from './StarterSiteCard';
import PreviewFrame from './PreviewFrame';
import ImportModal from './ImportModal';
import Migration from './Migration';
import VizSensor from 'react-visibility-sensor';
import Fuse from 'fuse.js/dist/fuse.min';
import EditorTabs from './EditorTabs';
import EditorSelector from './EditorSelector';

const { useState, Fragment } = wp.element;
const { Button } = wp.components;
const { __ } = wp.i18n;
const { withSelect, withDispatch } = wp.data;
const { compose } = wp.compose;

const Onboarding = ({ editor, category, resetCategory, previewOpen, currentSiteData, importModal, isOnboarding, cancelOnboarding, getSites }) => {
  const [ searchQuery, setSearchQuery ] = useState('');
  const [ maxShown, setMaxShown ] = useState(9);
  const { sites = {}, migration } = getSites;

  const tags = [
    __('Business', 'neve'),
    __('Ecommerce', 'neve'),
    __('Fashion', 'neve'),
    __('Blogging', 'neve'),
    __('Photography', 'neve')
  ];

  const CATEGORIES = {
    'all': __('All Categories'),
    'free': __('Free'),
    'business': __('Business'),
    'portfolio': __('Portfolio'),
    'woocommerce': __('WooCommerce'),
    'blog': __('Blog'),
    'personal': __('Personal'),
    'other': __('Other')
  };

  const EDITOR_MAP = {
    'elementor': {
      icon: 'elementor.jpg',
      niceName: 'Elementor'
    },
    'beaver builder': {
      icon: 'beaver.jpg',
      niceName: 'Beaver Builder'
    },
    'gutenberg': {
      icon: 'gutenberg.jpg',
      niceName: 'Gutenberg'
    },
    'brizy': {
      icon: 'brizy.jpg',
      niceName: 'Brizy'
    },
    'divi builder': {
      icon: 'divi.jpg',
      niceName: 'Divi'
    },
    'thrive architect': {
      icon: 'thrive.jpg',
      niceName: 'Thrive Architect'
    }
  };

  const getAllSites = () => {
    const finalData = {};
    const builders = getBuilders();

    builders.map(builder => {
      const sitesData = sites && sites[builder] ? sites[builder] : {};
      finalData[builder] = [ ...Object.values(sitesData) ];
    });

    return finalData;
  };

  const filterByCategory = (sites, category) => {
    if ( 'free' === category ) {
      return sites.filter(item => ! item.upsell);
    }

    if ('all' !== category) {
      return sites.filter(item => item.keywords.includes(category));
    }

    return sites;
  };

  const filterBySearch = sites => {
    if (! searchQuery) {
      return sites;
    }

    const fuse = new Fuse(sites, {
      includeScore: true,
      keys: [ 'title', 'slug', 'keywords' ]
    });
    return fuse.search(searchQuery).map(item => item.item);
  };

  const getSitesForBuilder = builder => {
    const allSites = getAllSites();
    return allSites[builder];
  };

  const getBuilders = () => Object.keys(EDITOR_MAP);

  const getCounts = () => {
    let counts = {
      builders: {},
      categories: {}
    };
    const builders = getBuilders();

    builders.map(builder => {
      let buildersFiltered = getSitesForBuilder(builder);
      buildersFiltered = filterByCategory(buildersFiltered, category);
      buildersFiltered = filterBySearch(buildersFiltered);
      counts.builders[builder] = buildersFiltered ? buildersFiltered.length : 0;
    });

    Object.keys(CATEGORIES).map(category => {
      let categoriesFiltered = getSitesForBuilder(editor);
      categoriesFiltered = filterByCategory(categoriesFiltered, category);
      categoriesFiltered = filterBySearch(categoriesFiltered);
      counts.categories[category] = categoriesFiltered ?
        categoriesFiltered.length :
        0;
    });

    return counts;
  };

  const getFilteredSites = () => {
    let allSites = getAllSites();
    let builderSites = allSites[editor];
    builderSites = filterBySearch(builderSites);
    builderSites = filterByCategory(builderSites, category);

    return builderSites;
  };

  const renderSites = () => {
    const allData = getFilteredSites();
    return allData.slice(0, maxShown).map(site => {
      return <StarterSiteCard data={site}/>;
    });
  };

  const getSiteNav = (prev = false) => {
    if (null === currentSiteData) {
      return null;
    }
    const allSites = getAllSites()[editor];
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

  const onlyProBuilders = getBuilders().filter(builder => {
    const upsellSitesCount = Object.keys(sites[builder]).filter(site => true === sites[builder][site].upsell).length;
    const sitesCount = Object.keys(sites[builder]).length;

    return upsellSitesCount === sitesCount;
  });

  const counted = getCounts();

  return (
    <Fragment>
      <div className="ob">
        {renderMigration()}
        <div className="ob-head">
          <h2>{__('Ready to use pre-built websites with 1-click installation', 'neve')}</h2>
          <p>{neveDash.strings.starterSitesTabDescription}</p>
          {isOnboarding &&
          <Button isPrimary onClick={cancelOnboarding}>{__(
            'Keep the Current Layout', 'neve')}</Button>}
        </div>
        <div className="ob-body">
          <EditorSelector count={counted.builders} EDITOR_MAP={EDITOR_MAP}/>
          <Search
            count={counted.categories}
            categories={CATEGORIES}
            onSearch={(query) => {
              setSearchQuery(query);
              setMaxShown(9);
            }}
            query={searchQuery}
          />
          <EditorTabs
            EDITOR_MAP={EDITOR_MAP}
            onlyProSites={onlyProBuilders}
            count={counted.builders}
          />
          {0 === getFilteredSites().length ?
            <div className="no-results">
              <p>{__('No results found', 'neve')}
                . {__(
                  'You can try a different search or use one of the categories below.',
                  'neve')}</p>
              <div className="tags">
                {tags.map(tag => {
                  return <Button isPrimary className="tag" onClick={(e) => {
                    e.preventDefault();
                    setSearchQuery(tag);
                    resetCategory();
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
            <span style={{
              height: 10,
              width: 10,
              display: 'block'
            }}/>
          </VizSensor>
        </div>
      </div>
      {(previewOpen && currentSiteData) &&
      <PreviewFrame next={getSiteNav()} prev={getSiteNav(true)}/>}
      {(importModal && currentSiteData) && <ImportModal/>}
    </Fragment>
  );
};

export default compose(
  withDispatch(dispatch => {
    const { setOnboardingState, setCurrentCategory } = dispatch(
      'neve-onboarding');
    return {
      cancelOnboarding: () => {
        setOnboardingState(false);
      },
      resetCategory: () => {
        setCurrentCategory('all');
      }
    };
  }),
  withSelect(select => {
    const {
      getCurrentEditor,
      getCurrentCategory,
      getPreviewStatus,
      getCurrentSite,
      getImportModalStatus,
      getOnboardingStatus,
      getSites
    } = select('neve-onboarding');
    return {
      editor: getCurrentEditor(),
      category: getCurrentCategory(),
      previewOpen: getPreviewStatus(),
      currentSiteData: getCurrentSite(),
      importModal: getImportModalStatus(),
      isOnboarding: getOnboardingStatus(),
      getSites: getSites()
    };
  })
)(Onboarding);
