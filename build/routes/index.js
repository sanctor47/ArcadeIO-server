"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _venue = _interopRequireDefault(require("./venue.route"));

var _prize = _interopRequireDefault(require("./prize.route"));

var _score = _interopRequireDefault(require("./score.route"));

var _game = _interopRequireDefault(require("./game.route"));

var _user = _interopRequireDefault(require("./user.route"));

var router = _express["default"].Router();

/**
 * Function contains Application routes
 *
 * @returns router
 */
var routes = function routes() {
  router.get('/', function (req, res) {
    res.json('Welcome');
  });
  router.use('/users', _user["default"]);
  router.use('/games', _game["default"]);
  router.use('/scores', _score["default"]);
  router.use('/prizes', _prize["default"]);
  router.use('/venues', _venue["default"]);
  return router;
};

var _default = routes;
exports["default"] = _default;