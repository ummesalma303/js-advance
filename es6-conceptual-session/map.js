const arr = [10, 20, 30, 40, 50];
arr.map((items, index, array) => {
  //  console.log(items, index, array)
});

const result = arr.map((items) => {
  const total = items + 2;
  return total; // jodi tumi chao map() method er modde return use korte paro
});
//console.log(total);