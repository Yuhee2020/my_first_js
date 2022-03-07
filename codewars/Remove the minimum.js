function removeSmallest(numbers) {
    let numb= Math.min.apply(null, numbers)
    
    
    let index= numbers.indexOf(numb)
     let numbers1=numbers.slice()
     numbers1.splice(index,1)
     return numbers1
  }