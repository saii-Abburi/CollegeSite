const slides = document.querySelectorAll(".carousel-slide");
const indicators = document.querySelectorAll(".indicator");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
let index = 0;

function showSlide(n) {
  slides.forEach((slide, i) => {
    slide.classList.toggle("active", i === n);
    indicators[i].classList.toggle("active", i === n);
  });
}

next.addEventListener("click", () => {
  index = (index + 1) % slides.length;
  showSlide(index);
});

prev.addEventListener("click", () => {
  index = (index - 1 + slides.length) % slides.length;
  showSlide(index);
});

indicators.forEach((ind, i) => {
  ind.addEventListener("click", () => {
    index = i;
    showSlide(index);
  });
});

// Auto-slide every 5s
setInterval(() => {
  index = (index + 1) % slides.length;
  showSlide(index);
}, 6000);
