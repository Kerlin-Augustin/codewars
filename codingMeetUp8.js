// https://www.codewars.com/kata/58291fea7ff3f640980000f9

function allContinents(list) {
  // thank you for checking out the Coding Meetup kata :)
  
  let continentList = list.map((obj) => obj.continent)
  console.log(continentList)
  
  if(continentList.includes('Africa') && continentList.includes('Americas') && continentList.includes('Asia') && continentList.includes('Europe') && continentList.includes('Oceania')){
    return true
  }
  return false
}