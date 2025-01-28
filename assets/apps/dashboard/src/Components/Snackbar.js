import { useDispatch, useSelect } from '@wordpress/data';
import { useEffect, useState } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import { NEVE_STORE } from '../utils/constants';
import Toast from './Common/Toast';

const SingleToast = ({ message, type, onRemove }) => {
	useEffect(() => {
		const timer = setTimeout(() => {
			onRemove();
		}, 3000);

		return () => clearTimeout(timer);
	}, [onRemove]);

	return <Toast className="shadow-lg" type={type} message={message} />;
};

const GlobalSnackbar = () => {
	const [toasts, setToasts] = useState([]);
	const { setToast } = useDispatch(NEVE_STORE);

	const toast = useSelect((select) => {
		const { getToast } = select(NEVE_STORE);
		return getToast();
	});

	const buildToast = (message) => {
		if (message === false) {
			return {
				message: __(
					'Could not Update Option. Please try again.',
					'neve'
				),
				type: 'error',
			};
		}
		if ('boolean' !== typeof message) {
			return { message, type: 'success' };
		}
		return { message: __('Option Updated', 'neve'), type: 'success' };
	};

	useEffect(() => {
		if (null === toast) {
			return;
		}

		const newToast = {
			id: Date.now(),
			...buildToast(toast),
		};

		setToasts((prev) => [...prev, newToast]);
		setToast(null);
	}, [toast, setToast]);

	const onRemove = (id) => {
		setToasts((prev) => prev.filter((item) => item.id !== id));
	};

	return (
		<div className="fixed bottom-5 ml-5 grid gap-2 z-max">
			{toasts.map(({ id, message, type }) => (
				<SingleToast
					key={id}
					message={message}
					type={type}
					onRemove={() => onRemove(id)}
				/>
			))}
		</div>
	);
};

export default GlobalSnackbar;
