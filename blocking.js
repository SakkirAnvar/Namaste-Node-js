const crypto = require("crypto")

console.log("Hello World");
var a = 165480
var b = 680922

//pbkdf2 - Password base Key Deravative Function

//Synchronous Fn - WILL BLOCK THE MAIN THREAD DONT USE IT
crypto.pbkdf2Sync("password", "salt", 5000000,50,  "sha512")
console.log("First Key Generated");

//Asynchronous
crypto.pbkdf2("password", "salt", 50000,50,  "sha512", ()=>{
    console.log("Second Key Generated");
    
})

function multiplyFn(x, y) {
    const result = a * b
    return result
}

var c = multiplyFn(a, b)

console.log("multiplication result : ", c);
