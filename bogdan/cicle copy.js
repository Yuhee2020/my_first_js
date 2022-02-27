for (let i=0; i<5; i++){
    console.log(i)
}

let o = 0
while (o<5){
    console.log(o)
    o++
}


let y=0
do{
    console.log(y)
    y++
} while (y<5)


const myObject = {
    x: 10,
    y: true,
    z: "abc"
}
for(const key in myObject){
    console.log(key, myObject[key])
}