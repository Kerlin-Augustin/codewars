// https://www.codewars.com/kata/58279e13c983ca4a2a00002a

function greetDevelopers(list) {
  // thank you for checking out my kata :)
  // return an array of objects that has a new property 
  // Hi (firstName), what do you like most about (language)  
  
  for( let obj of list ){
    obj.greeting = `Hi ${obj.firstName}, what do you like the most about ${obj.language}?`
  }
  return list
}