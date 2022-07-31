// https://www.codewars.com/kata/58287977ef8d4451f90001a0

function isSameLanguage(list) {
  // thank you for checking out the Coding Meetup kata :)
return list.every(obj => list[0].language === obj.language ) 
}