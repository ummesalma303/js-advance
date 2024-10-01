// const user = { id: 1, name: 'Gorib Aamir', job: 'actor' };
// console.log(user); 


// JSON => javascript object notation


const user = { id: 1, name: 'Gorib Aamir', job: 'actor' };
const stringify = JSON.stringify(user);

//console.log(user);
// number and boolean betito shobkisu kei json.stringify() string a convert kore fele.
//console.log(stringify);

// normal object format => //{ id: 1, name: "Gorib Aamir", job: "actor" }
//JSON format => {"id":1,"name":"Gorib Aamir","job":"actor"}




const shop = {
  owner: 'Alia',
  address: {
    street: 'kochukhet voot er goli',
    city: 'ranbir',
    country: 'BD'
  },
  products: ['laptop', 'mic', 'monitor', 'keyboard'],
  revenue: 45000,
  isOpen: true,
  isNew: false
};

console.log(shop)

const shopJson = JSON.stringify(shop);

const shopObj = JSON.parse(shopJson);
//console.log(typeof shopJson);
//console.log(typeof shopObj);


