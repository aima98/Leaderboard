import displayData from './Display.js';

const displayList = document.querySelector('.names-scores');
const refresh = document.getElementById('refresh-form"');

const refreshDisplay = () => {
  if (!refresh) return;

  refresh.addEventListener('submit', (e) => {
    e.preventDefault();
    displayList.innerHTML = '';
    displayData();
  });
};

export default refreshDisplay;