const {__} = wp.i18n;

export const changeOption = (option, value, module = false) => {
	option = 'nv_pro_' + option + (module ? '_status' : '');
	const model = new wp.api.models.Settings({
		[option]: value
	});

	return new Promise((resolve) => {
		model.save().then((r) => {
			if (! r || ! r[option] === value) {
				resolve({success: false});
			}
			resolve(isValid(option, r));
		});
	});
};

export const send = (route, data, simple = false) => {
	return requestData(route, simple, data);
};

export const get = (route, simple = false) => {
	return requestData(route, simple, {}, 'GET');
};

const requestData = async (route, simple = false, data = {}, method = 'POST') => {
	const options = {
		method: method,
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json',
			'x-wp-nonce': neveDash.nonce
		}
	};

	if ('POST' === method) {
		options.body = JSON.stringify(data);
	}

	return await fetch(route, options).then((response) => {
		return simple ? response : response.json();
	});
};

const isValid = (option, optionsArray) => {
	if ('nv_pro_typekit_id' === option) {
		if (! optionsArray['neve_pro_typekit_data']) {
			return {message: __('Typekit Project ID is invalid', 'neve'), success: false};
		}
	}
	return {success: true};
};
