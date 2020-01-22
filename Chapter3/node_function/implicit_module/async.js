/*
setTimeout 같은 타이머와 process.nextTick 외에도 노드는 대부분의 메서드를 비동기 방식으로 처리한다.
하지만 몇몇 메서드는 동기 방식으로도 사용할 수 있는데 특히 fs 모듈이 그러하다
*/
//(비동기)
const fs = require('fs');

console.log('시작');
fs.readFile('./readme2.txt', (err, data) => {
  if(err){
    throw err;
  }
  console.log('1번', data.toString());
});

fs.readFile('./readme2.txt', (err, data) => {
  if(err){
    throw err;
  }
  console.log('2번', data.toString());
});

fs.readFile('./readme2.txt', (err, data) => {
  if(err){
    throw err;
  }
  console.log('3번', data.toString());
});
console.log('끝');

//이전 작업이 완료되지 않아도 다음 작업을 수행하기 때문에 시작과 끝이 먼저 출력되고 1,2,3번이 순서가 좀 다르게 출력됨

//순서대로 출력하고 싶다면(동기),
console.log('시작');
let data = fs.readFileSync('./readme2.txt');
console.log('1번', data.toString());
data = fs.readFileSync('./readme2.txt');
console.log('2번', data.toString());
data = fs.readFileSync('./readme2.txt');
console.log('3번', data.toString());
console.log('끝');
