import HttpStatus from 'http-status-codes';
import * as PrizeService from '../services/prize.service';

/**
 * Controller to get all prizes available
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const getAllPrizes = async (req, res, next) => {
  try {
    const data = await PrizeService.getAllPrizes();
    res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      data: data,
      message: 'All prizes fetched successfully'
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Controller to get a single prize
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const getPrize = async (req, res, next) => {
  try {
    const data = await PrizeService.getPrize(req.params._id);
    res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      data: data,
      message: 'Prize fetched successfully'
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Controller to create a new prize
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const newPrize = async (req, res, next) => {
  try {
    const data = await PrizeService.newPrize(req.body);
    res.status(HttpStatus.CREATED).json({
      code: HttpStatus.CREATED,
      data: data,
      message: 'Prize created successfully'
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Controller to update a prize
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const updatePrize = async (req, res, next) => {
  try {
    const data = await PrizeService.updatePrize(req.params._id, req.body);
    res.status(HttpStatus.ACCEPTED).json({
      code: HttpStatus.ACCEPTED,
      data: data,
      message: 'Prize updated successfully'
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Controller to delete a prize
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const deletePrize = async (req, res, next) => {
  try {
    await PrizeService.deletePrize(req.params._id);
    res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      data: [],
      message: 'Prize deleted successfully'
    });
  } catch (error) {
    next(error);
  }
};
