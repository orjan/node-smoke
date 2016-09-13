module.exports = backoff

function backoff(numberOfRetries) {
  return (numberOfRetries > (10 - 1))
    ? { "abort": true, "delay": 0 }
    : { "abort": false, "delay": 1000 }
}
