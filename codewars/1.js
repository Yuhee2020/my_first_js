function findDifference(a, b) {
  return Math.abs(a[0] * a[1] * a[2] - b[0] * b[1] * b[2])
} //модуль числа

function multiply(a, b) {
  return a * b;
} //умножение

function removeChar(str) {
  return str.substring(1, str.length - 1);
}; //убирает 1 и последний символ строки


function even_or_odd(number) {
  if (number % 2 == 0) {
    return "Even";
  } else {
    return "Odd";
  }
} // четноеб нечетное


function makeNegative(num) {
  if (num > 0) { return num * -1 }
  else return num
}
//из положительного, в отрицательное

function opposite(number) {
  return -number

}

function maps(x) {
  return x.map(el => el * 2)
}// перебирает массив и умножает значения на 2


function invert(array) {
  return array.map(el => -el);
}// инвертизация массива

function check(a, x) {
  return a.includes(x)
}//проверяет содержит ли массив a, значение x


function check(a, x) {
  return a.includes(x)
}


function hero(bullets, dragons) {
  return bullets / dragons >= 2
}// тру или фолс


function bonusTime(salary, bonus) {
  if (bonus) {
    return "\u00A3" + salary * 10
  } return "\u00A3" + salary
}

function makeUpperCase(str) {
  return str.toUpperCase() // upperCase
}
