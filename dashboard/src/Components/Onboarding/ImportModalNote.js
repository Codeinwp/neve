import classnames from 'classnames';

const {Fragment} = wp.element;
const {Dashicon, Button} = wp.components;
const {__} = wp.i18n;

const ImportModalNote = ({data, externalInstalled}) => {
	const external = data['external_plugins'] || null;
	const classes = classnames([ 'well', {'warning': external && ! externalInstalled } ]);
	return (
		<div className={classes}>
			<h3>
				<Dashicon icon="info"/>
				<span>{external && ! externalInstalled ?
					__('To import this demo you have to install the following plugins', 'neve') :
					__('Note', 'neve')}:
						</span>
			</h3>
			<ol>
				{external && ! externalInstalled ?
					external.map(plugin => <li><Button isLink href={plugin.author_url}>{plugin.name}</Button></li>) :
					<Fragment>
						<li>{__('We recommend you backup your website content before attempting a full site import.', 'neve')}</li>
						<li>{__('Some of the demo images will not be imported and will be replaced by placeholder images.', 'neve')}</li>
						{data['unsplash_gallery'] &&
						<li>
							<a
								href={data['unsplash_gallery']}>
								{__('Here is our own collection of related images you can use for your site.', 'neve')}
							</a>
						</li>
						}
					</Fragment>
				}
			</ol>
		</div>
	);
};

export default ImportModalNote;
