// ********函数节流********

var throttle = function (fn, gapTime) {
  var lastTime = null;
  return function () {
    var nowTime = +new Date();
    if (nowTime - lastTime >= gapTime || !lastTime) {
      lastTime = nowTime;
      fn();
    }
  };
};

function throttle2(func, limit) {
  let lastRan = Date.now();
  return function () {
    if (Date.now() - lastRan >= limit) {
      func.apply(this, arguments);
      lastRan = Date.now();
    }
  };
}

var test = throttle(() => { console.log('hello'); }, 3000);

setInterval(test, 200); // 仍然是3000ms触发一次