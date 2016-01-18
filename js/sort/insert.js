/**
 * 插入排序
 */
var insertSort = function(arr) {
  var startIndex //开始索引
  for(startIndex = 1; startIndex < arr.length; startIndex++) {
    var i //往回比较索引
    for(i = startIndex - 1; i >= 0 ; i--) {
      var targetItem = arr[startIndex]
      var compareItem = arr[i]

      if(targetItem > compareItem) {
        var delArr = arr.splice(startIndex, 1)
        arr.splice(i + 1, 0, delArr[0])
        //遇见第一个大于的项,跳出for循环
        break
      }
      //如果所有项都比目标项小, 插入到数组顶端
      if(targetItem < compareItem && i == 0){
        arr.splice(startIndex, 1)
        arr.unshift(targetItem)
      }
    }
  }

  return arr
}

module.exports = insertSort
