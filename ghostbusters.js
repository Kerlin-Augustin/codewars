// https://www.codewars.com/kata/5668e3800636a6cd6a000018

function ghostBusters(building) {
  
  return building.includes(' ') ? building.split(' ').join('') : "You just wanted my autograph didn't you?"
}