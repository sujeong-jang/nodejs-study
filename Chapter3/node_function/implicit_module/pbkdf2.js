/*
다양한 방식의 암호화를 도와주는 모듈
단방향 암호화와 양방향 암호화 존재

단방향 암호화 : 복호화(암호화된 문자열을 원래 문자열로 되돌려 놓는 것)할 수 없는 암호화 방식
- 주로 해시 기법 사용(어떠한 문자열을 고정된 길이의 다른 문자열로 바꿔버리는 방식)
*/

const crypto = require('crypto');

crypto.randomBytes(64, (err, buf) => { //64바이트 길이의 문자열 생성
  const salt = buf.toString('base64');
  console.log('salt:', salt);
  crypto.pbkdf2('비밀번호', salt, 100000, 64, 'sha512', (err, key) => { //sha512로 변환된 결과값을 다시 sha512로 변환 -> 10만번 반복
    console.log('password:', key.toString('base64'));
  });
});
