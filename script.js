const btn = document.querySelector('#btn');
const input = document.querySelector('#text');
const square = document.querySelector('#square');

const eBtn = document.querySelector('#e_btn');

const inputRange = document.querySelector('#range');
const spanRange = document.querySelector('#range-span');
const circle = document.querySelector('#circle');

//===================1=====================

btn.addEventListener('click', () => {
  square.style.backgroundColor = `${input.value}`;
})

//===================2=====================

eBtn.style.display = 'none'

//===================3=====================

inputRange.addEventListener('input', (event) => {
  let number = event.target.value;
  spanRange.textContent = number;
  circle.style.width = `${number}%`;
  circle.style.height = `${number}%`;
})