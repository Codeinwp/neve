import classnames from 'classnames';

import { Fragment } from '@wordpress/element';
import { Dashicon, Button } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

const ImportModalNote = ( { data, externalInstalled } ) => {
	const external = data.external_plugins || null;
	const classes = classnames( [
		'well',
		{ warning: external && ! externalInstalled },
	] );
	return (
		<div className={ classes }>
			<h3>
				<Dashicon icon="info" />
				<span>
					{ external && ! externalInstalled
						? __(
								'To import this demo you have to install the following plugins',
								'neve'
						  )
						: __( 'Note', 'neve' ) }
					:
				</span>
			</h3>
			<ol>
				{ external && ! externalInstalled ? (
					external.map( ( plugin, index ) => (
						<li key={ index }>
							<Button isLink href={ plugin.author_url }>
								{ plugin.name }
							</Button>
						</li>
					) )
				) : (
					<Fragment>
						<li>
							{ __(
								'We recommend you backup your website content before attempting a full site import.',
								'neve'
							) }
						</li>
						<li>
							{ __(
								'Some of the demo images will not be imported and will be replaced by placeholder images.',
								'neve'
							) }
						</li>
					</Fragment>
				) }
			</ol>
		</div>
	);
};

export default ImportModalNote;
