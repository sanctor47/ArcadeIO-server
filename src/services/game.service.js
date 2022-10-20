import Game from '../models/game.model';
import User from '../models/user.model';
import { PublishMessage } from '../MQTT/gameServices'
//get all games
export const getAllGames = async () => {
  try {
    const data = await Game.find();
    return data;
  } catch (e) {
    throw e
  }
};

//create new game
export const newGame = async (body,) => {
  try {
    const data = await Game.create(body);
    return data;
  } catch (e) {
    throw e
  }
};

//update single game
export const updateGame = async (_id, body) => {
  try {
    try {
      const data = await Game.findByIdAndUpdate(
        {
          _id
        },
        body,
        {
          new: true
        }
      );
      return data;
    } catch (e) {
      throw e
    }
  } catch (e) {
    throw e
  }
};

//delete single game
export const deleteGame = async (id) => {
  try {
    await Game.findByIdAndDelete(id);
    return '';
  } catch (e) {
    throw e
  }

};

//get single game
export const getGame = async (id) => {
  try {
    const data = await Game.findById(id);
    return data;
  } catch (e) {
    throw e
  }
};

export const startGame = async (body) => {
  try {
    const { playerId, gameId } = body;
    const TargetUser = await User.findById(playerId).populate("gamesPlayed");
    const TargetGame = await Game.findById(gameId);
    if (TargetGame.isActive) {
      throw {
        message: "Game Busy"
      }
    }
    if (!TargetUser) {
      throw {
        message: "User not found"
      }
    }
    if (!TargetGame) {
      throw {
        message: "Game not found"
      }
    }
    let returningPlayer = false;
    TargetUser.gamesPlayed.forEach(element => {
      if(element._id === TargetGame._id){
        returningPlayer = true;
      }
    });
    if (returningPlayer) {
      await User.findByIdAndUpdate(
        TargetUser._id,
        { $push: { gamesPlayed: TargetGame._id } },
        { new: true }
      )
    }
    await Game.findByIdAndUpdate(
      TargetGame._id,
      { isActive: true },
      { new: true }
    )
    PublishMessage(TargetGame.clientId, TargetUser._id, "1")
    return "Ok"
  } catch (error) {
    console.log(error);
  }
};