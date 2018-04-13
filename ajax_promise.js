var xhr = new XMLHttpRequest();
var data = null;

xhr.open('get', 'http://www.baidu.com');

xhr.setRequestHeader('key', 'value');

xhr.onload = function () {
  if (this.readyState === 4 || this.status === 200) {
    console.log(this.responseText);
  } else {
    console.log('err!')
  }
};

xhr.send(data);

var ajax = function ({ url, method, data, headers }) {
  let xhr = new XMLHttpRequest()
  xhr.open(method, url);
  Object.keys(headers).forEach(function (key) {
    xhr.setRequestHeader(headers, headers[key])
  });
  xhr.onload = function () {
    return new Promise(function (resolve, reject) {
      if (this.readyState === 4 || this.status === 200) {
        resolve(this.responseText);
      } else {
        reject(); // 传入错误信息
      }
    });
  };
}
