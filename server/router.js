import express from 'express';
import games from './controllers/games.js';
const router = express.Router();

router.get('/check', (req, res) => {res.send('Hello World!')});

router.get('/games', games.getGames);

export default router;