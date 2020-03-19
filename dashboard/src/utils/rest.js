export const send = (route, data) => {
  return requestData(route, data);
};

const requestData = async (route, data) => {
  const rawResponse = await fetch(`${neveDash.api}/${route}`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'x-wp-nonce': neveDash.nonce
    },
    body: JSON.stringify(data)
  });
  return await rawResponse.json();
};
