(function flexible (window, document) {
  var docEl = document.documentElement // 获取当前的document这个HTML Element 本身
  var dpr = window.devicePixelRatio || 1 // 获取屏幕的dpr

  // adjust body font size
  function setBodyFontSize () {
    if (document.body) {
      document.body.style.fontSize = (12 * dpr) + 'px' // 如果已经渲染了body,那么设置root的font-size。如果dpr=1，那么font-size:12px
    }
    else {
      document.addEventListener('DOMContentLoaded', setBodyFontSize) // 如果没有，则给文档添加【加载完成】后的事件监听，并触发设置root的font-size的函数
      // 当文档中没有脚本时，浏览器解析完文档便能触发 DOMContentLoaded 事件；如果文档中包含脚本，则脚本会阻塞文档的解析，而脚本需要等位于脚本前面的css加载完才能执行。在任何情况下，DOMContentLoaded 的触发不需要等待图片等其他资源加载完成。
      // onload是 页面上所有的资源（图片，音频，视频等）被加载以后才会触发load事件
    }
  }
  setBodyFontSize();

  // set 1rem = viewWidth / 10
  function setRemUnit () {
    var rem = docEl.clientWidth / 10 // 将页面的宽度切为10份
    docEl.style.fontSize = rem + 'px'
  }

  setRemUnit()

  // reset rem unit on page resize
  window.addEventListener('resize', setRemUnit)  // 动态改变当前的页面宽高时也会自适应
  window.addEventListener('pageshow', function (e) { //onload 事件在页面第一次加载时触发， onpageshow 事件在每次加载页面时触发，即 onload 事件在页面从浏览器缓存中读取时不触发。
    if (e.persisted) {
      setRemUnit() // 如果从缓存中加载，也设置
    }
  })

  // detect 0.5px supports
  if (dpr >= 2) {
    var fakeBody = document.createElement('body')
    var testElement = document.createElement('div')
    testElement.style.border = '.5px solid transparent'
    fakeBody.appendChild(testElement)
    docEl.appendChild(fakeBody)
    if (testElement.offsetHeight === 1) {
      docEl.classList.add('hairlines')
    }
    docEl.removeChild(fakeBody)
  }
}(window, document))

// hint: pageshow onload DOMContentLoaded

