/* global neveDash */
import { get } from '../../utils/rest';

import { __ } from '@wordpress/i18n';
import { useState } from '@wordpress/element';
import { Button } from '@wordpress/components';
import { withSelect } from '@wordpress/data';

const StarterSitesUnavailable = ( { templatesPluginData } ) => {
	const { assets } = neveDash;
	const [ installing, setInstalling ] = useState( false );
	const [ activating, setActivating ] = useState( false );
	const [ error, setError ] = useState( false );
	const [ currentState, setCurrentState ] = useState(
		templatesPluginData.cta
	);
	const installPlugin = () => {
		setInstalling( true );
		wp.updates.ajax( 'install-plugin', {
			slug: 'templates-patterns-collection',
			success: ( r ) => {
				activatePlugin();
			},
			error: ( e ) => {
				if ( 'folder_exists' === e.errorCode ) {
					activatePlugin();
					return false;
				}
				setError(
					__( 'Something went wrong while installing the plugin.' )
				);
			},
		} );
	};

	const activatePlugin = () => {
		setInstalling( false );
		setActivating( true );
		setCurrentState( 'activate' );
		const activationURL = templatesPluginData.activate;

		get( activationURL, true ).then( ( r ) => {
			if ( r.ok ) {
				window.location.reload();
			}
		} );
	};

	const renderNoticeContent = () => {
		return (
			<>
				<h1>
					{ __(
						'In order to be able to import any starter sites for Neve you would need to have the Cloud Templates & Patterns Collection plugin active.'
					) }
				</h1>
				<br />
				{ 'install' === currentState && (
					<Button
						disabled={ installing }
						isPrimary={ ! installing }
						isSecondary={ installing }
						className={ installing && 'is-loading' }
						icon={ installing && 'update' }
						onClick={ installPlugin }
					>
						{ installing
							? __( 'Installing' ) + '...'
							: __( 'Install and Activate' ) }
					</Button>
				) }
				{ 'activate' === currentState && (
					<Button
						disabled={ activating }
						isPrimary={ ! activating }
						isSecondary={ activating }
						className={ activating && 'is-loading' }
						icon={ activating && 'update' }
						onClick={ activatePlugin }
					>
						{ activating
							? __( 'Activating' ) + '...'
							: __( 'Activate' ) }
					</Button>
				) }
			</>
		);
	};

	return (
		<div className="unavailable-starter-sites">
			<div
				className="ss-background"
				style={ { backgroundImage: `url(${ assets }/starter.jpg)` } }
			/>
			<div className="content-wrap">
				{ ! error ? (
					renderNoticeContent()
				) : (
					<h1 className="error">{ error }</h1>
				) }
			</div>
		</div>
	);
};

export default withSelect( ( select ) => {
	const { getPlugins } = select( 'neve-dashboard' );
	return {
		templatesPluginData: getPlugins()[ 'templates-patterns-collection' ],
	};
} )( StarterSitesUnavailable );
