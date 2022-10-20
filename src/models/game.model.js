import { Schema, model } from 'mongoose';

const gameSchema = new Schema(
  {
    name: { type: String },
    createdBy: { type: Schema.Types.ObjectId, ref: "User" },
    type: { type: String },
    playedCount: { type: Number },
    venueId: { type: Schema.Types.ObjectId, ref: "Venue" },
    clientId: { type: String },
    isActive: { type: Boolean }
  },
  {
    timestamps: true
  }
);

export default model('Game', gameSchema);
