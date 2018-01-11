// ********函数防抖********

var debounce = function (fn, boomTime) {
  var timer = null;
  return function () {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(fn, boomTime);
  };
};

var test = debounce(() => { console.log('test'); }, 1000);

setInterval(test, 200); // 一直不触发函数，因为每次触发时间小于防抖检测时间