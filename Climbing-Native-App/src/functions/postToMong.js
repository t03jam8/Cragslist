// posting to the mongo db
async function postToMong(obj) {
  const apiUrl = 'http://192.168.0.36:8080/postToMong';
  const options = {
    method: 'POST',
    body: JSON.stringify(obj),
    headers: {'Content-Type' : 'application/json'},
  };
  return fetch(apiUrl, options);
}

export default postToMong
