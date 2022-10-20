import express from 'express';
import * as prizeController from '../controllers/prize.controller';

const router = express.Router();

//route to get all prizes
router.get('', prizeController.getAllPrizes);

//route to create a new prize
router.post('', prizeController.newPrize);

//route to get a single prize by their prize id
router.get('/:_id', prizeController.getPrize);

//route to update a single prize by their prize id
router.put('/:_id', prizeController.updatePrize);

//route to delete a single prize by their prize id
router.delete('/:_id', prizeController.deletePrize);

export default router;
