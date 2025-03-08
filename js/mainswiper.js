const mainSwiper = document.querySelector(".container__main__home");
const mainPhotos = [
  "./img/home.webp",
  "./img/projects/001/4_1.webp",
  "./img/projects/003/11.webp",
  "./img/projects/003/12.webp",
  "./img/projects/006/1.webp",
  "./img/projects/006/7.webp",
];
let i = 0;

let swiperM = setInterval(() => {
  mainSwiper.style.backgroundImage = `url('${mainPhotos[i]}')`;
  i++;
  if (i == mainPhotos.length) i = 0;
}, 3000);
