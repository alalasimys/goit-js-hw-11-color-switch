const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548",
];
const refs = {
  startBtn: document.querySelector('button[data-action="start"]'),
  stopBtn: document.querySelector('button[data-action="stop"]'),
};

let intervalId = null;
let isActive = false;

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
function generatedRandomColor(colors) {
  const randomIndexColor = randomIntegerFromInterval(0, colors.length - 1);
  let randomColor = colors[randomIndexColor];
  return randomColor;
}

refs.startBtn.addEventListener("click", onStartSwitchColor);
refs.stopBtn.addEventListener("click", onStoptSwitchColor);

function onStartSwitchColor() {
  if (isActive) {
    return;
  }
  isActive = true;
  intervalId = setInterval(() => {
    document.body.style.backgroundColor = generatedRandomColor(colors);
  }, 1000);
}

function onStoptSwitchColor() {
  clearInterval(intervalId);
  isActive = false;
}
