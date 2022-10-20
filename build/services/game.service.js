"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateGame = exports.startGame = exports.newGame = exports.getGame = exports.getAllGames = exports.deleteGame = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _game = _interopRequireDefault(require("../models/game.model"));

var _user = _interopRequireDefault(require("../models/user.model"));

var _gameServices = require("../MQTT/gameServices");

//get all games
var getAllGames = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
    var data;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _game["default"].find();

          case 3:
            data = _context.sent;
            return _context.abrupt("return", data);

          case 7:
            _context.prev = 7;
            _context.t0 = _context["catch"](0);
            throw _context.t0;

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 7]]);
  }));

  return function getAllGames() {
    return _ref.apply(this, arguments);
  };
}(); //create new game


exports.getAllGames = getAllGames;

var newGame = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(body) {
    var data;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return _game["default"].create(body);

          case 3:
            data = _context2.sent;
            return _context2.abrupt("return", data);

          case 7:
            _context2.prev = 7;
            _context2.t0 = _context2["catch"](0);
            throw _context2.t0;

          case 10:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 7]]);
  }));

  return function newGame(_x) {
    return _ref2.apply(this, arguments);
  };
}(); //update single game


exports.newGame = newGame;

var updateGame = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(_id, body) {
    var data;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _context3.prev = 1;
            _context3.next = 4;
            return _game["default"].findByIdAndUpdate({
              _id: _id
            }, body, {
              "new": true
            });

          case 4:
            data = _context3.sent;
            return _context3.abrupt("return", data);

          case 8:
            _context3.prev = 8;
            _context3.t0 = _context3["catch"](1);
            throw _context3.t0;

          case 11:
            _context3.next = 16;
            break;

          case 13:
            _context3.prev = 13;
            _context3.t1 = _context3["catch"](0);
            throw _context3.t1;

          case 16:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 13], [1, 8]]);
  }));

  return function updateGame(_x2, _x3) {
    return _ref3.apply(this, arguments);
  };
}(); //delete single game


exports.updateGame = updateGame;

var deleteGame = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(id) {
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            _context4.next = 3;
            return _game["default"].findByIdAndDelete(id);

          case 3:
            return _context4.abrupt("return", '');

          case 6:
            _context4.prev = 6;
            _context4.t0 = _context4["catch"](0);
            throw _context4.t0;

          case 9:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[0, 6]]);
  }));

  return function deleteGame(_x4) {
    return _ref4.apply(this, arguments);
  };
}(); //get single game


exports.deleteGame = deleteGame;

var getGame = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(id) {
    var data;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            _context5.next = 3;
            return _game["default"].findById(id);

          case 3:
            data = _context5.sent;
            return _context5.abrupt("return", data);

          case 7:
            _context5.prev = 7;
            _context5.t0 = _context5["catch"](0);
            throw _context5.t0;

          case 10:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[0, 7]]);
  }));

  return function getGame(_x5) {
    return _ref5.apply(this, arguments);
  };
}();

exports.getGame = getGame;

var startGame = /*#__PURE__*/function () {
  var _ref6 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(body) {
    var playerId, gameId, TargetUser, TargetGame, returningPlayer;
    return _regenerator["default"].wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.prev = 0;
            playerId = body.playerId, gameId = body.gameId;
            _context6.next = 4;
            return _user["default"].findById(playerId).populate("gamesPlayed");

          case 4:
            TargetUser = _context6.sent;
            _context6.next = 7;
            return _game["default"].findById(gameId);

          case 7:
            TargetGame = _context6.sent;

            if (!TargetGame.isActive) {
              _context6.next = 10;
              break;
            }

            throw {
              message: "Game Busy"
            };

          case 10:
            if (TargetUser) {
              _context6.next = 12;
              break;
            }

            throw {
              message: "User not found"
            };

          case 12:
            if (TargetGame) {
              _context6.next = 14;
              break;
            }

            throw {
              message: "Game not found"
            };

          case 14:
            returningPlayer = false;
            TargetUser.gamesPlayed.forEach(function (element) {
              if (element._id === TargetGame._id) {
                returningPlayer = true;
              }
            });

            if (!returningPlayer) {
              _context6.next = 19;
              break;
            }

            _context6.next = 19;
            return _user["default"].findByIdAndUpdate(TargetUser._id, {
              $push: {
                gamesPlayed: TargetGame._id
              }
            }, {
              "new": true
            });

          case 19:
            _context6.next = 21;
            return _game["default"].findByIdAndUpdate(TargetGame._id, {
              isActive: true
            }, {
              "new": true
            });

          case 21:
            (0, _gameServices.PublishMessage)(TargetGame.clientId, TargetUser._id, "1");
            return _context6.abrupt("return", "Ok");

          case 25:
            _context6.prev = 25;
            _context6.t0 = _context6["catch"](0);
            console.log(_context6.t0);

          case 28:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, null, [[0, 25]]);
  }));

  return function startGame(_x6) {
    return _ref6.apply(this, arguments);
  };
}();

exports.startGame = startGame;