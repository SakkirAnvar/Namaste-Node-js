const fs = require("fs");

setImmediate(() => {
  console.log("setImmediate");
});

setTimeout(() => {
  console.log("Timer Expired");
}, 0);
process.nextTick(() => {
  console.log("process.nextTick");
});

Promise.resolve("Promise").then(console.log);

fs.readFile("./file.txt", "utf8", () => {
  setTimeout(() => {
    console.log("2nd Timer Expired");
  }, 0);

  process.nextTick(() => {
    console.log("2nd process.nextTick");
  });

  setImmediate(() => {
    console.log("2nd setImmediate");
  });

  console.log("File Reading CB");
});


console.log("last line of the file");
