import displayData from './Display.js';
import Data from './Data.js';

const displayList = document.querySelector('.names-scores');
const refreshBtn = document.getElementById('refresh');

const refreshData = () => {
  refreshBtn.addEventListener('click', () => {
    displayList.innerHTML = '';
    displayData(Data);
  });
};

export default refreshData;