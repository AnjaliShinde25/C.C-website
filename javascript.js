const products = [
    { id: 1, name: 'Product 1', price: 10.99 },
    { id: 2, name: 'Product 2', price: 15.99 },
    { id: 3, name: 'Product 3', price: 7.99 },
    { id: 4, name: 'Product 4', price: 12.99 },
  ];
  
  let cart = [];
  
  function renderProducts() {
    const productList = document.getElementById('productList');
    products.forEach(product => {
      const productDiv = document.createElement('div');
      productDiv.classList.add('product');
      productDiv.innerHTML = `
        <h3>${product.name}</h3>
        <p>$${product.price.toFixed(2)}</p>
        <button onclick="addToCart(${product.id})">Add to Cart</button>
      `;
      productList.appendChild(productDiv);
    });
  }
  
  function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    cart.push(product);
    updateCart();
  }
  
  function updateCart() {
    const cartCount = document.getElementById('cartCount');
    cartCount.innerText = cart.length;
  
    const cartSection = document.getElementById('cartSection');
    const cartItems = document.getElementById('cartItems');
    const totalAmount = document.getElementById('totalAmount');
  
    cartItems.innerHTML = '';
    let total = 0;
  
    cart.forEach((item, index) => {
      const itemDiv = document.createElement('div');
      itemDiv.innerHTML = `
        <p>${item.name} - $${item.price.toFixed(2)}
        <button onclick="removeFromCart(${index})">Remove</button></p>
      `;
      cartItems.appendChild(itemDiv);
      total += item.price;
    });
  
    totalAmount.innerText = total.toFixed(2);
    cartSection.classList.remove('hidden');
  }
  
  function removeFromCart(index) {
    cart.splice(index, 1);
    updateCart();
  }
  
  document.getElementById('cartBtn').addEventListener('click', function (e) {
    e.preventDefault();
    const cartSection = document.getElementById('cartSection');
    cartSection.classList.toggle('hidden');
  });
  
  renderProducts();
  