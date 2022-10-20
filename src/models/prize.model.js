import { Schema, model } from 'mongoose';

const prizeSchema = new Schema(
  {
    name: {
      type: String
    }
  },
  {
    timestamps: true
  }
);

export default model('Prize', prizeSchema);
