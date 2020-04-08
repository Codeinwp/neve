import OnClickOutside from '../Utils/OnClickOutside';
import classnames from 'classnames';
import {installPlugins, importContent, importMods, importWidgets} from '../../utils/site-import';

const {withSelect, withDispatch} = wp.data;
const {compose} = wp.compose;
const {Button, Dashicon, ToggleControl} = wp.components;
const {useState, useEffect} = wp.element;
const {__} = wp.i18n;

const ImportModal = ({setModal, setSite, editor, siteData}) => {
	const [ general, setGeneral ] = useState({
		content: true,
		customizer: true,
		widgets: true
	});

	const [ pluginOptions, setPluginOptions ] = useState({});
	const [ frontPageID, setFrontPageID ] = useState(null);

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

	const allOptionsOff = Object.keys(general).every(k => false === general[k]);

	const importDone = () => {
		console.log('[D] Done.');
	};

	const runImportWidgets = () => {
		if (! general.widgets) {
			console.log('[S] Widgets.');
			importDone();
		}
		console.log('[P] Widgets.');
		importWidgets(siteData.widgets).then(response => {
			if (! response.success) {

				//Handle Error.
				return false;
			}
			console.log('[D] Widgets.');
			importDone();
		});
	};

	const runImportCustomizer = () => {
		if (! general.customizer) {
			console.log('[S] Customizer.');
			runImportWidgets();
			return false;
		}
		console.log('[P] Customizer.');
		importMods({
			'source_url': siteData['demo_url'],
			'theme_mods': siteData['theme_mods'],
			'wp_options': siteData['wp_options']
		}).then(response => {
			if (! response.success) {

				//Handle Error.
				return false;
			}
			console.log('[D] Customizer.');
			runImportWidgets();
		});
	};

	const runImportContent = () => {
		if (! general.content) {
			console.log('[S] Content.');
			runImportCustomizer();
			return false;
		}
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

				//Handle Error.
				return false;
			}
			console.log('[D] Content.');
			if (response['frontpage_id']) {
				setFrontPageID(response['frontpage_id']);
			}
			runImportCustomizer();
		});
	};

	const runImport = () => {
		console.clear();
		if (! pluginOptions) {
			console.log('[S] Plugins.');
			runImportContent();
			return false;
		}

		console.log('[P] Plugins.');
		installPlugins(pluginOptions).then(response => {
			if (! response.success) {

				// Handle Error.
				return false;
			}
			console.log('[D] Plugins.');
			runImportContent();
		});
	};

	return (
		<div className="ob-import-modal-wrap">
			<OnClickOutside action={() => {
				setModal(false);
				setSite(null);
			}}>
				<div className="ob-import-modal">
					<div className="modal-header" style={{backgroundImage: `url(${siteData.screenshot})`}}>
						<Button icon="no-alt" onClick={() => {
							setModal(false);
							setSite(null);
						}}/>
						<h2>{siteData.title}</h2>
					</div>
					<div className="modal-body">
						{renderNote()}
						<hr/>
						{renderOptions()}
						<hr/>
						{renderPlugins()}
					</div>
					<div className="modal-footer">
						<Button
							isSecondary
							onClick={() => {
								setModal(false);
								setSite(null);
							}}>
							{__('Close', 'neve')}
						</Button>
						<Button
							isPrimary
							disabled={allOptionsOff}
							onClick={() => {
								runImport();
							}}>
							{__('Import', 'neve')}
						</Button>
					</div>
				</div>
			</OnClickOutside>
		</div>
	);
};

export default compose(
	withSelect((select) => {
		const {getCurrentEditor, getCurrentSite} = select('neve-onboarding');
		return {
			editor: getCurrentEditor(),
			siteData: getCurrentSite()
		};
	}),
	withDispatch((dispatch) => {
		const {setImportModalStatus, setCurrentSite} = dispatch('neve-onboarding');
		return {
			setModal: (status) => setImportModalStatus(status),
			setSite: (data) => setCurrentSite(data)
		};
	})
)(ImportModal);
