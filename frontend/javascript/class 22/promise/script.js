let myPromise = new Promise((resolve, reject) => {
  let success = true; // Change this to false to simulate failure

  if (success) {
    resolve("✅ Task completed!");
  } else {
    reject("❌ Task failed!");
  }
});

myPromise
  .then(result => console.log(result))  // success
  .catch(error => console.log(error)); // failure
