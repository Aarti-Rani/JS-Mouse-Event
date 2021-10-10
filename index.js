// Import stylesheets
import './style.css';

var btn = document.getElementById('top-btn');
btn.addEventListener('mousedown', ()=> {
  console.log('mouse down');
});
btn.addEventListener('mouseup', ()=> {
  console.log('mouse up');
});
btn.addEventListener('click', ()=> {
  console.log('click event');
});
btn.addEventListener('dblclick', ()=> {
  console.log('Double click event');
});
var over = document.getElementById('over');
var move = document.getElementById('move');

var overCount = 0;
over.addEventListener('mouseover', ()=> {
  var countElement = document.querySelector('#over>p');
  overCount += 1;
  countElement.innerHTML = overCount;
  console.log('mouse Over');
});
var enter = document.getElementById('enter');
var enterCount = 0;
enter.addEventListener('mouseenter', ()=> {
  var countElement = document.querySelector('#enter>p');
  enterCount += 1;
  countElement.innerHTML = enterCount;
});
