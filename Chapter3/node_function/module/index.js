/*
module.js와 fuc.js 모두 참조
모듈 하나가 여러 개의 모듈을 사용할 수 있다
또한 하나의 모듈이 여러 개의 모듈에 사용될 수 있다.
*/

const { odd, even } = require('./module');
const checkNumber = require('./func');

function checkStringOddOrEven(str) {
  if (str.length % 2) { //홀수면
    return odd;
  }
  return even;
}

console.log(checkNumber(10));
console.log(checkStringOddOrEven('hello'));
