https://www.codewars.com/kata/5827bc50f524dd029d0005f2

function getFirstPython(list) {
  // Thank you for checking out my kata :)
  
  for(let i = 0; i < list.length; i++){
    if(list[i].language === 'Python'){
      return `${list[i].firstName}, ${list[i].country}`
    }
  }
  return 'There will be no Python developers'
}