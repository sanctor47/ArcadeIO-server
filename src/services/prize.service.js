import Prize from '../models/prize.model';

//get all prizes
export const getAllPrizes = async () => {
  const data = await Prize.find();
  return data;
};

//create new prize
export const newPrize = async (body) => {
  const data = await Prize.create(body);
  return data;
};

//update single prize
export const updatePrize = async (_id, body) => {
  const data = await Prize.findByIdAndUpdate(
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

//delete single prize
export const deletePrize = async (id) => {
  await Prize.findByIdAndDelete(id);
  return '';
};

//get single prize
export const getPrize = async (id) => {
  const data = await Prize.findById(id);
  return data;
};
