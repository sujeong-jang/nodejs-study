/*
자바스크립트와 노드에서는 주로 비동기 프로그래밍을 한다
특히 이벤트 주도 방식때문에 콜백 함수를 자주 사용
ES2015부터는 자바스크립트와 노드의 API들이 콜백 대신 프로미스 기반으로 재구성 된다.
*/

//프로미스는 다음과 같은 규칙이 있다.
//먼저, 프로미스 객체 생성
const condition = true;
const promise = new Promise((resolve, reject) => {
  if(condition){
    resolve('성공');
  } else {
    reject('실패');
  }
});

//resolve와 reject에서 넣어 준 인자는 then과 catch의 매개변수에서 받을 수 있다.
promise
  .then((message) => { //  resolve('성공')이 호츌되면 실행됨
    console.log(message);
  })
  .catch((error) => { //reject('실패')가 호출되면 실행됨
    console.error(error);
  });

  //콜백 함수가 세 번 중첩된 코드
  function findAndSaveUser(Users) {
    Users.findOne({}, (err, user) => { //첫 번째 콜백
      if (err) {
        return console.error(err);
      }
      user.name = 'zero';
      user.save((err) => { //두 번째 콜백
        if (err) {
          return console.error(err);
        }
        Users.findOne({ gender : 'm' }, (err, user) => { //세 번째 콜백
          // 생략
        });
      });
    });
  }

/*
  윗 부분 프로미스로 변경
  코드의 깊이가 더 이상 깊어지지 않음
  하지만 모든 콜백함수를 위와 같이 바꿀 수 있는 것은 아님 (메서드가 프로미스 방식을 지원해야 함)
*/
  function findAndSaveUser(Users) {
    Users.findOne({})
      .then((user) => {
        user.name = 'zero';
        return user.save();
      })
      .then((user) => {
        return Users.findOne({ gender: 'm'});
      })
      .then((user) => {
        //생략
      })
      .catch(err => {
        console.error(err);
      });
    }

  //프로미스 여러개 한번에 실행할 수 있는 방법
  const promise1 = Promise.resolve('성공1');
  const promise2 = Promise.resolve('성공2');
  Promise.all([promise1, promise2])
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.error(error);
    });
