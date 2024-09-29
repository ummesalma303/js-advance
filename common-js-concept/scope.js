// a,b k function scope er modde paowa jabe.kintu global scope er modde tar kono access nai.
// {......} curly bracket er vitor k bole block scope bahirer tak bole global scope.
function add(a, b) {
    const total = a + b;
    if (a > 5) {
        const sum = a + 5 +b;
        // console.log(sum);
        
    } else {
        const sum = 5 + a + b;
        var current = sum;
    }
    // console.log(sum); //sum block scope er modde royeche tai block scope er bahire er kono access nai.
    console.log(current);
    
    // console.log(total);   
}
// console.log(a,b);
// console.log(total);
add(5,3)