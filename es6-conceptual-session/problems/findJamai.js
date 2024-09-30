const polapain = [
    { Name: "Abul", job: "sorkari", salary: 17000 },
    { Name: "Babul", job: "besorkari", salary: 25000 },
    { Name: "Kabul", job: "sorkari", salary: 21000 },
    { Name: "Habul", job: "besorkari", salary: 47000 },
    { Name: "Jabul", job: "sorkari", salary: 23000 },
    { Name: "Mabul", job: "besorkari", salary: 55000 },
  ];
  
// sorkari >= 20000 or  besorkari >=40000
  
const jamai = polapain.filter(polapain => polapain.salary > 20000 && polapain.job === 'sorkari' || polapain.salary >=40000 && polapain.job ==='besorkari');
// console.log(jamai);

const lottery = Math.floor(Math.random() * jamai.length);
console.log(jamai[lottery].Name);
