// 题目: 打印出所有的"水仙花数"，所谓"水仙花数"是指一个三位数，其各位数字立方和等于该数本身。例如：153是一个"水仙花数"，因为153=1的三次方＋5的三次方＋3的三次方。/**
//  * Created by YIwanT on 2017/8/12.
//  */
function lifang(num) {
  let result = num * num * num ;
  return  result ;
}
function flowernum() {
  let result = [];
  for (var i = 100; i < 1000; i++) {
    let num = i ;
    let gewei = num % 10 ;
    let shiwei = parseInt(num / 10) % 10 ;
    let baiwei = parseInt(num / 100);
    if (lifang(gewei) + lifang(shiwei) + lifang(baiwei) == num){
      result.push(num);
    }
  }
  console.log(result);

};

flowernum();
