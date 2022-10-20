import { Schema, model } from 'mongoose';

const scoreSchema = new Schema(
  {
    player: { type: Schema.Types.ObjectId, ref: "User" },
    game: { type: Schema.Types.ObjectId, ref: "Game" },
    score: { type: Number },
  },
  {
    timestamps: true
  }
);

export default model('Score', scoreSchema);
