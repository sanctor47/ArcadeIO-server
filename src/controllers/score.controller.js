import HttpStatus from 'http-status-codes';
import * as ScoreService from '../services/score.service';

/**
 * Controller to get all scores available
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const getAllScores = async (req, res, next) => {
  try {
    const data = await ScoreService.getAllScores();
    res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      data: data,
      message: 'All scores fetched successfully'
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Controller to get a single score
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const getScore = async (req, res, next) => {
  try {
    const data = await ScoreService.getScore(req.params._id);
    res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      data: data,
      message: 'Score fetched successfully'
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Controller to create a new score
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const newScore = async (req, res, next) => {
  try {
    const data = await ScoreService.newScore(req.body);
    res.status(HttpStatus.CREATED).json({
      code: HttpStatus.CREATED,
      data: data,
      message: 'Score created successfully'
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Controller to update a score
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const updateScore = async (req, res, next) => {
  try {
    const data = await ScoreService.updateScore(req.params._id, req.body);
    res.status(HttpStatus.ACCEPTED).json({
      code: HttpStatus.ACCEPTED,
      data: data,
      message: 'Score updated successfully'
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Controller to delete a score
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const deleteScore = async (req, res, next) => {
  try {
    await ScoreService.deleteScore(req.params._id);
    res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      data: [],
      message: 'Score deleted successfully'
    });
  } catch (error) {
    next(error);
  }
};
