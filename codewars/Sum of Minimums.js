function sumOfMinimums(arr) {
    arr2 = arr.map(el => Math.min.apply(null, el))
    let summ = 0
    for (i = 0; i < arr2.length; i++) {
        summ = arr2[i] + summ
    } return summ
}