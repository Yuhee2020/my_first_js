const newPost = (post, addedAt = Date())=>({
    ...post,
    addedAt,
})
const firstPost = {
    id: 1,
    author: "Dimasich"
}
console.table(newPost(firstPost))