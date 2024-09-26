const products = [
  {
    id: "5960bf40-9603-4a39-9ff6-6cf9f1ce4815",
    category: "Cap",
    name: "UNISEX ORIGINALS WASHED BUCKET",
    seller: "Addidas",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnuozC8renggTg1FaxE1JmlaY5Gvmpk-6oNw&s",
    details: { price: 27, stock: 14, shipping: 14, quantity: 0 },
    ratingsInfo: { ratings: 4, ratingsCount: 3 },
  },
  {
    id: "5991add1-f4ba-4fb9-9b6b-ec59aa2dda60",
    category: "Cap",
    name: "SST Plus Strap-Back Hat",
    seller: "Addidas",
    img: "https://m.media-amazon.com/images/I/514BX0olXHL._AC_UY1100_.jpg",
    details: { price: 23, stock: 14, shipping: 47, quantity: 0 },
    ratingsInfo: { ratings: 4, ratingsCount: 32 },
  },
  {
    id: "5690e579-a943-4b42-9ffe-dfc65b71c560",
    category: "Cap",
    name: "Dispatch Trucker Hat",
    seller: "Addidas",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Basecap_New_York_Yankees.jpg/300px-Basecap_New_York_Yankees.jpg",
    details: { price: 28, stock: 16, shipping: 14, quantity: 0 },
    ratingsInfo: { ratings: 4, ratingsCount: 30 },
  },
  {
    id: "be7a4d0a-c681-416c-ab8d-f9be28223f4e",
    category: "Earphones",
    name: "adidas Z.N.E. 01 True Wireless Earbuds",
    seller: "Addidas",
    img: "https://m.media-amazon.com/images/I/514BX0olXHL._AC_UY1100_.jpg",
    details: { price: 142, stock: 11, shipping: 23, quantity: 0 },
    ratingsInfo: { ratings: 5, ratingsCount: 22 },
  },
  {
    id: "b278e667-ca17-465c-b603-af1af4319b7b",
    category: "Earphones",
    name: "adidas Z.N.E. 01 ANC True Wireless Earbuds",
    seller: "Addidas",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-cA5rIxG6H6dRUTkVmCc40oYdTnLUQ-Y_iQ&s",
    details: { price: 135, stock: 16, shipping: 30, quantity: 0 },
    ratingsInfo: { ratings: 5, ratingsCount: 51 },
  },
  {
    id: "1f56c0e5-4407-44bf-9225-90f592d2924a",
    category: "Earphones",
    name: "FWD-01 Sport In-Ear Headphones",
    seller: "Addidas",
    img: "https://images-cdn.ubuy.ae/64f0219f99d60001de5fe6e3-2pack-adjustable-newsboy-hats-for-men.jpg",
    details: { price: 185, stock: 8, shipping: 15, quantity: 0 },
    ratingsInfo: { ratings: 4, ratingsCount: 66 },
  },
  {
    id: "4ead4708-68e8-4a93-b28e-5e99ccc4d75c",
    category: "Earphones",
    name: "adidas FWD-02 Sport True Wireless Earbuds",
    seller: "Addidas",
    img: "https://images-cdn.ubuy.ae/64f0219f99d60001de5fe6e3-2pack-adjustable-newsboy-hats-for-men.jpg",
    details: { price: 162, stock: 14, shipping: 29, quantity: 0 },
    ratingsInfo: { ratings: 4, ratingsCount: 6 },
  },
  {
    id: "d1116075-10f2-49c4-985e-0d41e19ce1b3",
    category: "Earphones",
    name: "adidas Z.N.E. 01 ANC True Wireless Earbuds",
    seller: "Addidas",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-cA5rIxG6H6dRUTkVmCc40oYdTnLUQ-Y_iQ&s",
    details: { price: 110, stock: 15, shipping: 48, quantity: 0 },
    ratingsInfo: { ratings: 5, ratingsCount: 9 },
  },
];

let count = 0;
let subTotal = 0;
function displayProducts() {
  for (const items of products) {
  const card = document.createElement('div')
  card.innerHTML = `
    <div class="card bg-base-100 w-96 shadow-xl">
            <figure class="px-10 pt-10">
              <img
                src= "${items.img}",
                alt="Shoes"
                class="rounded-xl"
              />
            </figure>
            <div class="card-body items-center text-center">
              <h2 class="card-title">${items.name}</h2>
              <p>Price: ${items.details.price}</p>
              <div onclick="addToCart('${items.name}',${items.details.price})" class="card-actions">
                <button class="btn btn-primary">Add To Cart</button>
              </div>
            </div>
          </div>
  `
  document.getElementById('card-container').append(card)
  // console.log(card);
  }
  
}

function addToCart(name,price) {
   count++
 document.getElementById('count').innerText = count;
  document.getElementById('card-total').innerText= count;
   subTotal += price;
  const cardTotal= document.getElementById('subtotal').innerText=subTotal
  console.log(subTotal);
  
}
displayProducts()