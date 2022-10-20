"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = require("mongoose");

var venueSchema = new _mongoose.Schema({
  name: {
    type: String
  },
  owner: {
    type: _mongoose.Schema.Types.ObjectId,
    ref: "User"
  }
}, {
  timestamps: true
});

var _default = (0, _mongoose.model)('Venue', venueSchema);

exports["default"] = _default;