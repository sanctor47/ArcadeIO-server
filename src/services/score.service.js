import Score from '../models/score.model';
import Game from '../models/game.model';
import Player from '../models/user.model';

//get all scores
export const getAllScores = async () => {
  const data = await Score.find().populate("player").populate("game");
  return data;
};

//create new score
export const newScore = async (body) => {
  try {
    const { gameId, score, playerId } = body;
    const TargetGame = await Game.findOne({ clientId: gameId });
    if (!TargetGame && TargetGame.isActive === true) {
      throw {
        message: "Game not available"
      }
    }
    const TargetPlayer = await Player.findById(playerId);
    if (!TargetPlayer) {
      throw {
        message: "Player not found"
      }
    }
    const NewScore = await Score.create({
      player: playerId,
      game: TargetGame._id,
      score,
    })

    await Game.findByIdAndUpdate(
      TargetGame._id,
      { isActive: false },
      { new: true }
    )

    // const NewScore = {
    //   player: playerId,
    //   game: TargetGame._id,
    //   score,
    // }
    console.log("NewScore: ", NewScore)
    return NewScore
  } catch (error) {
    throw error;
  }
};

//update single score
export const updateScore = async (_id, body) => {
  const data = await Score.findByIdAndUpdate(
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

//delete single score
export const deleteScore = async (id) => {
  await Score.findByIdAndDelete(id);
  return '';
};

//get single score
export const getScore = async (id) => {
  const data = await Score.findById(id);
  return data;
};
