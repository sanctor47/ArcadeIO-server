"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = require("mongoose");

var scoreSchema = new _mongoose.Schema({
  player: {
    type: _mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  game: {
    type: _mongoose.Schema.Types.ObjectId,
    ref: "Game"
  },
  score: {
    type: Number
  }
}, {
  timestamps: true
});

var _default = (0, _mongoose.model)('Score', scoreSchema);

exports["default"] = _default;