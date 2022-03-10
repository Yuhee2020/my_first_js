function find_average(array) {
    if (array.length==0){return 0}
  return array.reduce((a,b)=> a+b, 0)/array.length  
  
  }


  function arrayPlusArray(arr1, arr2) {
    return arr1.concat(arr2).reduce((a,b)=>a+b)
  }//еще редьюс

  function grow(x){
    return x.reduce((a,b)=>a*b)
    }//еще