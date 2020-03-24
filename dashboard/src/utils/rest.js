export const send = (route, data) => {
  return requestData(route, data);
};

export const get = (route, data = {} ) => {
  return requestData(route, data, 'GET');
};

const requestData = async (route, data = {}, method = 'POST') => {
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

  return await fetch(route, options);
};
