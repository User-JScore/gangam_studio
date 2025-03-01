const person = document.querySelector("#person");
const position = document.querySelector("#position");
const personName = document.querySelector("#name");
const overview = document.querySelector("#overview");
const teamPersons = [
  "./img/ceo.webp",
  "./img/designer.webp",
  "./img/other.webp",
];
const positions = ["CEO", "Designer", "Other"];
const names = ["John Doe", "Jane Doe", "Kim Doe"];
const overviews = [
  "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem, libero quia tempora non fugit vel at voluptatem esse sapiente odit eveniet tenetur ratione repudiandae reprehenderit. Aliquam blanditiis recusandae nulla dolores.",
  "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem, libero quia tempora non fugit vel at voluptatem esse sapiente odit eveniet tenetur ratione repudiandae reprehenderit.",
  "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
];
let counter = 0;

let teamTimer = setInterval(() => {
  if (counter < teamPersons.length) {
    person.style.backgroundImage = "url('" + teamPersons[counter] + "')";
    position.textContent = positions[counter];
    personName.textContent = names[counter];
    overview.textContent = overviews[counter];
    counter++;
  } else {
    counter = 0;
  }
}, 3000);
