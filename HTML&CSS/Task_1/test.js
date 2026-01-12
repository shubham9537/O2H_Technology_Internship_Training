//1
console.log("start");

setTimeout(() => {
  console.log("timeout 1");
}, 0);

Promise.resolve()
  .then(() => {
    console.log("promise 1");
    setTimeout(() => {
      console.log("timeout 2");
    }, 0);
  })
  .then(() => {
    console.log("promise 2");
  });

(async function () {
  console.log("async start");
  await null;
  console.log("async end");
})();

console.log("end");


//2
console.log("A");

async function test() {
  console.log("B");

  await Promise.resolve().then(() => {
    console.log("C");
  });

  console.log("D");

  await 0;

  console.log("E");
}

test();

Promise.resolve().then(() => {
  console.log("F");
});

setTimeout(() => {
  console.log("G");
}, 0);

console.log("H");
