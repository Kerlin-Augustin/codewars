// https://www.codewars.com/kata/582746fa14b3892727000c4f

function countDevelopers(list) {
  // your awesome code here :)
  
  let europePeople = 0
  for(let i = 0; i < list.length; i++){
     if(list[i].continent === 'Europe' && list[i].language === 'JavaScript'){
     europePeople ++    
  }
 }
 
  return europePeople
  
}