function positiveSum(arr) {
    let arr2 =arr.filter(el=>el>0)
  let sum = 0;
    for(i=0; i<arr2.length; i++){
      sum+=arr2[i]
    }return sum
  }