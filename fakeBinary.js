// https://www.codewars.com/kata/57eae65a4321032ce000002d

function fakeBin(x){
  return x.split('').map((num) => num > 4 ? 1 : 0).join('');
}