/*
util : 각종 편의기능을 모아둔 모듈
계속 해서 API가 추가되고 있고, 가끔 deprecated되어 사라지는 경우도 있다
deprecated : 중요도가 떨어져 더 이상 사용되지 않고 앞으로는 사라지게 될 것이라는 뜻
이전 사용자를 위해 기능을 제거하지는 않지만 곧 없앨 예정이므로 더 이상 사용하지 말라는 의미
*/

const util = require('util');
const crypto = require('crypto');

const dontUseMe = util.deprecate((x, y) => {
  console.log(x + y);
}, 'dontUseMe 함수는 deprecated되었으니 더 이상 사용하지 마세요!');
dontUseMe(1,2);


// util.promiseify : 콜백 패턴을 프로미스 패턴으로 바꿔준다(async/await 패턴까지 사용 가능)
const randomBytePromise = util.promisify(crypto.randomBytes);
randomBytePromise(64)
  .then((buf) => {
    console.log(buf.toString('base64'));
  })
  .catch((error) => {
    console.error(error);
  });
