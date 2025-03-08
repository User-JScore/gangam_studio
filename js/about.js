const person = document.querySelector("#person");
const position = document.querySelector("#position");
const personName = document.querySelector("#name");
const overview = document.querySelector("#overview");
const teamPersons = [
  "./img/ceo.webp",
  "./img/designer.webp",
  "./img/other.webp",
  "./img/construction.webp",
];
const positions = [
  "CEO",
  "Designer",
  "Office-manager",
  "Construction site manager",
];
const names = ["John Doe", "Jane Doe", "Kim Doe", "Nick Doe"];
const overviews = [
  "우리 이사님은 어떤 혼란스러운 상황에서도 모든 일을 완벽하게 조율하는 분입니다. 여러 가지 업무를 능숙하게 다루고, 불가능한 상황에서도 협상을 성사시켜요. 항상 일이 원활하게 진행되도록 만드는 방법을 알고 계시죠. 만약 프로젝트 관리가 올림픽 종목이라면, 금메달을 확실히 딸 분입니다.",
  "우리 인테리어 디자이너는 “빈 공간”을 꿈의 공간으로 바꾸는 사람입니다. 어떤 벽이든 기능적이면서도 아름답게 변형할 수 있죠. 만약 인테리어가 단지 스타일에만 국한된다고 생각한다면, 우리 디자이너는 편안함과 실용성까지 트렌드에 맞게 조화롭게 만들어낼 거예요.",
  "우리 오피스 매니저는 오케스트라의 지휘자처럼 스타일, 예산, 그리고 공급업체까지 모든 요소를 완벽하게 조율합니다. 그리고 가장 합리적인 가격을 찾아내는 세심한 감각을 갖추고 있습니다. 탁월한 미적 감각과 디테일을 중시하는 그의 노력 덕분에, 모든 프로젝트는 하나의 완성도 높은 작품으로 탄생합니다. ",
  "우리 현장 감독님은 마치 마술사처럼, 어떤 공간이든 완벽하게 완성해냅니다. 자재 문제가 생겨도 척척 해결하고, 마감일까지 남은 작업도 이미 끝내놓죠. 그와 함께라면 건설 현장은 언제나 빠르고 효율적으로 움직이며, 어떤 문제든 기발한 해결책으로 풀어갑니다. ",
];
let counter = 0;

let teamTimer = setInterval(() => {
  person.style.backgroundImage = "url('" + teamPersons[counter] + "')";
  position.textContent = positions[counter];
  personName.textContent = names[counter];
  overview.textContent = overviews[counter];
  counter++;
  if (counter == teamPersons.length) {
    counter = 0;
  }
}, 3000);
