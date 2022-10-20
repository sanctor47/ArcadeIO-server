"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateUser = exports.register = exports.newUser = exports.login = exports.getUser = exports.getAllUsers = exports.deleteUser = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _user = _interopRequireDefault(require("../models/user.model"));

var _bcrypt = _interopRequireDefault(require("bcrypt"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

//get all users
var getAllUsers = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
    var data;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _user["default"].find().populate('gamesPlayed');

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

  return function getAllUsers() {
    return _ref.apply(this, arguments);
  };
}(); //create new user


exports.getAllUsers = getAllUsers;

var newUser = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(body) {
    var data;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return _user["default"].create(body);

          case 2:
            data = _context2.sent;
            return _context2.abrupt("return", data);

          case 4:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function newUser(_x) {
    return _ref2.apply(this, arguments);
  };
}(); //update single user


exports.newUser = newUser;

var updateUser = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(_id, body) {
    var data;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return _user["default"].findByIdAndUpdate({
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

  return function updateUser(_x2, _x3) {
    return _ref3.apply(this, arguments);
  };
}(); //delete single user


exports.updateUser = updateUser;

var deleteUser = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(id) {
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return _user["default"].findByIdAndDelete(id);

          case 2:
            return _context4.abrupt("return", '');

          case 3:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function deleteUser(_x4) {
    return _ref4.apply(this, arguments);
  };
}(); //get single user


exports.deleteUser = deleteUser;

var getUser = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(id) {
    var data;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return _user["default"].findById(id).populate("gamesPlayed");

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

  return function getUser(_x5) {
    return _ref5.apply(this, arguments);
  };
}();

exports.getUser = getUser;

var register = /*#__PURE__*/function () {
  var _ref6 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(body) {
    var DuplicateUserEmail, DuplicateUserPhone, encryptedPassword, NewUserData, NewUser, token, response;
    return _regenerator["default"].wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.prev = 0;

            if (!(!body.firstName || !body.lastName || !body.email || !body.password || !body.phone)) {
              _context6.next = 3;
              break;
            }

            throw {
              message: "Please enter all required fields."
            };

          case 3:
            _context6.next = 5;
            return _user["default"].findOne({
              email: body.email
            });

          case 5:
            DuplicateUserEmail = _context6.sent;

            if (!(DuplicateUserEmail !== null)) {
              _context6.next = 8;
              break;
            }

            throw {
              message: "Email already in use."
            };

          case 8:
            _context6.next = 10;
            return _user["default"].findOne({
              phone: body.phone
            });

          case 10:
            DuplicateUserPhone = _context6.sent;

            if (!(DuplicateUserPhone !== null)) {
              _context6.next = 13;
              break;
            }

            throw {
              message: "Phone already in use."
            };

          case 13:
            _context6.next = 15;
            return _bcrypt["default"].hash(body.password, 10);

          case 15:
            encryptedPassword = _context6.sent;
            NewUserData = {
              firstName: body.firstName,
              lastName: body.lastName,
              email: body.email,
              phone: body.phone,
              password: encryptedPassword
            };
            _context6.next = 19;
            return _user["default"].create(NewUserData);

          case 19:
            NewUser = _context6.sent;
            token = _jsonwebtoken["default"].sign({
              user_id: NewUser._id,
              email: NewUser.email
            }, process.env.TOKEN_KEY, {
              expiresIn: "2h"
            });
            response = {
              User: NewUser,
              token: token
            };
            return _context6.abrupt("return", response);

          case 25:
            _context6.prev = 25;
            _context6.t0 = _context6["catch"](0);
            console.log(_context6.t0);
            throw _context6.t0;

          case 29:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, null, [[0, 25]]);
  }));

  return function register(_x6) {
    return _ref6.apply(this, arguments);
  };
}();

exports.register = register;

var login = /*#__PURE__*/function () {
  var _ref7 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7(body) {
    var TargetUser, res, token, response;
    return _regenerator["default"].wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            _context7.prev = 0;

            if (!(!body.email || !body.password)) {
              _context7.next = 3;
              break;
            }

            throw {
              message: "Please enter all required fields."
            };

          case 3:
            _context7.next = 5;
            return _user["default"].findOne({
              email: body.email
            });

          case 5:
            TargetUser = _context7.sent;

            if (!TargetUser) {
              _context7.next = 21;
              break;
            }

            console.log(TargetUser.password);
            console.log(body.password);
            _context7.next = 11;
            return _bcrypt["default"].compare(body.password, TargetUser.password);

          case 11:
            res = _context7.sent;

            if (!res) {
              _context7.next = 18;
              break;
            }

            token = _jsonwebtoken["default"].sign({
              user_id: TargetUser._id,
              email: TargetUser.email
            }, process.env.TOKEN_KEY, {
              expiresIn: "2h"
            });
            response = {
              User: TargetUser,
              token: token
            };
            return _context7.abrupt("return", response);

          case 18:
            throw {
              message: "Invalid Credintials"
            };

          case 19:
            _context7.next = 22;
            break;

          case 21:
            throw {
              message: "User not found"
            };

          case 22:
            _context7.next = 27;
            break;

          case 24:
            _context7.prev = 24;
            _context7.t0 = _context7["catch"](0);
            console.log(_context7.t0);

          case 27:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7, null, [[0, 24]]);
  }));

  return function login(_x7) {
    return _ref7.apply(this, arguments);
  };
}();

exports.login = login;