//Build a function that returns an array of integers from n to 1 where n>0.

//example : n=5 --> [5,4,3,2,1]

const reverseSeq = n => {
    let arr=[];
    for(i=0; i<n; i++){
      arr.push(n-i)
    } return arr
  };

 // monkeyCount(10) // --> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  function monkeyCount(n) {
    let arr=[]
    for(i=0;i<n;i++){
      arr.unshift(n-i)
    }return arr
     
    }