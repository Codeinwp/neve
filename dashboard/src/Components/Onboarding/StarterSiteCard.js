import { Button, Dashicon } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { withDispatch } from '@wordpress/data';
import { useState } from '@wordpress/element';

const StarterSiteCard = ( { data, setSite, setPreview, setModal } ) => {
	const { upsell } = data;
	const [ actionsClass, setActionClass ] = useState( '' );
	const showActions = () => {
		setActionClass( 'visible' );
	};
	const hideActions = () => {
		setActionClass( '' );
	};
	return (
		<div
			onMouseEnter={ showActions }
			onMouseLeave={ hideActions }
			className="card starter-site-card"
		>
			<div className="top">
				{ /*<div className="fav">
                    <Button icon="star-filled"/>
                </div>*/ }
				<div className={ 'actions ' + actionsClass }>
					<Button
						className="preview"
						onClick={ ( e ) => {
							e.preventDefault();
							setSite( data );
							setPreview( true );
						} }
					>
						{ __( 'Preview', 'neve' ) }
					</Button>
					{ ! upsell && (
						<Button
							className="import"
							onClick={ ( e ) => {
								e.preventDefault();
								setSite( data );
								setModal( true );
							} }
						>
							{ __( 'Import', 'neve' ) }
						</Button>
					) }
				</div>
				{ data.screenshot && (
					<div
						className="image"
						style={ {
							backgroundImage: `url("${ data.screenshot }")`,
						} }
					/>
				) }
			</div>
			<div className="bottom">
				<p className="title">{ data.title }</p>
				{ upsell && (
					<span className="pro-badge">
						<Dashicon icon="lock" size={ 15 } />
						<span>{ __( 'Premium', 'neve' ) }</span>
					</span>
				) }
			</div>
		</div>
	);
};

export default withDispatch( ( dispatch ) => {
	const { setCurrentSite, setPreviewStatus, setImportModalStatus } = dispatch(
		'neve-onboarding'
	);
	return {
		setSite: ( data ) => setCurrentSite( data ),
		setPreview: ( status ) => setPreviewStatus( status ),
		setModal: ( status ) => setImportModalStatus( status ),
	};
} )( StarterSiteCard );
