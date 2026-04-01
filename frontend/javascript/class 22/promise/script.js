let myPromise = new Promise((resolve, reject) => {
  let success = false;

  if (success) {
    resolve("✅ Task completed!");
  } else {
    reject("❌ Task failed!");
  }
});

myPromise
  .then(result => console.log(result))  // success
  .catch(error => console.log(error)); // failure
