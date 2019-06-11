"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _models = _interopRequireDefault(require("../src/models"));

var CarService =
/*#__PURE__*/
function () {
  function CarService() {
    (0, _classCallCheck2["default"])(this, CarService);
  }

  (0, _createClass2["default"])(CarService, null, [{
    key: "getAllCars",
    value: function () {
      var _getAllCars = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee() {
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return _models["default"].Book.findAll();

              case 3:
                return _context.abrupt("return", _context.sent);

              case 6:
                _context.prev = 6;
                _context.t0 = _context["catch"](0);
                throw _context.t0;

              case 9:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 6]]);
      }));

      function getAllCars() {
        return _getAllCars.apply(this, arguments);
      }

      return getAllCars;
    }()
  }, {
    key: "addCar",
    value: function () {
      var _addCar = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee2(newBook) {
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return _models["default"].Book.create(newBook);

              case 3:
                return _context2.abrupt("return", _context2.sent);

              case 6:
                _context2.prev = 6;
                _context2.t0 = _context2["catch"](0);
                throw _context2.t0;

              case 9:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[0, 6]]);
      }));

      function addCar(_x) {
        return _addCar.apply(this, arguments);
      }

      return addCar;
    }()
  }, {
    key: "updateCar",
    value: function () {
      var _updateCar = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee3(id, updateBook) {
        var bookToUpdate;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                _context3.next = 3;
                return _models["default"].Book.findOne({
                  where: {
                    id: Number(id)
                  }
                });

              case 3:
                bookToUpdate = _context3.sent;

                if (!bookToUpdate) {
                  _context3.next = 8;
                  break;
                }

                _context3.next = 7;
                return _models["default"].Book.update(updateBook, {
                  where: {
                    id: Number(id)
                  }
                });

              case 7:
                return _context3.abrupt("return", updateBook);

              case 8:
                return _context3.abrupt("return", null);

              case 11:
                _context3.prev = 11;
                _context3.t0 = _context3["catch"](0);
                throw _context3.t0;

              case 14:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, null, [[0, 11]]);
      }));

      function updateCar(_x2, _x3) {
        return _updateCar.apply(this, arguments);
      }

      return updateCar;
    }()
  }, {
    key: "getACar",
    value: function () {
      var _getACar = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee4(id) {
        var theBook;
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.prev = 0;
                _context4.next = 3;
                return _models["default"].Book.findOne({
                  where: {
                    id: Number(id)
                  }
                });

              case 3:
                theBook = _context4.sent;
                return _context4.abrupt("return", theBook);

              case 7:
                _context4.prev = 7;
                _context4.t0 = _context4["catch"](0);
                throw _context4.t0;

              case 10:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, null, [[0, 7]]);
      }));

      function getACar(_x4) {
        return _getACar.apply(this, arguments);
      }

      return getACar;
    }()
  }, {
    key: "deleteCar",
    value: function () {
      var _deleteCar = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee5(id) {
        var bookToDelete, deletedBook;
        return _regenerator["default"].wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.prev = 0;
                _context5.next = 3;
                return _models["default"].Book.findOne({
                  where: {
                    id: Number(id)
                  }
                });

              case 3:
                bookToDelete = _context5.sent;

                if (!bookToDelete) {
                  _context5.next = 9;
                  break;
                }

                _context5.next = 7;
                return _models["default"].Book.destroy({
                  where: {
                    id: Number(id)
                  }
                });

              case 7:
                deletedBook = _context5.sent;
                return _context5.abrupt("return", deletedBook);

              case 9:
                return _context5.abrupt("return", null);

              case 12:
                _context5.prev = 12;
                _context5.t0 = _context5["catch"](0);
                throw _context5.t0;

              case 15:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, null, [[0, 12]]);
      }));

      function deleteCar(_x5) {
        return _deleteCar.apply(this, arguments);
      }

      return deleteCar;
    }()
  }]);
  return CarService;
}();

var _default = CarService;
exports["default"] = _default;
//# sourceMappingURL=carServices.js.map