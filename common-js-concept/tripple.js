// always use ===
// equal comparison doesn't work primitive values
const first = [43,65,65];
const second = [43,65,65];
if (first == second) {
  console.log("values are equal");
} else {
  console.log("values are not equal");
}


if (first === second) {
  console.log("values are equal");
} else {
  console.log("values are not equal");
}
