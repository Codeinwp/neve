const {Snackbar} = wp.components;
const {withDispatch, withSelect} = wp.data;
const {useEffect, useState} = wp.element;
const {compose} = wp.compose;
const {__} = wp.i18n;
const GlobalSnackbar = ({toast, setToast}) => {
	useEffect(() => {
		setTimeout(() => {
			setToast(null);
		}, 3000);
	}, []);

	const message = toast();
	const style = {
		opacity: null === message ? 0 : 1
	};

	return (
		<div style={style}>
			<Snackbar
				className='dash-notice'
			>
				{'boolean' === typeof message ?
					(false === message ?
						__('Could not Update Option. Please try again.', 'neve') :
						__('Option Updated', 'neve')) :
					toast()
				}
			</Snackbar>
		</div>
	);
};

export default compose(
	withDispatch((dispatch) => {
		const {setToast} = dispatch('neve-dashboard');
		return {
			setToast: (message) => setToast(message)
		};
	}),
	withSelect((select) => {
		const {getToast} = select('neve-dashboard');
		return {
			toast: () => getToast()
		};
	})
)(GlobalSnackbar);

