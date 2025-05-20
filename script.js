let cartCount = 0;
let cartTotal = 0;

function addToCart(button) {
  const product = button.parentElement;
  const price = parseFloat(product.dataset.price);

  cartCount += 1;
  cartTotal += price;

  document.getElementById('cart-count').innerText = cartCount;
  document.getElementById('cart-total').innerText = cartTotal.toFixed(2);
}
