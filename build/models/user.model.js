"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = require("mongoose");

var userSchema = new _mongoose.Schema({
  firstName: {
    type: String,
    "default": null
  },
  lastName: {
    type: String,
    "default": null
  },
  email: {
    type: String,
    unique: true
  },
  password: {
    type: String
  },
  phone: {
    type: String,
    unique: true
  },
  score: {
    type: Number,
    "default": 0
  },
  gamesPlayed: [{
    type: _mongoose.Schema.Types.ObjectId,
    ref: "Game"
  }]
}, {
  timestamps: true
});

var _default = (0, _mongoose.model)('User', userSchema);

exports["default"] = _default;