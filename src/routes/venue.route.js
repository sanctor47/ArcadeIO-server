import express from 'express';
import * as venueController from '../controllers/venue.controller';

const router = express.Router();

//route to get all venues
router.get('', venueController.getAllVenues);

//route to create a new venue
router.post('', venueController.newVenue);

//route to get a single venue by their venue id
router.get('/:_id', venueController.getVenue);

//route to update a single venue by their venue id
router.put('/:_id', venueController.updateVenue);

//route to delete a single venue by their venue id
router.delete('/:_id', venueController.deleteVenue);

export default router;
