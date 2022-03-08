
let arrayOfSheep = [true,  true,  true,  false,
    true,  true,  true,  true ,
    true,  false, true,  false,
    true,  false, false, true ,
    true,  true,  true,  true ,
    false, false, true,  true ];

function countSheeps(arrayOfSheep) {
    let num = 0
    arrayOfSheep.forEach(function (el) {
        if (el) { num++ }
    })
    return num
}
