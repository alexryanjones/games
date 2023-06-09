import fetch from 'node-fetch';
import queries from '../models/queries.js';
import dotenv from 'dotenv';
dotenv.config();

const baseUrl = 'https://rawg.io/api/';
const apiKey = process.env.API_KEY;

async function getGames(req, res) {
  try {
    const { title } = req.query;
    const cachedResult = await queries.findOne({ search: title.toLowerCase() });
    if (cachedResult) {
      const strippedCacheResults = cachedResult.results.map(
        ({ title, background_image, releaseDate }) => ({
          title,
          background_image,
          releaseDate
        })
      );

      return res.send(strippedCacheResults);
    }

    const urlSearch = title.replaceAll(' ', '%20');
    let results = [];
    let page = 1;
    const pageSize = 20;
    while (results.length < 100) {
      const response = await fetch(
        `${baseUrl}games?token&key=${apiKey}&search=${urlSearch}&page=${page}&page_size=${pageSize}`
      );
      const games = await response.json();
      if (games.count === 0 || games.results.length === 0) {
        break;
      }
      const strippedGames = games.results.map((game) => ({
        title: game.name,
        background_image: game.background_image,
        releaseDate: new Date(game.released).toISOString().slice(0, 10),
      }));
      results = results.concat(strippedGames);
      page++;
    }

    const query = {
      search: title.toLowerCase(),
      results: results,
    };

    await queries.create(query);

    res.send(results);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
}


export default { getGames };