const myLoader = () => {
  return new Promise((resolve, reject) => {
    const success = Math.random();
    if (success < 0.3) {
      resolve(success);
    } else {
      reject(success);
    }
  });
};

myLoader()
  .then((data) => console.log("resolved:", data))
  .catch((data) => console.log("reject with value:", data));

fetch("https://jsonplaceholder.typicode.com/users")
  .then((res) => res.json())
  .then((data) => console.log(data))
  .catch((err) => console.error("ERROR:", err));

async function loadData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  console.log(data);
}

loadData();

const taskLoader = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  console.log(data);
};

taskLoader()