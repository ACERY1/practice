// order asc desc
// type id prices sale
function sort(type, order) {
  var table = document.getElementById('jsList')
  var rows = table.children
  var length = rows.length
  var data = []
  var nodes = []
  var typeMap = {
    'id': 0,
    'price': 1,
    'sales': 2
  }


  // 数据化
  var _genData = function () {
    Array.prototype.forEach.call(rows, function (item, index) {
      // console.log(item.children[typeMap[type]].innerHTML)
      let _temp = []
      Array.prototype.forEach.call(item.children, function (it, idx) {
        _temp[idx] = parseInt(it.innerHTML)
      })
      data.push(_temp)
    })
    // console.log(data)
  }

  // 排序
  var _sortByKey = function (key) {
    data.sort(function (a, b) {
      if (order === 'asc') {
        return a[typeMap[type]] - b[typeMap[type]]
      }
      if (order === 'desc') { }
      return b[typeMap[type]] - a[typeMap[type]]
    })
  }

  // 渲染
  var _render = function () {
    // 清空原DOM
    for(let i=0;i<length;i++){
      table.removeChild(rows[0])
    }
    // 遍历数组
    data.forEach(function (item) {
      var _tr = document.createElement('tr')
      item.forEach(function (trVal) {
        var _td = document.createElement('td')
        var text = document.createTextNode(trVal)
        _td.appendChild(text)
        _tr.appendChild(_td)
      })
      console.log(_tr)
      table.appendChild(_tr)
    })
  }

  _genData()
  _sortByKey()
  _render()
}

sort('price', 'asc')
