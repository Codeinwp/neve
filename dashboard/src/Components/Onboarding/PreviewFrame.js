/* global neveDash */
import { withSelect, withDispatch } from '@wordpress/data';
import { compose } from '@wordpress/compose';
import { Button, Dashicon } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

const PreviewFrame = ( {
	next,
	prev,
	siteData,
	setSite,
	setPreview,
	setModal,
} ) => {
	const { isRTL } = neveDash;
	return (
		<div className="ob-preview">
			<div className="preview">
				<iframe src={ siteData.url } frameBorder="0" />
				<div className="loading">
					<Dashicon icon="update" size={ 50 } />
				</div>
			</div>
			<div className="bottom-bar">
				<div className="navigator">
					<Button
						onClick={ ( e ) => {
							e.preventDefault();
							setPreview( false );
							setSite( null );
						} }
						className="close"
						label={ __( 'Close', 'neve' ) }
						icon="no"
					/>

					{ prev && (
						<Button
							onClick={ ( e ) => {
								e.preventDefault();
								setSite( prev );
							} }
							className="prev"
							label={ __( 'Previous', 'neve' ) }
							icon={
								isRTL ? 'arrow-right-alt2' : 'arrow-left-alt2'
							}
						/>
					) }

					{ next && (
						<Button
							onClick={ ( e ) => {
								e.preventDefault();
								setSite( next );
							} }
							className="next"
							label={ __( 'Next', 'neve' ) }
							icon={
								isRTL ? 'arrow-left-alt2' : 'arrow-right-alt2'
							}
						/>
					) }
				</div>
				<div className="actions">
					{ siteData.upsell ? (
						<Button
							className="upgrade"
							isPrimary
							href={
								siteData.utmOutboundLink || neveDash.upgradeURL
							}
						>
							{ __( 'Upgrade and Import', 'neve' ) }
						</Button>
					) : (
						<Button
							className="import"
							isPrimary
							onClick={ ( e ) => {
								e.preventDefault();
								setModal( true );
							} }
						>
							{ __( 'Import', 'neve' ) }
						</Button>
					) }
				</div>
			</div>
		</div>
	);
};

export default compose(
	withSelect( ( select ) => {
		const { getCurrentSite } = select( 'neve-onboarding' );
		return {
			siteData: getCurrentSite(),
		};
	} ),
	withDispatch( ( dispatch ) => {
		const {
			setCurrentSite,
			setPreviewStatus,
			setImportModalStatus,
		} = dispatch( 'neve-onboarding' );
		return {
			setSite: ( data ) => setCurrentSite( data ),
			setPreview: ( status ) => setPreviewStatus( status ),
			setModal: ( status ) => setImportModalStatus( status ),
		};
	} )
)( PreviewFrame );
