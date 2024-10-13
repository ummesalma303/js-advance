function show(param) {
  console.log("normal function");
}

show();

const show2 = () => {
  console.log("arrow function");
};
show2();

const show3 = () => {
  return "arrow function";
};
console.log(show3());

const show4 = (x) => {
  console.log("value", x);
};
show4(5);

const show5 = (x) => {
  return x * 2;
};
console.log(show5(5));
