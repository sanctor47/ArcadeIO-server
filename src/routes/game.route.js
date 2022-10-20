import express from 'express';
import * as gameController from '../controllers/game.controller';

const router = express.Router();

//route to get all games
router.get('', gameController.getAllGames);

//route to create a new game
router.post('', gameController.newGame);

//route to get a single game by their game id
router.get('/id/:_id', gameController.getGame);

//route to update a single game by their game id
router.put('/id/:_id', gameController.updateGame);

//route to delete a single game by their game id
router.delete('/id/:_id', gameController.deleteGame);

//route to delete a single game by their game id
router.post('/startGame', gameController.startGame);

export default router;
