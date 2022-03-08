function findShort(s){
    let arr1= s.split(" ")
    return Math.min.apply(null, arr1.map(el=>el.length))  
    }