function promise10(num) {
  return new Promise((resolve, reject) => {
    if (num > 10) resolve("successes");
    else reject("failed");
  });
}
promise10(10)
  .then((resolve) => console.log(resolve))
  .catch((reject) => console.log(reject));
