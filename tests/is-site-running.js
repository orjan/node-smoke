const test = require('tape');
const request = require('./request')
const retry = require('./retry')
const backoff = require('./backoff')

test('is page alive', (t) => {
  t.plan(1);

  retry(backoff, () => request('http://localhost:3000/is-alive'))
    .then(t.pass)
    .catch(t.fail)
})
