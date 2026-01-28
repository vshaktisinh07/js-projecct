const slides = document.getElementById("slides");
const totalSlides = slides.children.length;
let index = 0;

function showSlide() {
  slides.style.transform = `translateX(-${index * 400}px)`;
}

document.getElementById("next").addEventListener("click", () => {
  index = (index + 1) % totalSlides;
  showSlide();
});

document.getElementById("prev").addEventListener("click", () => {
  index = (index - 1 + totalSlides) % totalSlides;
  showSlide();
});
