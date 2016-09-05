require('whatwg-fetch')

function post(url, body) {
  return fetch(url, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  })
}

function go() {
  post('/beer', { foo: 'bar' })
}

document.getElementById('go').addEventListener('click', go)
