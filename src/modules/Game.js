const gameName = document.getElementById('game-name');

const GameId = async () => {
  const data = { name: gameName.value };
  const fetchURL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games';

  const parameters = {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(data),
  };

  try {
    const resolve = await fetch(fetchURL, parameters);
    return await resolve.json();
  } catch (error) {
    return error;
  }
};

export default GameId;