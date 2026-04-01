function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function example() {
  console.log("Start");
  await delay(2000);  // wait 2s
  console.log("After 2 seconds");
}

example();
