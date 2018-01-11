// ********遍历一个对象的自身属性（排除继承来的属性）********
function Base() {
  this.name = 'BOB';
  this.sex = 'MAN';
}

function Suber(hobby) {
  this.hobby = hobby;
}


// for in 引起来的问题：for in 将会遍历一个对象的所有可枚举属性，包括来自于继承链的属性
Suber.prototype = new Base();
Suber.prototype.constructor = Suber;


let test = new Suber('gaming'); // 实例化

Object.defineProperty(test, 'noEnum', {
  value: 'yes',
  enumerable: false
}); // 通过defineProperty可以自定义属性的可枚举性，如果想深度定义一个对象拥有的属性特点，使用defineProperty是非常好的方式

// 方式一：使用对象的方法hasOwnProperty检测某属性是自身实例化出来的还是来自于原型链的（均是可枚举属性）
for (item in test) {
  if (test.hasOwnProperty(item)) {
    console.log('方式一', item);
  }
};

// 方式二：使用Object.getOwnPropertyNames(obj)返回一个对象所有的自身属性，包括不可枚举
console.log('方式二：', Object.getOwnPropertyNames(test));

// 补充，简单一点，那么可以用Object.keys：Object.keys() 方法会返回一个由一个给定对象的自身可枚举属性组成的数组
console.log('方式三：', Object.keys(test));