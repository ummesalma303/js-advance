// fetch('https://jsonplaceholder.typicode.com/todos/1')
//     .then(res => console.log(res.json()))
// .then(data=>console.log(data))

const showData=async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    // console.log(res);
    const data = await res.json()
    console.log(data);
}
showData()