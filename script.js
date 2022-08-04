const textContainer = document.querySelector(
  ".product-content-container-inner"
);
const imageContainer = document.querySelector(".product-image-container");

let textContainerHeight = textContainer.offsetHeight;

textContainerHeight = textContainerHeight - 48;
console.log(textContainerHeight);

imageContainer.style.height = textContainerHeight + "px";
