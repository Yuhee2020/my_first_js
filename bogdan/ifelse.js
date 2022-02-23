const age = 25
if (age>=18){
    console.log("Is adult")
} 

if (age>=12 && age<18 ){
    console.log("teenager")
}

if (age<12){
        console.log("Is child")
    }


const sumPositiveNumb = (a,b) => {
    if (typeof a !== "number" || typeof b !=="number"){
        return "One of the arguments is a not number"
    }
    if(a<=0 || b<=0){
        return "Numbers are not positive"
    }
    return  a + b
}
console.log(sumPositiveNumb(true,10))