function countPositivesSumNegatives(input) {
    if( input===null || input.length<1 ){
      return []
    }
    count = 0;
    summ = 0;
    for(i=0; i<input.length; i++){
    if (input[i]>0){count+=1};
    if (input[i]<0){summ+=input[i]}
      }return [count, summ] 
   