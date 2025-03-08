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
const projectBoxOpen = document.querySelectorAll(".projectspage__list__item");
const galleryBox = document.getElementById("popup__gallery");

async function loadJSONData() {
  try {
    const response = await fetch("./js/allObjectsDir.json");
    const jsonDataDir = await response.json();

    projectButtons.forEach((button, counter) => {
      button.addEventListener("click", () => {
        projectPopup.style.display = "block";
        body.style.overflowY = "hidden";

        async function createPhotosList() {
          try {
            const responsePhotosinDir = await fetch(
              `./js/${jsonDataDir[counter]}.json`
            );
            const jsonPhotosinDir = await responsePhotosinDir.json();

            jsonPhotosinDir.forEach((photo) => {
              let cardForPhoto = document.createElement("article");

              galleryBox.appendChild(cardForPhoto);
              galleryBox.lastElementChild.classList.add(
                "container__popup__contentbox__item"
              );
              galleryBox.lastElementChild.style.display = "block";
              galleryBox.lastElementChild.style.backgroundImage = `url('./img/projects/${jsonDataDir[counter]}/${photo}')`;
            });
          } catch (err) {
            alert("Reload page!");
            return createPhotosList();
          }
        }

        createPhotosList();
      });
    });
  } catch (err) {
    return loadJSONData();
  }
}

loadJSONData();

projectPopup.addEventListener("click", (element) => {
  if (
    element.target === projectPopup ||
    element.target === projectCloseButton
  ) {
    projectPopup.style.display = "none";
    body.style.overflowY = "auto";

    let childCounter = galleryBox.childElementCount;

    console.log(childCounter);
    for (let i = 0; i < childCounter; i++) {
      galleryBox.removeChild(galleryBox.lastElementChild);
    }
  }
});
