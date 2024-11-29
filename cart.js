
const data = localStorage.getItem("cart");
const convert = JSON.parse(data);
console.log(convert);

let main = document.querySelector(".main");
// convert.map((item) => {
//   main.innerHTML+= `
//     <div class="card" data-aos="fade-up" style="width: 18rem;">
//         <img src="${item.image}" class="card-img-top" alt="..." width=" 80%" height="150px">
//         <div class="card-body">
      
//           <p class="card-text">${item.title}</p>
//         </div>
    
//       </div>
    
//   `;
// });




// let displayproduct = async () => {
//   main.innerHTML="";
//   let product=await fetch('https://fakestoreapi.com/products');
//   let finalproduct=await product.json();
//   finalproduct.forEach(element => {
//       productdiv.innerHTML+=`  
//        <div class="card" data-aos="fade-up" style="width: 18rem;">
//       <img src="${element.image}" class="card-img-top" alt="..." width=" 80%" height="150px">
//       <div class="card-body">
//         <h5 class="card-title">$${element.price}|${element.rating.rate}★★★</h5>
//         <p class="card-text">${element.title}</p>
//       </div>
  
//     </div>
//       `
//   });
// }
// displayproduct()



fetch(`https://fakestoreapi.com/products/${convert}`)
// .then(res => res.json())
.then((res)=>{
        main.innerHTML += `
         <div class="product m-5 d-flex justify-content-center gap-5 flex-wrap " >
         <div class="card" style="width: 18rem;">
    
    <div class="cardbody">
    <img src="${res.image}"alt="..." class="img">
    <h3 class="card"> <span class="span">Titile:</span>${res.title}</h3>
    <h3 class="card"> <span class="span">Category:</span> ${res.category}</h3>
    <h3 class="card"> <span class="span">Description :</span>${res.description}</h3>
    <h3 class="card"><span class="span">Price: $</span>${res.price}</h3>
     
    
    </div>
  </div>
       </div>
    
        `
    })

// .catch((err)=>{
//     console.log(err);
    
// })