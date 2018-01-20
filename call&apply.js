// ********call 和 apply的使用方式********

function foo(bar) {
  console.log(bar);
  console.log(arguments);
}

foo.apply(this, [1, 2, 3]); // 一共两个参数，第一个是上下文, 第二个是参数数组
foo.call(this, 1, 2, 3); // 支持任意参数，第一个是上下文，后面的全是单个参数
// 注意都只调用了一次foo函数