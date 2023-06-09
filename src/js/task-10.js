function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputValueEl = document.querySelector('input');
const createBtnEl = document.querySelector('[data-create]');
const destroyBtnEl = document.querySelector('[data-destroy]');
const boxesOutputEl = document.querySelector('div#boxes');

createBtnEl.addEventListener('click', onCreateBtnClick);
destroyBtnEl.addEventListener('click', onDestroyBtnClick);

function onCreateBtnClick() {
  createBoxes(inputValueEl.value);
}

function onDestroyBtnClick() {
  boxesOutputEl.innerHTML = '';
}

//!----1 вариант решения через append

// function createBoxes(amount) {
//   onDestroyBtnClick();
//   let initialBoxSize = 20;
//   for (let i = 0; i < amount; i += 1) {
//     initialBoxSize += 10;
//     const boxToCreate = document.createElement('div');
//     boxToCreate.style.background = getRandomHexColor();
//     boxToCreate.style.width = `${initialBoxSize}px`;
//     boxToCreate.style.height = `${initialBoxSize}px`;

//     boxesOutputEl.append(boxToCreate);
//   }
// }

//!----2 вариант решения через insertAdjacentHTML

function createBoxes(amount) {
  if (amount > 100) {
    alert('Выберите значение от 1 до 100');
    inputValueEl.value = 1;
    return;
  }

  onDestroyBtnClick();
  let initialBoxSize = 20;
  const boxesMarkup = [];

  for (let i = 0; i < amount; i += 1) {
    initialBoxSize += 10;
    const boxToCreate = document.createElement('div');
    boxToCreate.style.background = getRandomHexColor();
    boxToCreate.style.width = `${initialBoxSize}px`;
    boxToCreate.style.height = `${initialBoxSize}px`;

    boxesMarkup.push(boxToCreate.outerHTML);
  }

  boxesOutputEl.insertAdjacentHTML('beforeend', boxesMarkup.join(''));
}
