let url = `https://fakestoreapi.com/products`;

async function getProduct() {
  let res = await fetch(`https://fakestoreapi.com/products`);

  let product = await res.json();
  renderProduct(product);
  console.log(product);
}
getProduct();

function renderProduct(product) {
  console.log(product);

  product.forEach(function (e) {
    console.log(e);
    let cart = document.createElement("div");
    cart.setAttribute("class", "cart");
    cart.setAttribute("class", "cart");
    let img = document.createElement("img");
    img.setAttribute("class", "append_img");
    img.src = e.img;
    let ptag = document.createElement("p");
    ptag.innerHTML = e.description;
    cart.append(img, ptag);
    document.querySelector(".product_div").append(cart);
  });
}
