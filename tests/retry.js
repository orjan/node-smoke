module.exports = retry

function retry(strategy, command) {
  return new Promise((resolve, reject) => {
    retryTimer(1)

    function retryTimer(retryCount) {
      command()
        .then(result => resolve(result))
        .catch(error => {
          const { abort, delay } = strategy(retryCount, error)
          if (abort) {
            reject(error)
          } else {
            setTimeout(retryTimer, delay, retryCount + 1)
          }
        })
    }
  })
}
