import express from 'express';
const router = express.Router();

import venueRoute from './venue.route';
import prizeRoute from './prize.route';
import scoreRoute from './score.route';
import gameRoute from './game.route';
import userRoute from './user.route';
/**
 * Function contains Application routes
 *
 * @returns router
 */
const routes = () => {
  router.get('/', (req, res) => {
    res.json('Welcome');
  });
  router.use('/users', userRoute);

  router.use('/games', gameRoute);
  router.use('/scores', scoreRoute);
  router.use('/prizes', prizeRoute);
  router.use('/venues', venueRoute);
  return router;
};

export default routes;
