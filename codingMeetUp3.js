// https://www.codewars.com/kata/5827acd5f524dd029d0005a4

function isRubyComing(list) {
  // thank you for checking out my kata :)
 
  for(let obj of list){
    
      if(obj.language === 'Ruby'){
        return true
      }
    }
  return false
  
}