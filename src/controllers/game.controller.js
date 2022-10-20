import HttpStatus from 'http-status-codes';
import * as GameService from '../services/game.service';

/**
 * Controller to get all games available
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const getAllGames = async (req, res, next) => {
  try {
    const data = await GameService.getAllGames();
    res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      data: data,
      message: 'All games fetched successfully'
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Controller to get a single game
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const getGame = async (req, res, next) => {
  try {
    const data = await GameService.getGame(req.params._id);
    res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      data: data,
      message: 'Game fetched successfully'
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Controller to create a new game
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const newGame = async (req, res, next) => {
  try {
    const data = await GameService.newGame(req.body);
    res.status(HttpStatus.CREATED).json({
      code: HttpStatus.CREATED,
      data: data,
      message: 'Game created successfully'
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Controller to update a game
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const updateGame = async (req, res, next) => {
  try {
    const data = await GameService.updateGame(req.params._id, req.body);
    res.status(HttpStatus.ACCEPTED).json({
      code: HttpStatus.ACCEPTED,
      data: data,
      message: 'Game updated successfully'
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Controller to delete a game
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const deleteGame = async (req, res, next) => {
  try {
    await GameService.deleteGame(req.params._id);
    res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      data: [],
      message: 'Game deleted successfully'
    });
  } catch (error) {
    next(error);
  }
};


/**
 * Controller to delete a game
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
 export const startGame = async (req, res, next) => {
  try {
    const data = await GameService.startGame(req.body);
    res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      data: data,
      message: 'Game started successfully'
    });
  } catch (error) {
    next(error);
  }
};
