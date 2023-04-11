import './style.css';
import Data from './modules/Data.js';
import Score from './modules/Score.js';
import refreshData from './modules/Refresh.js';
import displayData from './modules/Display.js';

const form = document.getElementById('form');
const name = document.getElementById('name');
const score = document.getElementById('score');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const newScore = new Score(name.value, score.value);
  Data.push(newScore);
  form.reset();
});

refreshData();
displayData(Data);