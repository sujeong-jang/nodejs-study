/*
인터넷 주소를 쉽게 조작하도록 도와주는 모듈
url 처리에는 크게 두 가지 방식이 있다
1. 노드 7버전에서 추가된 WHATWG 방식
2. 원래 노드에서 사용하던 url 방식
*/

// 기존 노드의 url 구분 방법
const url = require('url');

const URL = url.URL;
const myURL = new URL('http://www.gilbut.co.kr/book/bookList.aspx?sercatel=00100100#anchor');
console.log('new URL():', myURL);
console.log('url.format():', url.format(myURL));


// 노드 7버전에서 추가된 WHATWG url 구분 방법
const parsedUrl = url.parse('http://www.gilbut.co.kr/book/bookList.aspx?sercatel=00100100#anchor');
console.log('url.parse():', parsedUrl); // 주소를 분해한다
console.log('url.format():', url.format(parsedUrl)); // 분해되었던 url 객체를 다시 원래 상태로 조립
