const testString = "HelloWorldJavaScript"

// console.log(typeof testString)

// 要求：将上述字符串反转。

// 方法一
let m1 = testString.split("").reverse().join("")
// 弊端：对复杂字符串(Unicode等)不适用。

console.log("方法一结果：",m1)

// 错误示范
let m2 = Array.prototype.reverse.call(testString)
console.log(m2)
//报错 TypeError: Cannot assign to read only property '0' of object '[object String]'
//解释： JavaScript中字符串是不可变的



