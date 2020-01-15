/*
async/await 문법
프로미스를 사용한 코드를 한 번 더 깔끔하게 줄여준다
*/

function findAndSaveUser(Users) {
  Users.findOne({})
    .then((user) => {
      user.name = 'zero';
      return user.save();
    })
    .then((user) => {
      return Users.findOne({ gender: 'm' });
    })
    .then((user) => {
      //생략
    })
    .catch(err => {
      console.error(err);
    });
}

// async/await 문법을 사용한 코드로 변경

async function findAndSaveUser(Users) {
  try{
    let user = await Users.findOne({}); //해당 프로미스가 resolve될 때까지 기다린 뒤 다음 로직으로 넘어감
    user.name = 'zero';
    user = await user.save();
    user = await Users.findOne({ gender: 'm'});
  //생략
    } catch (err) { //에러 처리
      console.error(err);
  }
}
