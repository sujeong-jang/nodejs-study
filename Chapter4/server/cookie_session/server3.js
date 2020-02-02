const http = require('http');

const parseCookies = (cookie = '') => //name=zerocho;year=1994처럼 문자열 형식의 쿠키를 { name: 'zerocho', year: '1994'}로 변경해주는 함수
  cookie
    .split(';')
    .map(v => v.split('='))
    .map(([k, ... vs]) => [k, vs.join('=')])
    .reduce((acc, [k,v]) => {
      acc[k.trim()] = decodeURIComponent(v);
      return acc;
    }, {});

    http.createServer((req, res) => {
      const cookies = parseCookies(req.headers.cookie); //먼저 req 객체에 담겨 있는 쿠키 분석
      console.log(req.url, cookies);
      res.writeHead(200, { 'Set-Cookie': 'mycookie=test' });
      res.end('Hello Cookie');
    })
      .listen(8082, () => {
        console.log('8082번 포트에서 서버 대기중입니다.');
      });
