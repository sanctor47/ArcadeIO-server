import express from 'express';
import * as scoreController from '../controllers/score.controller';

const router = express.Router();

//route to get all scores
router.get('', scoreController.getAllScores);

//route to create a new score
router.post('', scoreController.newScore);

//route to get a single score by their score id
router.get('/:_id', scoreController.getScore);

//route to update a single score by their score id
router.put('/:_id', scoreController.updateScore);

//route to delete a single score by their score id
router.delete('/:_id', scoreController.deleteScore);

//route to get score by player id or game id (Can be sorted by )
//route to get the topscore of a game by id

export default router;
