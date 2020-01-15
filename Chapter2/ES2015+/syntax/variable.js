/*
 var은 const와 let으로 대체
 const와 let은 블록 스코프를 가지므로 블록 밖에서는 변수에 접근할 수 없다
*/

if(true) {
  var x = 3;
}
console.log(x);

if(true) {
  const y = 3;
}
//console.log(y); //에러 발생

/*
let과 const의 차이점
const는 한번 값을 대입하면 다른 값으로 변경할 수 없다
또한 const는 초기화 시 값을 대입해야 한다.

*/
