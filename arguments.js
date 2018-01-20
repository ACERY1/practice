// ********探讨一些关于JS函数参数的问题********

// arguments 可以获取函数的参数，是一个array-like object
function foo() {
  console.log(arguments); // { '0': 1, '1': 2 }
  console.log(typeof arguments); // object
  console.log(arguments.length); // 2
  console.log(arguments[0] + arguments[1]); // 3
}
// foo(1, 2);
// --end

// ...扩展运算符可已将数组展开为一个个单独的值
var arrayArgs = [1, 2, 3];
console.log(...arrayArgs);
// --end

// 用扩展运算符实现rest参数
var key1 = [1, 2];
var key2 = [1, 2, 3];
function bar(...keys) {
  console.log(keys.length);
}
bar(...key1); // 2: 数组被展开成多个参数传入
bar(key1); // 1:第一个参数作为数组传入
// --end

function baz({
  a, b, c, d, e,
}) {
  console.log(arguments)
}

baz({
  a: 1,
  b: 2,
  x: 5,
});
