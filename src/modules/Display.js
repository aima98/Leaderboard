const id = localStorage.getItem('game');
const displayList = document.querySelector('.names-scores');

const displayData = (leaderboard) => {
  if (leaderboard) {
    if (!leaderboard.length) displayList.innerHTML = '<p class=\'details\'>No scores are available!</p>';

    leaderboard.forEach((data) => {
      const nameHolder = document.createElement('p');
      nameHolder.classList.add('details');
      nameHolder.id = 'details';
      displayList.appendChild(nameHolder);
      nameHolder.innerHTML = `${data.user} : ${data.score}`;
    });
  }
};

const fetchScoresFromApi = async () => {
  if (id) {
    const fetchUrl = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${id}/scores/`;
    const response = await fetch(fetchUrl);
    const fetchedData = await response.json();
    displayData(fetchedData.result);
  }
};

fetchScoresFromApi();

export default displayData;