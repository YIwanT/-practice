/**
 * Created by YIwanT on 2017/8/11.
 */
// 题目：给出链表 1->2->3->3->4->5->3, 和 val = 3, 你需要返回删除3之后的链表：1->2->4->5。
function XXX(str,val){
let  result = '';
let num = [];
let delnum = [] ;
let array = str.split('->');
  for (let item of array) {
    num.push(parseInt(item));
  }
  for (let item of num) {
    if (item != val) {
      delnum.push(item);
    }
  }
  for (var i = 0; i < delnum.length ; i++) {
    if (i == delnum.length - 1){
      result += delnum[i];
    }else {
      result += delnum[i] + '->'
    }
  }
  console.log(result);
};

XXX('1->2->3->3->4->5->3', 3);

