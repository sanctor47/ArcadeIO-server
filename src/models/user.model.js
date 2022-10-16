import { Schema, model } from 'mongoose';

const userSchema = new Schema(
  {
    firstName: { type: String, default: null },
    lastName: { type: String, default: null },
    email: { type: String, unique: true },
    password: { type: String },
    phone: { type: String, unique: true },
  },
  {
    timestamps: true
  }
);

export default model('User', userSchema);
