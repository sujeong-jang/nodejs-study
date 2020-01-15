/*
화살표 함수(arrow function) 추가
return문을 줄일 수 있다.
*/
function add1(x, y){
  return x+y;
}

//function 선언 대신 "=>" 기호로 선언
const add2 = (x,y) => {
  return x+y;
}

const add3 = (x,y) => (x+y); // 보기좋게 소괄호로 묶어도 되고

const add4 = (x,y) => x+y; //소괄호로 묶지 않아도 된다.

function not1(x){
  return !x;
}

const not2 = x => !x;

// 기존의 this 바인드 방식
var relationship1 = {
  name : 'zero',
  friends : ['nero', 'hero', 'xero'],
  logFriends : function() {
    var that = this; //각자 다른 함수 스코프의 this를 가지므로 that이라는 변수 사용해서 relationship1에 간접적으로 접근
    this.friends.forEach(function(friend) {
      console.log(that.name, friend);
    });
  };
};

// 변경된 this 바인드 방식
const relationship2 = {
  name : 'zero',
  friends : ['nero', 'hero', 'xero'],
  logFriends(){
    this.friends.forEach(friend => {
      //=>를 사용하였기 때문에 바깥 스코프인 logFriends의 this 그대로 사용 가능(상위 스코프의 this를 그대로 물려받음)
      console.log(this.name, friend);
    });
  };
};
relationship2.logFriends();
