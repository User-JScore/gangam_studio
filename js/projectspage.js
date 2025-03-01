const projectButtons = document.querySelectorAll(
  ".container__projectspage__list__button"
);
const projectPopup = document.querySelector(".container__popup");
const projectCloseButton = document.querySelector(
  ".container__popup__closebutton"
);
const body = document.querySelector("body");
const projectPhoto = document.querySelectorAll(
  ".container__popup__contentbox__item"
);

const files = [6, 8, 20, 15, 19, 19];

projectButtons.forEach((button, i) => {
  button.addEventListener("click", () => {
    projectPopup.style.display = "block";
    body.style.overflowY = "hidden";

    for (let j = 0; j < files[i]; j++) {
      projectPhoto[j].style.display = "block";
      projectPhoto[j].style.backgroundImage = `url('./img/projects/00${i + 1}/${
        j + 1
      }.webp')`;
    }
  });
});

projectPopup.addEventListener("click", (element) => {
  if (element.target === projectPopup) {
    projectPopup.style.display = "none";
    body.style.overflowY = "auto";

    for (let j = 0; j < 20; j++) {
      projectPhoto[j].style.display = "none";
      projectPhoto[j].style.backgroundImage = "";
    }
  }
});

projectCloseButton.addEventListener("click", (element) => {
  if (element.target === projectCloseButton) {
    projectPopup.style.display = "none";
    body.style.overflowY = "auto";

    for (let j = 0; j < 20; j++) {
      projectPhoto[j].style.display = "none";
      projectPhoto[j].style.backgroundImage = "";
    }
  }
});
