// reduce shobshomoy 2ta value nai 1ta hosse previous value arekta current value

const numbers = [1, 5, 7, 1, 2, 66];

const total = numbers.reduce((previous,current) => previous + current,0);

//console.log(total+'zero');

const sum = numbers.reduce((p,c)=>p + c);
//console.log(sum,0);