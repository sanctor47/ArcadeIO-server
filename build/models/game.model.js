"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = require("mongoose");

var gameSchema = new _mongoose.Schema({
  name: {
    type: String
  },
  createdBy: {
    type: _mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  type: {
    type: String
  },
  playedCount: {
    type: Number
  },
  venueId: {
    type: _mongoose.Schema.Types.ObjectId,
    ref: "Venue"
  },
  clientId: {
    type: String
  },
  isActive: {
    type: Boolean
  }
}, {
  timestamps: true
});

var _default = (0, _mongoose.model)('Game', gameSchema);

exports["default"] = _default;