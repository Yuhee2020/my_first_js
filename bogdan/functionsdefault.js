const newPost = (post, addedAt = Date())=>({
    ...post,
    addedAt,
})
const firstPost = {
    id: 1,
    author: "Dimasich"
}
console.table(newPost(firstPost))



function printMyName(){
    console.log("dimas")
}

setTimeout(printMyName, 10000) 