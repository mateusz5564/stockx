const thumbnails = document.querySelector(".order-images__thumbnails");
const mainImg = document.querySelector(".order-images__main-img");

if (thumbnails && mainImg) {
  thumbnails.addEventListener("click", e => {
    const thumbnail = e.target.closest(".order-images__thumbnail-img");
    if (thumbnail) {
      const currentMainImgSrc = mainImg.src;
      mainImg.src = thumbnail.src;
      thumbnail.src = currentMainImgSrc;
    }
  });
} else {
  console.error("Required elements not found");
}
