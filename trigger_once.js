// ********只能触发一次的函数********

var once = function (fn) {
  var hasTrigger = false;
  return function () {
    if (!hasTrigger) {
      hasTrigger = true;
      fn();
    } else {
      console.log('该函数触发了两次');
    }
  };
};

var test = once(() => { console.log('hello'); });

test();
test();
