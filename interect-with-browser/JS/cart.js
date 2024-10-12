function addProduct() {
    const productName = document.getElementById('product-name')
    const productQuantity = document.getElementById('product-quantity')
    const product = productName.value
    const quantity=productQuantity.value
    productName.value = ''
    productQuantity.value=''
    // console.log(product,quantity);
    productDisplay(product, quantity)
    saveProductToLocalStorage(product,quantity)
}

const productDisplay = (product, quantity) => {
    // console.log(product,quantity);
    const ul = document.getElementById('ul');
    const li = document.createElement('li');
    li.innerHTML = `${product} : ${quantity}`
    ul.append(li)
    
}


const getStoredShoppingCart = () => {
    const storeCart =localStorage.getItem('cart') 
    let cart = {};
    if (storeCart) {
        cart = JSON.parse(storeCart);
    }
    return cart
}
const saveProductToLocalStorage = (product,quantity) => {
    const cart = getStoredShoppingCart();
    cart[product] = quantity;
    const cartStringified=JSON.stringify(cart)
    // console.log(cartStringified);
    localStorage.setItem('cart',cartStringified)
}

const displayProductsFromLocalStorage = () => {
    const saveCart = getStoredShoppingCart();
    for (const cart in saveCart) {
        const quantity = saveCart[cart]
        console.log(quantity, cart);
    productDisplay(cart,quantity)
        
    }
    console.log(saveCart);
}
displayProductsFromLocalStorage()