// https://www.codewars.com/kata/582887f7d04efdaae3000090

function findSenior(list) {
  // thank you for checking out the Coding Meetup kata :)
//   console.log(list.map(e => e.age))
  let ageList = list.map(e => e.age)
//   ageList.sort((a,b) => a - b)
//   console.log(Math.max(...ageList))
  return list.filter((e) => Math.max(...ageList) === e.age)
  
}