import { Schema, model } from 'mongoose';

const venueSchema = new Schema(
  {
    name: { type: String },
    owner: { type: Schema.Types.ObjectId, ref: "User" }
  },
  {
    timestamps: true
  }
);

export default model('Venue', venueSchema);
