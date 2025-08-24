const phrases = [
  "내일을 실현하는 데 유일한 한계는 오늘의 의심이다",
  "미래를 예측하는 가장 좋은 방법은 그것을 창조하는 것이다",
  "인생은 당신이 다른 계획을 세우느라 바쁠 때 일어나는 것이다.",
  "새로운 목표를 세우거나 꿈꾸기에 너무 늙은 나이는 없다.",
  "결국 중요한 것은 당신의 인생 속의 연수가 아니라, 그 연수 속의 삶이다.",
  "자꾸만 당신을 다른 사람으로 만들려는 세상에서 자신이 되는 것은 가장 위대한 성취이다.",
  "천 리 길도 한 걸음부터 시작된다",
  "행복은 미리 만들어진 것이 아니다. 그것은 당신의 행동에서 나온다.",
  "최고의 복수는 엄청난 성공이다.",
  "어제가 오늘을 너무 많이 차지하게 두지 마라",
  "성공은 최종적이지 않고, 실패는 치명적이지 않다: 중요한 것은 계속할 용기이다.",
  "멈추지 않는 한 얼마나 천천히 가는지는 중요하지 않다.",
  "할 수 있다고 믿어라. 그러면 반은 이룬것이다.",
  "당신의 행동이 변화를 만든다고 믿어라. 그것은 그렇다.",
  "사는 것은 세상에서 가장 드문 일이다. 대부분의 사람들은 존재할 뿐이다.",
  "당신이 될 수 있었던 사람이 되기에 늦은 때란 없다.",
  "항상 햇빛을 향해 얼굴을 돌려라. 그러면 그림자는 뒤에 생길 것이다.",
  "유일하게 불가능한 여행은 당신이 결코 시작하지 않은 여행이다",
  "당신의 시간은 제한되어 있으니 다른 사람의 인생을 사느라 낭비하지 마라.",
  "당신이 할 수 있는 가장 큰 모험을 꿈꾸는 삶을 사는 것이다."
];

const textEl = document.getElementById("text");
const btnEl = document.getElementById("btn");

let lastIndex = -1;

btnEl.addEventListener("click", () => {
  textEl.classList.add("fade");

  setTimeout(() => {
    let idx;
    do {
      idx = Math.floor(Math.random() * phrases.length);
    } while (idx === lastIndex);

    lastIndex = idx;
    textEl.textContent = phrases[idx];
    textEl.classList.remove("fade");
  }, 200);
});
