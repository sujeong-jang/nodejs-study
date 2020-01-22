/*
path : 폴더와 파일의 경로를 쉽게 조작하도록 도와주는 모듈
*/

const path = require('path');

const string = __filename;

console.log('path.sep:', path.sep); // 경로의 구분자(Window는 \, POSIX는 /)
console.log('path.delimiter:', path.delimiter); // 환경변수의 구분자(Window는 ;, POSIX는 :)
console.log('----------------------------------');
console.log('path.dirname():', path.dirname(string)); // 파일이 위치한 폴더 경로를 보여준다.
console.log('path.extname():', path.extname(string)); // 파일의 확장자를 보여준다
console.log('path.basename():', path.basename(string)); // 파일의 이름(확장자 포함)을 보여준다
console.log('path.basename():', path.basename(string, path.extname(string))); // 파일의 이름만 표시하고 싶으면 두번 째 인자로 확장자를 넣는다
console.log('----------------------------------');
console.log('path.parse():', path.parse(string)); // 파일 경로를 root, dir, ext, name으로 분리합니다
console.log('path.format():', path.format({ // path.parse()한 객체를 파일 경로로 합칩니다.
  dir: 'C:\\Users\\ssuju\\Desktop\\SJ\\2020\\nodejs-study\\Chapter3\\node_function\\implicit_module',
  name: 'path',
  ext: '.js',
}));

// \나 /를 실수로 여러 번 사용했거나 혼용했을 경우 정상적인 경로로 변환
console.log('path.normalize():', path.normalize('C://Users\\\\\ssuju\\Desktop\\SJ\\2020\\nodejs-study\\Chapter3\\node_function\\implicit_module\\path.js'));
console.log('---------------------------------');
console.log('path.isAbsolute():', path.isAbsolute('C:\\')); // 파일의 경로가 절대경로면 true, 상대경로면 false
console.log('path.isAbsolute()', path.isAbsolute('./home')); // 파일의 경로가 절대경로면 true, 상대경로면 false
console.log('---------------------------------');

// path.relative(기준경로, 비교경로) : 경로를 두 개 넣으면 첫 번째 경로에서 두 번째 경로로 가는 방법을 알려준다
console.log('path.relative:', path.relative('C:\\Users\\ssuju\\Desktop\\SJ\\2020\\nodejs-study\\Chapter3\\node_function\\implicit_module\\path.js', 'C:\\'));
// 여러 인자를 넣으면 하나의 경로로 합쳐준다
console.log('path.join():', path.join(__dirname, '..', '..', '/Users', '.', '/implicit_module'));
// join과 비슷하나 /를 만나면 절대경로로 인식하여 앞의 경로를 무시하고 처리한다
console.log('path.resolve():', path.resolve(__dirname, '..', 'Users', '.', '/implicit_module'));
