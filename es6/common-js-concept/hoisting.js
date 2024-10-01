print5();
// print10();
print0;//ata shudu function k nei na shudu variable ta k hoisting kore
for (var i = 0; i < 5; i++) {
    console.log(i);
}
console.log(i);

function print5() {
    console.log('inside print5',5);
}

// const print10 = function() {
//     console.log('inside print5',10);
// }
var print0 = function(){
    console.log('inside print10', 10);
}