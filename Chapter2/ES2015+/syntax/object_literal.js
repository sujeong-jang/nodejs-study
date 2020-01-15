//객체 리터럴 - 편리한 기능 추가

//기존의 객체 리터럴
var sayNode = function(){
  console.log('Node');
};

var es = 'ES';
var oldObject = {
  sayJS : function(){
    console.log('JS');
  },
  sayNode : sayNode,
};
oldObject[es + 6] = 'Fantastic';

oldObject.sayNode(); // Node
oldObject.sayJS(); // JS
console.log(oldObject.ES6); //Fantastic

//바뀐 객체 리터럴
const newObject = {
  sayJS() {
    console.log('JS');
  },
  sayNode, //속성명과 변수명이 겹치는 경우에는 한 번만 써도 됨
  [es + 6] : 'Fantastic', // 객체의 속성명 동적으로 생성 가능
};
newObject.sayNode(); // Node
