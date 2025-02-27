const projectsBlock = document.querySelector(".container__main__projects");

let walls = [
  "./img/projects.png",
  "./img/projects2.jpg",
  "./img/projects3.jpg",
  "./img/projects4.jpg",
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
