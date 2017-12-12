function Animal(name) {
  let privateAttr = 'this is private'; // 私有属性
  function privateFn() { }

  this.inheritAttr = 'hello super';
  this.arr = [1, 2, 3];
  this.name = name || 'no name';
} // 构造函数 首字母大写，this 代表新创建的实例对象
Animal.prototype.sayName = function () {
  console.log(this.name);
}; // 类的方法 所有的实例化对象的方法都是对该方法的引用，而不是创建一份，即共享。节约内存。

// 方法一：绑定父类的构造函数
function Cat(name, color) {
  Animal.call(this, name); // 绑定Cat的上下文，将参数传入Animal构造函数
  this.color = color;
}
const cat1 = new Cat('s', 'a');
console.log(cat1.inheritAttr, cat1.name);


// 方法二：prototype 缺点：仍然需要new去创造Animal 浪费内存
function Dog(name, sex) { }
// 任何一个prototype对象都有一个constructor属性，指向它的构造函数。缺点是每一次实例化都要实例化Animal
Dog.prototype = new Animal(); // 将Dog的prototype替换为Animal,但是prototype里面的constructor也变成animal的了
Dog.prototype.construtor = Dog; // 将Dog的prototype.constructor 纠正为Dog，后来发现不矫正也可以
const dog1 = new Dog('tog', 'man'); // 这个地方既构造了Animal 也构造了 Dog
console.log(dog1.inheritAttr, dog1.name); // 暂时没想到如何向基类传参

// 方法三：利用空对象
function extend(Child, Parent) {
  let F = function () { };
  F.prototype = Parent;
  Child.prototype = new F();
  Child.prototype.constructor = Child;
}
function Bird(name, sex) {
  this.sex = sex;
  this.name = name;
}
extend(Bird, Animal);
let bird1 = new Bird('d', 's');
bird1.sayName();

