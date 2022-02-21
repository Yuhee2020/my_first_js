const myCity = {
    city: "New york",
    cityGreeting (){
        console.log("Greetings!!")
    } 
}


const myCity2 = Object.assign({}, myCity)
myCity2.city = "Brest"
console.log(myCity.city)
console.log(myCity2.city)

const myCity3 = {...myCity}
console.log(myCity3.city)

const myCity4 = JSON.parse(JSON.stringify(myCity))
console.log(myCity4.city)