/**
 * @param {number} x
 * @return {boolean}
 * 自写通过 264ms（慢） 思路：转化为字符串利用数组的reverse方法，缺点：如果遇到长的整数时reverse和比较都需运用更多的内存
*/
var isPalindrome = function(x) {
  var x = x * 1;
  if (x < 0) return false;
  var numArr = x.toString().split("");
  var revNumArr = x.toString().split("").reverse();
  if (numArr.toString() === revNumArr.toString()) {
      return true
  } else {
      return false
  }
};

/**
 * @param {number} x
 * @return {boolean}
 * 官方解题
 * 执行用时: 236 ms, 在所有 JavaScript 提交中击败了50.83%的用户
   内存消耗: 44.9 MB, 在所有 JavaScript 提交中击败了83.50%的用户
*/

var isPalindrome1 = function(x) {
  // 特殊情况：
  // 如上所述，当 x < 0 时，x 不是回文数。
  // 同样地，如果数字的最后一位是 0，为了使该数字为回文，
  // 则其第一位数字也应该是 0
  // 只有 0 满足这一属性
  if (x < 0 || (x % 10 === 0 && x !== 0)) {
    return false;
  }

  var revertedNumber = 0;
  while(x > revertedNumber) {
    revertedNumber = revertedNumber * 10 + x % 10
    x = parseInt(x / 10)
  }

  return x === revertedNumber || x === parseInt(revertedNumber / 10);
}

/**
 * @param {number} x
 * @return {boolean}
 * 思路: 回文，即以位于正中间的数字为中点进行分割，两边的数据完全对称。
 *       所以，如果设定一个循环，从整数第一位下标开始，第一位与最后一位对比，第二位与倒数第二位对比，
 *       回文两边的数字会全部相等，循环次数最大值为Math.floor(x.length/2), 而如果不一致，则判断非回文，即刻退出循环。
 *       另外，负数肯定不是回文，所以单独拎出来做一个判断。
 * 
 * 执行用时: 220 ms, 在所有 JavaScript 提交中击败了72.88%的用户
   内存消耗: 45.7 MB, 在所有 JavaScript 提交中击败了48.10%的用户
*/
var isPalindrome = function(x) {
  if(x<0) return false;
  let flag = true;
  x = x.toString()

  for(let i=0, len=x.length; i<len/2; i++){
      if(x[i] !== x[len-1-i]){
          flag = false;
          break
      }
  }
  return flag
};