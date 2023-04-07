import express from 'express';
import games from './controllers/games.js';
const router = express.Router();

router.get('/check', (req, res) => {res.send('Hello World!')});

router.post('/games', games.getGames);

export default router;