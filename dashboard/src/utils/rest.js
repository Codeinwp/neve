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
			resolve({success: true});
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
