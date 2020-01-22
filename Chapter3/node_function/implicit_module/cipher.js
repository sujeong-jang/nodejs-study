/*
양방향 대칭형 암호화
- 암호화된 문자열 복호화 가능
- key가 사용된다 (복호화할 때 필요)
*/

const crypto = require('crypto');

// crypto.createCipher(알고리즘, 키)
const cipher = crypto.createCipher('aes-256-cbc', '열쇠');
// cipher.update(문자열, 인코딩, 출력 인코딩)
let result = cipher.update('암호화할 문장', 'utf8', 'base64');
result += cipher.final('base64'); // 암호화 완료
console.log('암호화:', result);

const decipher = crypto.createDecipher('aes-256-cbc', '열쇠');
// decipher.update(문자열, 인코딩, 출력 인코딩) 복호화 할 때는 암호화할 때 넣어진 인코딩과 출력 인코딩 순서를 반대로
let result2 = decipher.update(result, 'base64', 'utf8');
result2 += decipher.final('utf8');
console.log('복호화:', result2);
