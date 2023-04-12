const displayList = document.querySelector('.names-scores');

const displayData = (Data) => {
  if (Data === []) {
    displayList.innerHTML = '<p class=\'details\'>No scores are available!</p>';
  }

  Data.forEach((element) => {
    const userName = document.createElement('p');
    userName.classList.add('user-name');
    userName.id = 'details';
    displayList.appendChild(userName);
    userName.innerHTML = `${element.name} : ${element.score}`;
  });
};

export default displayData;