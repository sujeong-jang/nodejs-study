
/*
console.time(레이블) : console.timeEnd(레이블)과 대응되어 같은 레이블을 가진 time과 timeEnd 사이의 시간 측정
console.dir(객체, 옵션) : 객체를 콘솔에 표시할 때 사용 옵션의 colors를 true로 하면 콘솔에 색 추가
                         depth는 객체 안의 객체를 몇 단계까지 보여줄지 결정 (default는 2)
console.trace(레이블) : 에러가 어디서 발생했는지 추적할 수 있게 해줌
*/
const string = 'abc';
const number = 1;
const boolean = true;
const obj = {
  outside: {
    inside : {
      key: 'value',
    },
  },
};

console.time('전체 시간');
console.log('평범한 로그. 쉼표로 구분해 여러 값을 찍을 수 있다');
console.log(string, number, boolean);
console.error('에러 메세지 출력');

console.dir(obj, { colors: false, depth: 2 });
console.dir(obj, { colors: true, depth: 1});

console.time('시간 측정');
for (let i = 0; i < 10000; i++) {
  continue;
}
console.timeEnd('시간 측정');

function b() {
  console.trace('에러 위치 추적');
}

function a() {
  b();
}

a();

console.timeEnd('전체 시간');
