import Venue from '../models/venue.model';

//get all venues
export const getAllVenues = async () => {
  const data = await Venue.find();
  return data;
};

//create new venue
export const newVenue = async (body) => {
  const data = await Venue.create(body);
  return data;
};

//update single venue
export const updateVenue = async (_id, body) => {
  const data = await Venue.findByIdAndUpdate(
    {
      _id
    },
    body,
    {
      new: true
    }
  );
  return data;
};

//delete single venue
export const deleteVenue = async (id) => {
  await Venue.findByIdAndDelete(id);
  return '';
};

//get single venue
export const getVenue = async (id) => {
  const data = await Venue.findById(id);
  return data;
};
