function sumTwoSmallestNumbers(numbers) {  
    let numb1 = Math.min.apply(null, numbers);
    let index = numbers.indexOf(numb1); 
    numbers.splice(index,1); 
    let numb2 = Math.min.apply(null,numbers)
     return numb1+numb2
    }
    