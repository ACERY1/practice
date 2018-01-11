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

var test = throttle(() => { console.log('hello'); }, 3000);

setInterval(test, 200);