// ********只能触发一次的函数********

var once = function (fn) {
  var hasTrigger = false;
  return function () {
    if (!hasTrigger) {
      hasTrigger = true;
      fn();
    } else {
      console.log('');
    }
  };
};

var test = once(() => { console.log('hello'); });

test();
test(); // 第二次将触发报错
