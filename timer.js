// ********用setTimeout实现扩展版的setInterval ********

// 参数说明：计数次数，计数间隔时间，单位计数触发函数，计数完成回调函数
function mySetInterval(countTime, basicMs, progressFn, callBackFn) {
  // for循环的目的：在countTime*basicMs的时间轴按照间隔时间均匀设置setTimeout
  for (let i = 0; i < countTime; ++i) {
    // 用立即执行函数IEF的目的：1.将函数声明变为函数表达式 2.创建函数作用域用于存储每一次迭代的索引 3. 注意传参方式
    ((j = i) => {
      setTimeout(() => {
        if (j === countTime - 1) {
          // 最后一次的回调函数
          callBackFn();
        } else {
          // 非最后一次迭代的回调函数
          progressFn();
        }
      }, j * basicMs); // 按照下面的例子，第一次设置的是0ms后的，第二次设置的是1000ms后的，第三次设置的是2000ms后的，以此类推。
    })(i);
  }
}

// 调用 计数60次，每次间隔1000ms
mySetInterval(60, 1000, () => { console.log('counting'); }, () => { console.log('done!'); });