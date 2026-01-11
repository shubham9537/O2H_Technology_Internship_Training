function myPromiseAll(promises) {
  return new Promise((resolve, reject) => {
    const results = [];
    let completedCount = 0;

    if (promises.length === 0) {
      resolve([]);
      return;
    }

    promises.forEach((promise, index) => {
      Promise.resolve(promise)
        .then(value => {
          results[index] = value;
          completedCount++;

          if (completedCount === promises.length) {
            resolve(results);
          }
        })
        .catch(error => {
          reject(error);
        });
    });
  });
}

const p1 = new Promise(res => setTimeout(() => res(1), 1000));
const p2 = new Promise(res => setTimeout(() => res(2), 500));
const p3 = new Promise(res => setTimeout(() => res(3), 1500));

myPromiseAll([p1, p2, p3])
  .then(result => console.log(result))
  .catch(err => console.error(err));
