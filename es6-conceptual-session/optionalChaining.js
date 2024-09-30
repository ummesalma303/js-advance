const petOwner = {
  name: "Jolonto Kholil",
  contact: {
    phone: "09376253",
    email: "xyz@gmail.com",
  },
  pet: {
    name: "Lofie",
    info: {
      color: "black",
      weight: "1.2kg",
    },
  },
  food: ["apple", "orange", "pepeya"],
};

console.log(petOwner.contact.phone); //❌
console.log(petOwner?.address?.houseno);
console.log(petOwner?.contact?.phone); //✅
