const square = document.getElementById("square"),
  text = document.querySelector('input[type=text]'),
  buttonInRound = document.getElementById('e_btn'),
  button = document.getElementById('btn'),
  range = document.querySelector('input[type=range]'),
  span = document.getElementById('range-span'),
  circle = document.getElementById('circle');
let color;

range.value = '30';
span.textContent = range.value;
buttonInRound.style.display = 'none';
circle.style.height = range.value + '%';
circle.style.width = range.value + '%';

logger = function (event) {
    let num;
    
    span.textContent = event.target.value;
    num = event.target.value;
    console.log(num);
    circle.style.height = num + '%';
    circle.style.width = num + '%';
}

range.addEventListener('input', logger)

button.addEventListener('click', function () {
    color = text.value;
    square.style.backgroundColor = color;
})







