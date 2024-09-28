const friends = ["arha", "farha", "faru", "sabi", "abul", "tabul"];

const friendsFun = (friends) => {
  let result = [];
  for (let friend of friends) {
    if (friend.length % 2 === 0) {
      result.push(friend);
    }
  }
  return result;
};

//   console.log(friendsFun(friends));

const numbers1 = [2, 4, 5, 6, 9];

const sqrNumber = (sqr) => {
  let total = 0;
  for (let num of sqr) {
    sq = num * num;
    total += sq;
    console.log(sq);
  }
  return total;
};
const result = sqrNumber(numbers);
console.log(result);
