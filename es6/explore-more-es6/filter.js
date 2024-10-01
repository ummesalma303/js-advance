// filter selects elements based on a condition and returns an array with the elements that fulfilled the condition.
const numbers = [1, 5, 6, 4, 15];
const players = [75, 65, 67, 72, 55, 59];

// const selected = numbers.filter(num => num > 70);
// const selected2 = numbers.filter(num => num > 5);
const selected = players.filter(num => num % 3 === 0);
// console.log(selected);
// console.log(selected2);
console.log(selected);


const friends = ['Tom', 'John', 'Micheal', 'Oliver', 'Tim', 'Joshna'];
const oddFriends = friends.filter(frnd => frnd.length % 2 === 1);
console.log(oddFriends);
