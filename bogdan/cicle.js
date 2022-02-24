const userProfile = {
    name : "vasia",
    age : 30,
    loh : true,
}

const { name, age, loh} = userProfile
console.log(age)

const myArray2 = new Array(1,2,3,4,5,5,6,7)
const [numdone, numbtwo] = myArray2
console.log(numbtwo)  

const userInfo = ({name, age})=> {
   if(!age){
       return "User ${name} has no comments"
   }
   return "User ${name} has ${age} comments"
}
console.log(userInfo(userProfile))