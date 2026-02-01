// script.js

document.addEventListener("DOMContentLoaded", () => {
  const subscribeButtons = document.querySelectorAll(".subscribe-btn");

  subscribeButtons.forEach(button => {
    button.addEventListener("click", (e) => {
      const input = button.previousElementSibling;
      if (input && input.value.includes("@")) {
        alert("Thank you for subscribing!");
        input.value = "";
      } else {
        alert("Please enter a valid email address.");
      }
    });
  });

  const searchBox = document.querySelector(".search-box");
  const searchIcon = document.querySelector(".fa-search");

  searchIcon.addEventListener("click", () => {
    if (searchBox.value.trim() !== "") {
      alert(`Searching for: ${searchBox.value}`);
    } else {
      alert("Please enter a product name to search.");
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {

  // ================= Add to Cart =================
  const buttons = document.querySelectorAll(".add-to-cart");

  buttons.forEach(button => {
    button.addEventListener("click", function () {

      const product = {
        name: button.dataset.name,
        price: Number(button.dataset.price),
        image: button.dataset.image,
        quantity: 1
      };

      let cart = JSON.parse(localStorage.getItem("cart")) || [];

      // Check if product already exists
      const existingProduct = cart.find(item => item.name === product.name);
      if (existingProduct) {
        existingProduct.quantity += 1; // Increase quantity
      } else {
        cart.push(product); // Add new product
      }

      localStorage.setItem("cart", JSON.stringify(cart));

      // Redirect to cart
      window.location.href = "cart.html";
    });
  });

  // ================= Load Cart Page =================
  const cartDiv = document.getElementById("cart-items");
  if (!cartDiv) return;

  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  if (cart.length === 0) {
    cartDiv.innerHTML = "<p>Your cart is empty</p>";
    return;
  }

  cartDiv.innerHTML = ""; // Clear previous content

  cart.forEach((item, index) => {
    cartDiv.innerHTML += `
      <div style="margin-bottom:15px;">
        <img src="${item.image}" width="80"><br>
        <strong>${item.name}</strong><br>
        ₹${item.price} × ${item.quantity} = ₹${item.price * item.quantity}<br>
        <button class="remove-btn" data-index="${index}">Remove</button>
      </div>
    `;
  });

  // ================= Remove Button =================
  const removeButtons = document.querySelectorAll(".remove-btn");
  removeButtons.forEach(button => {
    button.addEventListener("click", () => {
      const index = button.dataset.index;
      cart.splice(index, 1); // Remove product
      localStorage.setItem("cart", JSON.stringify(cart));
      location.reload(); // Refresh cart page
    });
  });

});
