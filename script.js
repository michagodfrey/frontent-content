const slider = document.querySelector(".slider");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const lastImg = document.querySelector(".last");
const firstImg = document.querySelector(".first");

let counter = 0;
const size = slider.children[0].clientWidth;

nextBtn.addEventListener("click", () => {
  lastImg.classList.remove("bounce-right");

  if (counter >= slider.children.length - 3) {
    lastImg.classList.add("bounce-right");
    return;
  }

  slider.style.transform = `translateX(-${(counter + 1) * size}px)`;
  counter++;
});

prevBtn.addEventListener("click", () => {
  firstImg.classList.remove("bounce-left");

  if (counter <= 0) {
    firstImg.classList.add("bounce-left");
    return;
  }

  slider.style.transform = `translateX(-${(counter - 1) * size}px)`;
  counter--;
});
