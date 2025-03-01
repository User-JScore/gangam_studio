const projectsBlock = document.querySelector(".container__main__projects");

let walls = [
  "./img/projects.webp",
  "./img/projects2.webp",
  "./img/projects3.webp",
  "./img/projects4.webp",
];

let counter = 0;

let timer = setInterval(() => {
  if (counter < walls.length) {
    projectsBlock.style.backgroundImage = "url('" + walls[counter] + "')";
    counter++;
  } else {
    counter = 0;
  }
}, 4000);
