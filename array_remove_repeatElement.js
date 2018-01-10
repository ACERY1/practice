// ********数组去重的几种方式********
var testArray = [1, 2, 3, 3, 4, 4, 5, 5, 'ss', 'ssr', 'hb', 'hb'];

// 方式一：建立一个新的数组，如果当前遍历元素没有出现在新数组里面就push，如果有则continue
function removeRepeatElementInArray(array) {
  let newArray = [];
  for (let i = 0; i < array.length; ++i) {
    if (newArray.indexOf(array[i]) === -1) {
      newArray.push(array[i]);
    }
  } // 优化！：使用forEach方法
  return newArray;
}

// 方式二：利用对象的key的唯一性，来做数组去重
function removeRepeatElementInArray2(array) {
  let obj = {};
  let newArray = [];
  for (let i = 0; i < array.length; ++i) {
    if (obj[array[i]] !== 1) {
      newArray.push(array[i]);
      obj[array[i]] = 1;
    }
  }
  return newArray;
}

// 方式三：利用indexof只匹配第一次出现的元素索引，所以第二个重复出现的元素索引不等于用indexof查出的索引值
function removeRepeatElementInArray3(array) {
  let newArray = [];
  array.forEach((item, index) => {
    if (array.indexOf(item) === index) {
      newArray.push(item);
    }
  });
  return newArray;
}

console.log('方式1：', removeRepeatElementInArray(testArray));
console.log('方式2：', removeRepeatElementInArray2(testArray));
console.log('方式3：', removeRepeatElementInArray3(testArray));
