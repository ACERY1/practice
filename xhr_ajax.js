// ********xhr 实现$.ajax********
function error() {
  throw new Error('missing parameter');
}

function Ajax({
  url, method, data, headers,
} = error()) {
  let xhr = new XMLHttpRequest();
  if (!url || !method) {
    throw new Error('missing URL or Method');
  }

  if (method.toUpperCase() === 'GET' && Object.keys(data).length) {
    url += '?';
    Object.keys(data).forEach((key) => {
      url += `${key}=${data[key]}&`;
    });
    url = url.substr(0, url.lastIndexOf('&'));
  }

  xhr.open(method, url);

  // set headers
  for (let key of Object.keys(headers)) {
    // 有问题：headers是数组
  }

  // bind callback event
  xhr.onLoad = function () {
    console.log('hello');
    if (this.status === 200 && this.readyState === 4) {
      return Promise.resolve(this.responseText);
    } else {
      return Promise.reject(
        {
          status: this.status,
          statusText: this.statusText
        }
      )
    }
  }

  // inject params
  if (method.toUpperCase() === 'POST') {
    xhr.send(data)
  } else {
    xhr.send()
  }
}