const http = require('http');

http.createServer((req, res) => {
  //여기에 어떻게 응답할지 적어준다
  res.write('<h1>Hello Node</h1>');
  res.end('<p>Hello Server</p>');
}).listen(8080, () => {
  console.log('8080번 포트에서 서버 대기 중입니다.');
});

//listen 메서드에 콜백 함수를 넣는 대신 서버에 listening 이벤트 리스너를 붙여도 된다

/*
http.createServer((req, res) => {
  //여기에 어떻게 응답할지 적어준다
  res.write('<h1>Hello Node</h1>');
  res.end('<p>Hello Server</p>');
});
server.listen(8080);
server.on('listening', () => {
console.log('8080번 포트에서 서버 대기 중입니다');
});
server.on('error', (error) => {
console.error(error);
})
*/
