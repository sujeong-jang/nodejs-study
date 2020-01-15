/*
 템플릿 문자열 - `` 사용
 문자열 안에 변수를 넣을 수 있다.
*/

//기존 ES5 문법을 사용한 문자열
var num1 = 1;
var num2 = 2;
var result = 3;
var string1 = num1 + ' 더하기 ' + num2 + '는 \'' + result + '\'';
console.log(string1);

//밴경된 ES2015 문법을 사용한 문자열
var string2 = `${num1} 더하기 ${num2}는 '${result}'`;
console.log(string2);
