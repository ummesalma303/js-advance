const loadTodo = () => {
    fetch('https://jsonplaceholder.typicode.com/todos')
        .then(res => res.json())
    .then(data=>displayTodo(data))
}

const displayTodo=(data) => {
    const todoContainer = document.getElementById('todos-container')
    for (const user of data) {
        console.log(user);
        const todoDiv = document.createElement('div');
        todoDiv.classList.add('todo')
        todoDiv.innerHTML = `
        <h3>user:${user.id}</h3>
        <p>title:${user.title}</p>
        `
        todoContainer.appendChild(todoDiv)
    }
}
loadTodo()