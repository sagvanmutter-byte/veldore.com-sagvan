// Very basic front-end demo state
const products = [
  { id: 1, name: "Veldore Atelier Jacket", price: 890, image: "https://images.unsplash.com/photo-1520974730267-3b8a0d8b1b9d?q=80&w=600&auto=format&fit=crop" },
  { id: 2, name: "Silk Evening Shirt", price: 520, image: "https://images.unsplash.com/photo-1520974730267-3b8a0d8b1b9d&q=80&w=600&auto=format&fit=crop" },
  { id: 3, name: "Couture Trousers", price: 680, image: "https://images.unsplash.com/photo-1520974730267-3b8a0d8b1b9d&q=80&w=600&auto=format&fit=crop" }
];

function renderProducts() {
  const list = document.getElementById('product-list');
  list.innerHTML = '';
  products.forEach(p => {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
      <img src="${p.image}" alt="${p.name}">
      <div class="product-name">${p.name}</div>
      <div class="price">$${p.price}</div>
      <button aria-label="Add ${p.name} to cart" class="btn">Add to Cart</button>
    `;
    list.appendChild(card);
  });
}

function initAdminGate() {
  // Simple mock authentication gate for demonstration
  const isAdmin = false; // flip to true to simulate login
  const adminLink = document.getElementById('admin-link');
  const adminSection = document.getElementById('admin');
  if (isAdmin) {
    adminLink.style.display = 'block';
    adminSection.style.display = 'block';
  } else {
    adminLink.style.display = 'none';
    adminSection.style.display = 'none';
  }
}

document.addEventListener('DOMContentLoaded', () => {
  renderProducts();
  initAdminGate();
});