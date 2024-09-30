const obj = {
    a:3,
    b:4
}

// const add = (a,b) => {
//     return obj.a+obj.b
// }

const add = ({a, b}) => {
    return a+b
}
console.log(add(obj));