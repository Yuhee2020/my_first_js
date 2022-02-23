 const userProfile = {
     name : "vasia",
     age : 30,
     loh : true,
 }

  

const userInfo = ({name, age})=> {
    if(!age){
        return "User ${name} has no comments"
    }
    return "User ${name} has ${age} comments"
}
console.log(userInfo(userProfile))