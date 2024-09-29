/**
 * True
 * 1. 0 betito shob number true
 * 2. string
 * 3.true
 * 4.empty array []
 * 5. empty object {}
 * False
 * 1.0
 * 2.false
 * 3. empty string
 * 4. undefined
 * 5. null
 */

let x = null;

if (x) {
    console.log('value of x is truthy');
} else {
    console.log('value of x is falsy'); 
}


// optional
// check falsy
const y = null;
if (!y) {
    console.log('value is falsy')
} else {
    console.log('value is true')
}


const z = null;
if (!!z) {
    console.log('value is truthy')
} else {
    console.log('value is falsy')
}