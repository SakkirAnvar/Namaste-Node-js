const crypto = require("crypto")

//we can adjust the thread pool size
 process.env.UV_THREADPOOL_SIZE =2


crypto.pbkdf2("password", "salt", 500000, 50, "sha512", (err, key)=>{
    console.log("1-crypto PBKDF2 Done");  
})
crypto.pbkdf2("password", "salt", 500000, 50, "sha512", (err, key)=>{
    console.log("2-crypto PBKDF2 Done");  
})

crypto.pbkdf2("password", "salt", 500000, 50, "sha512", (err, key)=>{
    console.log("3-crypto PBKDF2 Done");  
})

crypto.pbkdf2("password", "salt", 500000, 50, "sha512", (err, key)=>{
    console.log("4-crypto PBKDF2 Done");  
})

//Thread Pool size by default is 4, if need more to execute it waits the thread pool to be empty

crypto.pbkdf2("password", "salt", 500000, 50, "sha512", (err, key)=>{
    console.log("5-crypto PBKDF2 Done");  
})


crypto.pbkdf2("password", "salt", 500000, 50, "sha512", (err, key)=>{
    console.log("6-crypto PBKDF2 Done");  
})

