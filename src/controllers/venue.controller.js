import HttpStatus from 'http-status-codes';
import * as VenueService from '../services/venue.service';

/**
 * Controller to get all venues available
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const getAllVenues = async (req, res, next) => {
  try {
    const data = await VenueService.getAllVenues();
    res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      data: data,
      message: 'All venues fetched successfully'
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Controller to get a single venue
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const getVenue = async (req, res, next) => {
  try {
    const data = await VenueService.getVenue(req.params._id);
    res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      data: data,
      message: 'Venue fetched successfully'
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Controller to create a new venue
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const newVenue = async (req, res, next) => {
  try {
    const data = await VenueService.newVenue(req.body);
    res.status(HttpStatus.CREATED).json({
      code: HttpStatus.CREATED,
      data: data,
      message: 'Venue created successfully'
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Controller to update a venue
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const updateVenue = async (req, res, next) => {
  try {
    const data = await VenueService.updateVenue(req.params._id, req.body);
    res.status(HttpStatus.ACCEPTED).json({
      code: HttpStatus.ACCEPTED,
      data: data,
      message: 'Venue updated successfully'
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Controller to delete a venue
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const deleteVenue = async (req, res, next) => {
  try {
    await VenueService.deleteVenue(req.params._id);
    res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      data: [],
      message: 'Venue deleted successfully'
    });
  } catch (error) {
    next(error);
  }
};
