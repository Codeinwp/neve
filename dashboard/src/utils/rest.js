export const changeOption = (option, value) => {
	const model = new wp.api.models.Settings({
		// eslint-disable-next-line camelcase
		[option]: value
	});

	model.save().then( response => {
		console.log(response[option]);
		console.log(response);
			// [option]: response[option],
			// isAPISaving: false
		// });
	});
};


export const send = (route, data, simple = false) => {
	return requestData(route, simple, data );
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
