const cartitem =[]
let productdiv = document.querySelector(".product")
let displayproduct = async () => {
    productdiv.innerHTML="";
    let product=await fetch('https://fakestoreapi.com/products');
    let finalproduct=await product.json();
    finalproduct.forEach(element => {
        productdiv.innerHTML+=`  
         <div class="card" data-aos="fade-up" style="width: 18rem;">
        <img src="${element.image}" class="card-img-top" alt="..." width=" 80%" height="150px">
        <div class="card-body">
          <h5 class="card-title">$${element.price}|${element.rating.rate}★★★</h5>
          <p class="card-text">${element.title}</p>
          <a href="#" class="btn btn-primary" onclick="seemore(${element.id})">seemore</a>
          <a href="#" class="btn btn-primary" onclick="addToCart(${element.index})">addToCart</a>
        </div>
    
      </div>
        `
    });
}
displayproduct()
function seemore(id) {
    var data = localStorage.setItem("card",id);
    console.log(data);
    window.location = "seemore.html"
}
function addToCart(productId, productName, productPrice) {
    const existingItem = cart.find((item) => item.id === productId);

    if (existingItem) {
        existingItem.quantity++;
    } else {
        cartitem.push({ id: productId, name: productName, price: productPrice, quantity: 1 });
    }

    renderCart();
}
function checkout() {
  console.log("checkout");
  // local storage ka undar data store krwana ha.
  const convertArrIntoStr = JSON.stringify(cartitem);
  localStorage.setItem("cart", convertArrIntoStr);
  window.location = "cart.html";
}