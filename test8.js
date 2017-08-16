/**
 * Created by YIwanT on 2017/8/16.
 */
// 题目：找出数组 arr 中重复出现过的元素
// 例如：arr = [‘a’, ‘ab’, ‘ed’, ‘da’, ‘a’, ‘ed’, ‘b’];输出：‘a’, ‘ed’

function find(arr) {
  let  result  = [];
  for (var i = 0; i < arr.length; i++) {
    for (var j = i + 1; j < arr.length; j++) {
      if (arr[i] == arr[j]){
        result.push(arr[i]);
      }
    }
  }
  console.log(result);
};

find(['a', 'ab', 'ed', 'da', 'a', 'ed', 'b']);
