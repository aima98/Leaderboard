import './style.css';
import refreshData from './modules/Refresh.js';
import displayData from './modules/Display.js';
import GameId from './modules/Game.js';
import saveScore from './modules/Save.js';

const addScore = document.getElementById('add-score');
const displayScores = document.getElementById('rec-scores');
const gameForm = document.getElementById('form-name-game');
const form = document.getElementById('form');

window.addEventListener('load', () => {
  displayData();
  refreshData();

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    saveScore();
    form.reset();
  });

  if (localStorage.getItem('game')) {
    gameForm.style.display = 'none';
    addScore.style.display = 'block';
    displayScores.style.display = 'block';
  }

  gameForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const addGame = GameId();
    addGame.then((resolve) => {
      let gameName = resolve.result;
      gameName = gameName.substr(14, 20);

      if (gameName) {
        localStorage.setItem('game', gameName);
        gameForm.style.display = 'none';
        addScore.style.display = 'block';
        displayScores.style.display = 'block';
      }
    });
  });
});