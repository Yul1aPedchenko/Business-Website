let currentSlide = 0;
const slides = document.querySelectorAll('.properties-card__item');
const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

function updateButtons() {
  prevBtn.disabled = currentSlide === 0;
  nextBtn.disabled = currentSlide === slides.length - 1;
}

prevBtn.addEventListener('click', () => {
  let number = -1;
  slides[currentSlide].classList.remove('active');
  currentSlide += number;
  slides[currentSlide].classList.add('active');
  updateButtons();
});

nextBtn.addEventListener('click', () => {
  let number = 1;
  slides[currentSlide].classList.remove('active');
  currentSlide += number;
  slides[currentSlide].classList.add('active');
  updateButtons();
});
updateButtons();
