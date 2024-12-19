import { Snackbar } from '@wordpress/components';
import { useDispatch, useSelect } from '@wordpress/data';
import { useEffect } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import { NEVE_STORE } from '../utils/constants';

const GlobalSnackbar = () => {
	const { setToast } = useDispatch(NEVE_STORE);

	const { toast } = useSelect((select) => {
		const { getToast } = select(NEVE_STORE);
		return {
			toast: getToast,
		};
	});

	useEffect(() => {
		setTimeout(() => {
			setToast(null);
		}, 3000);
	}, []);

	const message = toast();
	const style = {
		opacity: null === message ? 0 : 1,
	};
	let renderToast = __('Option Updated', 'neve');
	if (message === false) {
		renderToast = __('Could not Update Option. Please try again.', 'neve');
	}
	if ('boolean' !== typeof message) {
		renderToast = toast();
	}

	return (
		<div style={style}>
			<Snackbar className="fixed bottom-5 ml-5">{renderToast}</Snackbar>
		</div>
	);
};

export default GlobalSnackbar;
