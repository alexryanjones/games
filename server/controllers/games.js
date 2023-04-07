import fetch from 'node-fetch';
import dotenv from 'dotenv';
dotenv.config();

const baseUrl = 'https://rawg.io/api/';
const apiKey = process.env.API_KEY;

async function getGames(req, res) {
  let { title } = req.body;
  title = title.replace(' ', '%20');
  console.log(title);
  const response = await fetch(`${baseUrl}games?token&key=${apiKey}&search=${title}`);
  const games = await response.json();
  const strippedGames = games.results.map((game) => ({
    name: game.name,
    background_image: game.background_image,
    released: game.released,
  }));
  res.send(strippedGames);
}

export default { getGames };