
function loadProducts() {
  const container = document.getElementById("product-container");
  container.innerHTML = "";
  const products = JSON.parse(localStorage.getItem("products") || "[]");
  products.forEach((p, i) => {
    const div = document.createElement("div");
    div.className = "card";
    div.innerHTML = `<img src="${p.img}" alt=""><h3>${p.title}</h3><p>${p.desc}</p>`;
    container.appendChild(div);
  });
}

function addProduct() {
  const title = document.getElementById("title").value;
  const desc = document.getElementById("desc").value;
  const img = document.getElementById("imgUrl").value;
  const products = JSON.parse(localStorage.getItem("products") || "[]");
  products.push({ title, desc, img });
  localStorage.setItem("products", JSON.stringify(products));
  loadProducts();
}

function toggleAdminPanel() {
  document.getElementById("admin-panel").classList.toggle("hidden");
}

document.addEventListener("DOMContentLoaded", loadProducts);
