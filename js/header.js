const hambugerButtonbox = document.querySelector(
  ".container__header__buttonbox"
);
const header = document.querySelector(".container__header");
const hambugerButton = document.querySelector(
  ".container__header__buttonbox__button"
);
const corp = document.querySelector(".container__header__logobox__corp");
const menu = document.querySelector(".container__header__menu");
const blurBlock = document.querySelector(".container__header__blur");

hambugerButtonbox.addEventListener("click", () => {
  header.classList.toggle("container__header-active");
  hambugerButton.classList.toggle(
    "container__header__buttonbox__button-active"
  );
  corp.classList.toggle("container__header__logobox__corp-active");
  menu.classList.toggle("container__header__menu-active");
  blurBlock.classList.toggle("container__header__blur-active");
});

blurBlock.addEventListener("click", () => {
  header.classList.toggle("container__header-active");
  hambugerButton.classList.toggle(
    "container__header__buttonbox__button-active"
  );
  corp.classList.toggle("container__header__logobox__corp-active");
  menu.classList.toggle("container__header__menu-active");
  blurBlock.classList.toggle("container__header__blur-active");
});
