/*global neveDash*/
import {installPlugins, importContent, importMods, importWidgets} from '../../utils/site-import';
import ImportStepper from './ImportStepper';
import classnames from 'classnames';

const {withSelect, withDispatch} = wp.data;
const {compose} = wp.compose;
const {Button, Dashicon, ToggleControl} = wp.components;
const {useState, useEffect, Fragment} = wp.element;
const {__} = wp.i18n;

const ImportModal = ({setModal, setSite, editor, siteData, importing, setImporting}) => {
	const [ general, setGeneral ] = useState({
		content: true,
		customizer: true,
		widgets: true
	});
	const [ pluginsProgress, setPluginsProgress ] = useState(false);
	const [ contentProgress, setContentProgress ] = useState(false);
	const [ customizerProgress, setCustomizerProgress ] = useState(false);
	const [ widgetsProgress, setWidgetsProgress ] = useState(false);
	const [ pluginOptions, setPluginOptions ] = useState({});
	const [ frontPageID, setFrontPageID ] = useState(null);
	const [ currentStep, setCurrentStep ] = useState(null);

	useEffect(() => {
		const mandatory = {...(siteData['mandatory_plugins'] || {})};
		const optional = {...(siteData['recommended_plugins'] || {})};
		const defaultOff = siteData['default_off_recommended_plugins'] || [];

		Object.keys(mandatory).map((key) => {
			mandatory[key] = true;
		});
		Object.keys(optional).map((key) => {
			optional[key] = ! defaultOff.includes(key);
		});

		setPluginOptions({
			...optional,
			...mandatory
		});
	}, []);


	const renderNote = () => {
		return (
			<div className="note">
				<h3><Dashicon icon="info"/><span>{__('Note', 'neve')}:</span></h3>
				<ol>
					<li>{__('We recommend you backup your website content before attempting a full site import.', 'neve')}</li>
					<li>{__('Some of the demo images will not be imported and will be replaced by placeholder images.', 'neve')}</li>
					{siteData['unsplash_gallery'] &&
					<li>
						<a
							href={siteData['unsplash_gallery']}>
							{__('Here is our own collection of related images you can use for your site.', 'neve')}
						</a>
					</li>
					}
				</ol>
			</div>
		);
	};

	const renderOptions = () => {
		const map = {
			content: {
				title: __('Content', 'neve'),
				icon: 'admin-post'
			},
			customizer: {
				title: __('Customizer', 'neve'),
				icon: 'admin-customizer'
			},
			widgets: {
				title: __('Widgets', 'neve'),
				icon: 'admin-generic'
			}
		};
		return (
			<div className="options general">
				<h3>{__('General', 'neve')}:</h3>
				<ul>
					{Object.keys(map).map((id) => {
						return (
							<li>
								<Dashicon className={classnames({'active': general[id]})} icon={map[id].icon}/>
								<span>{map[id].title}</span>
								<div className="toggle-wrapper">
									<ToggleControl
										checked={general[id]}
										onChange={() => {
											setGeneral({...general, [id]: ! general[id]});
										}}
									/>
								</div>
							</li>
						);
					})}
				</ul>
			</div>
		);
	};

	const renderPlugins = () => {
		const allPlugins = {...(siteData['recommended_plugins'] || {}), ...(siteData['mandatory_plugins'] || {})};

		return (
			<div className="options plugins">
				<h3>{__('Plugins', 'neve')}:</h3>
				<ul>
					{Object.keys(allPlugins).map((slug) => {
						return (
							<li>
								<Dashicon icon="admin-plugins" className={classnames({'active': pluginOptions[slug]})}/>
								<span dangerouslySetInnerHTML={{__html: allPlugins[slug]}}/>
								{slug in siteData['recommended_plugins'] &&
								<div className="toggle-wrapper">
									<ToggleControl
										checked={pluginOptions[slug]}
										onChange={() => {
											setPluginOptions({...pluginOptions, [slug]: ! pluginOptions[slug]});
										}}
									/>
								</div>
								}
							</li>
						);
					})}
				</ul>
			</div>
		);
	};

	const runImport = () => {
		console.clear();
		if (! pluginOptions) {
			console.log('[S] Plugins.');
			runImportContent();
			return false;
		}
		setCurrentStep('plugins');
		console.log('[P] Plugins.');
		installPlugins(pluginOptions).then(response => {
			if (! response.success) {
				setPluginOptions('error');
				return false;
			}
			console.log('[D] Plugins.');
			setPluginsProgress('done');
			runImportContent();
		});
	};

	const runImportContent = () => {
		if (! general.content) {
			console.log('[S] Content.');
			runImportCustomizer();
			return false;
		}
		setCurrentStep('content');
		console.log('[P] Content.');
		importContent({
			contentFile: siteData['content_file'],
			source: siteData.source,
			frontPage: siteData['front_page'],
			shopPages: siteData['shop_pages'],
			demoSlug: siteData.slug,
			editor
		}).then(response => {
			if (! response.success) {
				setContentProgress('error');
				return false;
			}
			console.log('[D] Content.');
			if (response['frontpage_id']) {
				setFrontPageID(response['frontpage_id']);
			}
			setContentProgress('done');
			runImportCustomizer();
		});
	};

	const runImportCustomizer = () => {
		if (! general.customizer) {
			console.log('[S] Customizer.');
			runImportWidgets();
			return false;
		}
		setCurrentStep('customizer');
		console.log('[P] Customizer.');
		importMods({
			'source_url': siteData['demo_url'],
			'theme_mods': siteData['theme_mods'],
			'wp_options': siteData['wp_options']
		}).then(response => {
			if (! response.success) {
				setCustomizerProgress('error');
				return false;
			}
			console.log('[D] Customizer.');
			setCustomizerProgress('done');
			runImportWidgets();
		});
	};

	const runImportWidgets = () => {
		if (! general.widgets) {
			console.log('[S] Widgets.');
			importDone();
		}
		setCurrentStep('widgets');
		console.log('[P] Widgets.');
		importWidgets(siteData.widgets).then(response => {
			if (! response.success) {
				setWidgetsProgress('error');
				return false;
			}
			console.log('[D] Widgets.');
			setWidgetsProgress('done');
			importDone();
		});
	};

	const importDone = () => {
		console.log('[D] Done.');
		setCurrentStep('done');
		setImporting(false);
	};

	const allOptionsOff = Object.keys(general).every(k => false === general[k]);
	const editLinkMap = {
		'elementor': `${neveDash.onboarding.homeUrl}/wp-admin/post.php?post=${frontPageID}&action=elementor`,
		'brizy': `${neveDash.onboarding.homeUrl}/?brizy-edit`,
		'beaver builder': `${neveDash.onboarding.homeUrl}/?fl_builder`,
		'thrive architect': `${neveDash.onboarding.homeUrl}/wp-admin/post.php?post=${frontPageID}&action=architect&tve=true`,
		'divi builder': `${neveDash.onboarding.homeUrl}/?et_fb=1&PageSpeed=off`,
		'gutenberg': `${neveDash.onboarding.homeUrl}/wp-admin/post.php?post=${frontPageID}&action=edit`
	};

	const closeModal = () => {
		if (importing) {
			return false;
		} else {
			setModal(false);
			setSite(null);
		}
	};

	const editLink = editLinkMap[editor];
	console.log('importing:', importing);
	return (
		<div className="ob-import-modal-wrap">
			<div className="ob-import-modal">
				<div className="modal-header" style={{backgroundImage: `url(${siteData.screenshot})`}}>
					<Button
						disabled={importing}
						icon="no-alt"
						onClick={closeModal}/>
					<h2>{siteData.title}</h2>
				</div>
				<div className="modal-body">
					{! importing && 'done' !== currentStep ?
						<Fragment>
							{renderNote()}
							<hr/>
							{renderOptions()}
							<hr/>
							{renderPlugins()}
						</Fragment> :
						<Fragment>
							<ImportStepper progress={{
								plugins: pluginsProgress,
								content: contentProgress,
								customizer: customizerProgress,
								widgets: widgetsProgress
							}} currentStep={currentStep} willDo={general}/>
						</Fragment>
					}
				</div>
				{! importing &&
				<div className="modal-footer">
					{'done' !== currentStep ?
						<Fragment>
							<Button
								isSecondary
								onClick={closeModal}>
								{__('Close', 'neve')}
							</Button>
							<Button
								isPrimary
								disabled={allOptionsOff}
								onClick={() => {
									setImporting(true);
									runImport();
								}}>
								{__('Import', 'neve')}
							</Button>
						</Fragment> :
						<Fragment>
							<Button
								isSecondary
								href={neveDash.onboarding.homeUrl}
							>{__('View Website', 'neve')}</Button>
							<Button isPrimary href={editLink}>
								{__('Add your own content', 'neve')}
							</Button>
						</Fragment>
					}
				</div>
				}
			</div>
		</div>
	);
};

export default compose(
	withSelect((select) => {
		const {getCurrentEditor, getCurrentSite, getImportingStatus} = select('neve-onboarding');
		return {
			editor: getCurrentEditor(),
			siteData: getCurrentSite(),
			importing: getImportingStatus()
		};
	}),
	withDispatch((dispatch) => {
		const {setImportModalStatus, setCurrentSite, setImporting} = dispatch('neve-onboarding');
		return {
			setImporting: (status) => setImporting(status),
			setModal: (status) => setImportModalStatus(status),
			setSite: (data) => setCurrentSite(data)
		};
	})
)(ImportModal);
