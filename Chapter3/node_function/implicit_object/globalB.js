const A = require('./globalA');

global.message = '안녕하세요';
console.log(A()); //globalA 모듈의 함수 호출

//globalB에서 넣은 global.message 값을 globalA에서도 접근할 수 있음을 알 수 있다.
