function findDifference(a, b) {
    return Math.abs(a[0]*a[1]*a[2]-b[0]*b[1]*b[2])
       } //модуль числа

function multiply(a, b){
    return  a * b;
    } //умножение

function removeChar(str){
return str.substring(1, str.length-1);
}; //убирает 1 и последний символ строки


function even_or_odd(number) {
    if (number%2 == 0) {
      return "Even";
    } else {
      return "Odd";
    }
  } // четноеб нечетное