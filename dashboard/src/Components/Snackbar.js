import { Snackbar } from '@wordpress/components';
import { withDispatch, withSelect } from '@wordpress/data';
import { useEffect, useState } from '@wordpress/element';
import { compose } from '@wordpress/compose';
import { __ } from '@wordpress/i18n';
const GlobalSnackbar = ( { toast, setToast } ) => {
	useEffect( () => {
		setTimeout( () => {
			setToast( null );
		}, 3000 );
	}, [] );

	const message = toast();
	const style = {
		opacity: null === message ? 0 : 1,
	};

	return (
		<div style={ style }>
			<Snackbar className="dash-notice">
				{ 'boolean' === typeof message
					? false === message
						? __(
								'Could not Update Option. Please try again.',
								'neve'
						  )
						: __( 'Option Updated', 'neve' )
					: toast() }
			</Snackbar>
		</div>
	);
};

export default compose(
	withDispatch( ( dispatch ) => {
		const { setToast } = dispatch( 'neve-dashboard' );
		return {
			setToast: ( message ) => setToast( message ),
		};
	} ),
	withSelect( ( select ) => {
		const { getToast } = select( 'neve-dashboard' );
		return {
			toast: () => getToast(),
		};
	} )
)( GlobalSnackbar );
