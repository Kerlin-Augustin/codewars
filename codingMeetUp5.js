// https://www.codewars.com/kata/5828713ed04efde70e000346

function countLanguages(list) {
  // thank you for checking out the Coding Meetup kata :)
  let newObj = {}
  for(let i = 0; i < list.length; i++){
    if(newObj[list[i].language] === undefined){
      newObj[list[i].language] = 1
    } else {
      newObj[list[i].language] ++
    }
  }
  return newObj
}