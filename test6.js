// 给定一个未排序的整数数组，找到其中位数。
// function XXX(arr){}/**
//  * Created by YIwanT on 2017/8/13.
//  */
function XXX(array) {
  let result = 0 ;
  function sortNumber(a,b)
  {
    return a - b
  }
  array.sort(sortNumber);
  if(array.length % 2  == 0) {
    for (var i = 0; i < array.length; i++) {
      if (i == array.length / 2)
        result = (array[i] + array[i - 1]) / 2;
    }
  }else
    {
      for (var i = 0; i < array.length; i++) {
        if (i == parseInt(array.length / 2))
          result = array[i + 1];
      }
    }
  console.log(array);
    console.log(result);
};
XXX([2,1,5,6,4,7,8,2]);
