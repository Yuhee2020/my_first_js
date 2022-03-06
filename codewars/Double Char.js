function doubleChar(str) {
    newStr = ""
   for (i=0; i<str.length; i++){
     newStr += str[i] + str[i] 
   } return newStr
  }

  const doubleChar = (str) => str.split("").map(c => c + c).join("")// тоже самое