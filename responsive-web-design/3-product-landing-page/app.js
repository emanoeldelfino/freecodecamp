let i = 1;

const slide = document.querySelector("section#bottles img");

function changeSlide() {
  slide.src = `./assets/bottle${i}.jpg`;
  i = i < 3 ? i + 1 : 1;
  setTimeout(changeSlide, 3000);
}
changeSlide();
