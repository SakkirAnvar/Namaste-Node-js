console.log("Hello world");

var a = 165480
var b = 680922


//This callback will be pushedf to call stack in v8 once the call stack is empty
setTimeout(()=>{
    console.log("call immedialtely...");
    
}, 0)// trust issues with setTimeout

function multiplyFn(x, y) {
    const result = a * b
    return result
}

var c = multiplyFn(a, b)

console.log("multiplication result : ", c);