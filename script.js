const textContainer = document.querySelector(
  ".product-content-container-inner"
);
const imageContainer = document.querySelector(".product-image-container");

function resizeImage() {
  let textContainerHeight = textContainer.offsetHeight;
  imageContainer.style.height = textContainerHeight + "px";
}

resizeImage();
