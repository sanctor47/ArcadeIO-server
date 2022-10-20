"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateScore = exports.newScore = exports.getScore = exports.getAllScores = exports.deleteScore = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _score = _interopRequireDefault(require("../models/score.model"));

var _game = _interopRequireDefault(require("../models/game.model"));

var _user = _interopRequireDefault(require("../models/user.model"));

//get all scores
var getAllScores = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
    var data;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _score["default"].find().populate("player").populate("game");

          case 2:
            data = _context.sent;
            return _context.abrupt("return", data);

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function getAllScores() {
    return _ref.apply(this, arguments);
  };
}(); //create new score


exports.getAllScores = getAllScores;

var newScore = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(body) {
    var gameId, score, playerId, TargetGame, TargetPlayer, NewScore;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            gameId = body.gameId, score = body.score, playerId = body.playerId;
            _context2.next = 4;
            return _game["default"].findOne({
              clientId: gameId
            });

          case 4:
            TargetGame = _context2.sent;

            if (!(!TargetGame && TargetGame.isActive === true)) {
              _context2.next = 7;
              break;
            }

            throw {
              message: "Game not available"
            };

          case 7:
            _context2.next = 9;
            return _user["default"].findById(playerId);

          case 9:
            TargetPlayer = _context2.sent;

            if (TargetPlayer) {
              _context2.next = 12;
              break;
            }

            throw {
              message: "Player not found"
            };

          case 12:
            _context2.next = 14;
            return _score["default"].create({
              player: playerId,
              game: TargetGame._id,
              score: score
            });

          case 14:
            NewScore = _context2.sent;
            _context2.next = 17;
            return _game["default"].findByIdAndUpdate(TargetGame._id, {
              isActive: false
            }, {
              "new": true
            });

          case 17:
            // const NewScore = {
            //   player: playerId,
            //   game: TargetGame._id,
            //   score,
            // }
            console.log("NewScore: ", NewScore);
            return _context2.abrupt("return", NewScore);

          case 21:
            _context2.prev = 21;
            _context2.t0 = _context2["catch"](0);
            throw _context2.t0;

          case 24:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 21]]);
  }));

  return function newScore(_x) {
    return _ref2.apply(this, arguments);
  };
}(); //update single score


exports.newScore = newScore;

var updateScore = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(_id, body) {
    var data;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return _score["default"].findByIdAndUpdate({
              _id: _id
            }, body, {
              "new": true
            });

          case 2:
            data = _context3.sent;
            return _context3.abrupt("return", data);

          case 4:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function updateScore(_x2, _x3) {
    return _ref3.apply(this, arguments);
  };
}(); //delete single score


exports.updateScore = updateScore;

var deleteScore = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(id) {
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return _score["default"].findByIdAndDelete(id);

          case 2:
            return _context4.abrupt("return", '');

          case 3:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function deleteScore(_x4) {
    return _ref4.apply(this, arguments);
  };
}(); //get single score


exports.deleteScore = deleteScore;

var getScore = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(id) {
    var data;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return _score["default"].findById(id);

          case 2:
            data = _context5.sent;
            return _context5.abrupt("return", data);

          case 4:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));

  return function getScore(_x5) {
    return _ref5.apply(this, arguments);
  };
}();

exports.getScore = getScore;