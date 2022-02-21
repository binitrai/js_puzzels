function all(promises) {
    return new Promise((resolve, reject) => {
        const ret = [];
        for (let i = 0; i < promises.length; i++) {
          const promise = promises[i];
          promise.then(value => {
              ret.push(value);
              if (ret.length === promises.length) {
                resolve(ret);
              }
          }).catch(e => {
            reject(e)
          })
        }
    })
  }
