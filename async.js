const fs = require("fs")
const https = require("https")

console.log("Hello World");

var a = 165480
var b = 680922

https.get("https://dummyjson.com/products/1", (res)=>{
    console.log("Fetched Data Successfully");
    
})

setTimeout(()=>{
    console.log("setTimeout Called");
    
}, 3000)


//Blocking the thread
//Synchronous
fs.readFileSync("./file.txt", "utf8")
console.log("Sync File Read");

//Asynchronous
fs.readFile("./file.txt", "utf8", (err, data)=>{
    console.log("File Data : ", data);
    
})

function multiplyFn(x, y) {
    const result = a * b
    return result
}

var c = multiplyFn(a, b)

console.log(c);
