// HTML / CSS II Class Project

// Image Variables
let images = [
  {
    image: "Images/storefront.png",
    alt: "Extreme Audio Kansas City Storefront",
  },
  {
    image: "Images/hero2KC.png",
    alt: "Kansas City, Missouri Skyline viewed from the National WWI Museum",
  },
  {
    image: "Images/Hero1.png",
    alt: "Trunk with speakers in the back",
  },
  {
    image: "Images/Hero4.png",
    alt: "Photo of high quality speakers in the back of a vehicle",
  },
];

// Get the html element for the hero image
let heroImage = document.getElementById("hero-image");

// Create a global variable that will not be changed to start the index of the image
let imageIndex = 1;
// Set the image and change it every 10 seconds
let rotateHeroImages = setInterval(() => {
  // Add a class that triggers the transition effect transition
  heroImage.classList.add("transition-effect");
  // Set Image Properties
  heroImage.setAttribute("src", images[imageIndex].image); // Set the image path to the path of a random image in the array
  heroImage.setAttribute("alt", images[imageIndex].alt); // Set the alt attribute to the alt of the corresponding image
  // Once the Images have been set... Add one to the Image Index so the next image can display
  imageIndex += 1;

  // If the image index is longer than the array of images...
  if (imageIndex > images.length - 1) {
    // Reset the index
    imageIndex = 0;
  }

  // Wait for the transition to complete, then remove the transition-effect
  setTimeout(() => heroImage.classList.remove("transition-effect"), 3000);
}, 5000);

// TODO: Make sure the arrows will add the transition
// Create a function that will change photos when the arrow is clicked on
function nextImage() {
  // This switch statement will check to see what current image is on display, then manually change to the next image
  switch (heroImage.alt) {
    case "Extreme Audio Kansas City Storefront":
      heroImage.setAttribute("src", images[1].image);
      heroImage.setAttribute("alt", images[1].alt);
      break;
    case "Kansas City, Missouri Skyline viewed from the National WWI Museum":
      heroImage.setAttribute("src", images[2].image);
      heroImage.setAttribute("alt", images[2].alt);
      break;
    case "Trunk with speakers in the back":
      heroImage.setAttribute("src", images[3].image);
      heroImage.setAttribute("alt", images[3].alt);
      break;
    case "Photo of high quality speakers in the back of a vehicle":
      heroImage.setAttribute("src", images[0].image);
      heroImage.setAttribute("alt", images[0].alt);
      break;
  }
}

// Create a function that will check to see what current image is on display, then manually change to the previous image
function prevImage() {
  // This switch statement will check to see what current image is on display, then manually change to the next image
  switch (heroImage.alt) {
    case "Extreme Audio Kansas City Storefront":
      heroImage.setAttribute("src", images[3].image);
      heroImage.setAttribute("alt", images[3].alt);
      break;
    case "Kansas City, Missouri Skyline viewed from the National WWI Museum":
      heroImage.setAttribute("src", images[0].image);
      heroImage.setAttribute("alt", images[0].alt);
      break;
    case "Trunk with speakers in the back":
      heroImage.setAttribute("src", images[1].image);
      heroImage.setAttribute("alt", images[1].alt);
      break;
    case "Photo of high quality speakers in the back of a vehicle":
      heroImage.setAttribute("src", images[2].image);
      heroImage.setAttribute("alt", images[2].alt);
      break;
  }
}

// Grab the arrow elements and add an event listener that listens for clicks
let nextArrow = document
  .getElementById("arrow-next")
  .addEventListener("click", nextImage);

let backArrow = document
  .getElementById("back-arrow")
  .addEventListener("click", prevImage);

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
