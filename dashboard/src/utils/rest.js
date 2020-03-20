export const send = (route, data, rest = true) => {
  return requestData(route, data, rest);
};

export const get = (route, rest = true, data = {} ) => {
  return requestData(route, data, rest, 'GET');
};

const requestData = async (route, data = {}, rest, method = 'POST') => {
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

  const url = rest ? `${neveDash.api}/${route}` : route;

  const rawResponse = await fetch(url, options);
  return await rest ? rawResponse.json() : rawResponse;
};
