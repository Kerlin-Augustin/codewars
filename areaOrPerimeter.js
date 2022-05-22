// https://www.codewars.com/kata/5ab6538b379d20ad880000ab

const areaOrPerimeter = function(l , w) {
  // Return your answer
  if(l === w){
    return l * w
  } else if (l !== w){
    return 2 * l + 2 * w
  }
};