// 1a) Write a function that displays a message after 5s.
setTimeout(() => {
    console.log('hello chandu');
}, 5000);


/* 
1b) Write a function called delayedGreeting() that takes two parameters, name and delay time, and logs a greeting message after the given delay time.

Input:
delayGreeting(‘Alice’, 2000)

Output:
Hello, Alice!

*/
// setTimeout(delayGreeting('Alice'),5000);

function delayGreeting(name,time) {
    setTimeout(() => {
      console.log(name); 
    }, time);
    
}

delayGreeting('Alice',2000)