import classnames from 'classnames';

const {Fragment} = wp.element;
const {Dashicon, Button} = wp.components;
const {__} = wp.i18n;

const ImportModalNote = ({data}) => {
	const external = data['external_plugins'] || null;
	const classes = classnames([ 'well', {'warning': external} ]);
	return (
		<div className={classes}>
			<h3>
				<Dashicon icon="info"/>
				<span>{external ?
					__('To import this demo you have to install the following plugins', 'neve') :
					__('Note', 'neve')}:
						</span>
			</h3>
			<ol>
				{external ?
					Object.keys(external).map(slug => <li><Button isLink href={external[slug].url}>{slug}</Button></li>) :
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
