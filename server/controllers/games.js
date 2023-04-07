import fetch from 'node-fetch';
import queries from '../models/queries.js';
import dotenv from 'dotenv';
dotenv.config();

const baseUrl = 'https://rawg.io/api/';
const apiKey = process.env.API_KEY;

async function getGames(req, res) {
  try {
    const { title } = req.body;

    const cachedResult = await queries.findOne({ search: title.toLowerCase() });
    if (cachedResult) {
      return res.send(cachedResult);
    }

    const urlSearch = title.replace(' ', '%20');
    const response = await fetch(`${baseUrl}games?token&key=${apiKey}&search=${urlSearch}`);
    const games = await response.json();
    const strippedGames = games.results.map((game) => ({
      title: game.name,
      background_image: game.background_image,
      releaseDate: game.released,
    }));

    const query = {
      search: title.toLowerCase(),
      results: strippedGames,
    };

    await queries.create(query);

    res.send(strippedGames);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
}

export default { getGames };