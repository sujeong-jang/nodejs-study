// 비구조화 할당

//기존의 코드
var candyMachine = {
  status: {
    name: 'node',
    count: 5,
  },
  getCandy: function() {
    this.status.count--;
    return this.status.count;
  }
};
var getCandy candyMachine.getCandy;
var count = candyMachine.status.count;

//바뀐 코드 (객체와 배열로부터 속성이나 요소를 쉽게 꺼낼 수 있다)
const candyMachine = {
  status: {
    name: 'node',
    count: 5,
  },
  getCandy() {
    this.status.count--;
    return this.status.count;
  }
};
// candyMachine 객체 안의 속성을 찾아서 변수와 매칭. getCandy와 count 변수 초기화
const { getCandy, status: {count} } = candyMachine;

//배열도 비구조화 가능
//기존의 코드
var array = ['nodejs', {}, 10, true];
var node = array[0];
var obj = array[1];
var bool = array[3];

//바뀐 코드
const array = ['nodejs', {}, 10, true];
const [node, obj, , bool] = array;
