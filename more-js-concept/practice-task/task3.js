/**
 * Write an async/await function that fetch data from an api and logs a message.

Input:
https://v2.jokeapi.dev/joke/Programming?type=single


Note: you can use an api of your choice
Output:
Two SQL tables sit at the bar. A query approaches and asks "Can I join you?"


Note: output may change according to the api you used
 */

const loadData= async () => {
    const res = await fetch('https://v2.jokeapi.dev/joke/Programming?type=single');
    const data = await res.json();
    console.log(data.joke);
    
}