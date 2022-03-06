function squareDigits(num){
    newArr = num.toString().split("")
     return Number(newArr.map(el=>el**2).join(""))
   }