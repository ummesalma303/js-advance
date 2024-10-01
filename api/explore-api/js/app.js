const loadData2 = () => {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
        .then(res => res.json())
    .then(data => console.log(data))
}


const loadUsers = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.json())
    .then(data=>displayUsers(data))
}

const displayUsers =(d)=>console.log(d);