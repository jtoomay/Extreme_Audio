// Products Page JS File

// * Get all of the products
let draggable = document.querySelectorAll(".product");
let containers = document.querySelectorAll(".container");
let containersProduct = document.querySelectorAll(".container-picked");

// * Loop and add an event listener that listens for the drag to start
draggable.forEach((item) => {
  // * Listener for the start of the drag
  item.addEventListener("dragstart", () => {
    item.classList.add("dragging");
  });
  // * Listener for the end of the drag
  item.addEventListener("dragend", () => {
    item.classList.remove("dragging");
  });
});

// * This is for the products. This is so they can be dragged back into the products
containers.forEach((item) => {
  item.addEventListener("dragover", () => {
    const draggable = document.querySelector(".dragging");
    item.appendChild(draggable);
  });
});

// * This is for the products that the user selects
containersProduct.forEach((item) => {
  item.addEventListener("dragover", () => {
    const draggable = document.querySelector(".dragging");
    item.appendChild(draggable);
  });
});

// * Mobile Menu Toggle
let mobileToggle = document.querySelector("#mobile-nav-toggle");
mobileToggle.addEventListener("click", () => {
  let mobileMenu = document.querySelector("#mobile-nav");
  // mobileMenu.classList.toggle(".hide-nav");
  if (mobileMenu.classList.contains("hide-nav")) {
    mobileMenu.classList.remove("hide-nav");
  } else {
    mobileMenu.classList.add("hide-nav");
  }
});
