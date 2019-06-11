

const _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.default = void 0;

const _regenerator = _interopRequireDefault(require('@babel/runtime/regenerator'));

const _asyncToGenerator2 = _interopRequireDefault(require('@babel/runtime/helpers/asyncToGenerator'));

const _classCallCheck2 = _interopRequireDefault(require('@babel/runtime/helpers/classCallCheck'));

const _createClass2 = _interopRequireDefault(require('@babel/runtime/helpers/createClass'));

const _car = _interopRequireDefault(require('../src/models/car'));

const _Utils = _interopRequireDefault(require('../utils/Utils'));

const util = new _Utils.default();

const CarController =
  /* #__PURE__ */
  (function () {
    function CarController() {
      (0, _classCallCheck2.default)(this, CarController);
    }

    (0, _createClass2.default)(CarController, null, [
      {
        key: 'getAllCars',
        value: (function () {
          const _getAllCars = (0, _asyncToGenerator2.default)(
            /* #__PURE__ */
            _regenerator.default.mark(function _callee(req, res) {
              let allCars;
              return _regenerator.default.wrap(
                (_context) => {
                  while (1) {
                    switch ((_context.prev = _context.next)) {
                      case 0:
                        _context.prev = 0;
                        _context.next = 3;
                        return _car.default.getAllCars();

                      case 3:
                        allCars = _context.sent;

                        if (allCars.length > 0) {
                          util.setSuccess(200, 'Cars retrieved', allCars);
                        } else {
                          util.setSuccess(200, 'No car found');
                        }

                        return _context.abrupt('return', util.send(res));

                      case 8:
                        _context.prev = 8;
                        _context.t0 = _context.catch(0);
                        util.setError(400, _context.t0);
                        return _context.abrupt('return', util.send(res));

                      case 12:
                      case 'end':
                        return _context.stop();
                    }
                  }
                },
                _callee,
                null,
                [[0, 8]]
              );
            })
          );

          function getAllCars(_x, _x2) {
            return _getAllCars.apply(this, arguments);
          }

          return getAllCars;
        }())
      },
      {
        key: 'getAllStateCars',
        value: (function () {
          const _getAllStateCars = (0, _asyncToGenerator2.default)(
            /* #__PURE__ */
            _regenerator.default.mark(function _callee2(req, res) {
              let allStateCars;
              return _regenerator.default.wrap(
                (_context2) => {
                  while (1) {
                    switch ((_context2.prev = _context2.next)) {
                      case 0:
                        _context2.prev = 0;
                        _context2.next = 3;
                        return _car.default.getAllStateCars();

                      case 3:
                        allStateCars = _context2.sent;

                        if (allStateCars.length > 0) {
                          util.setSuccess(200, 'Cars retrieved', allStateCars);
                        } else {
                          util.setSuccess(200, 'No car found');
                        }

                        return _context2.abrupt('return', util.send(res));

                      case 8:
                        _context2.prev = 8;
                        _context2.t0 = _context2.catch(0);
                        util.setError(400, _context2.t0);
                        return _context2.abrupt('return', util.send(res));

                      case 12:
                      case 'end':
                        return _context2.stop();
                    }
                  }
                },
                _callee2,
                null,
                [[0, 8]]
              );
            })
          );

          function getAllStateCars(_x3, _x4) {
            return _getAllStateCars.apply(this, arguments);
          }

          return getAllStateCars;
        }())
      },
      {
        key: 'getAllRangeCars',
        value: (function () {
          const _getAllRangeCars = (0, _asyncToGenerator2.default)(
            /* #__PURE__ */
            _regenerator.default.mark(function _callee3(req, res) {
              let maxPrice; let minPrice; let
                allCarsInRange;
              return _regenerator.default.wrap(
                (_context3) => {
                  while (1) {
                    switch ((_context3.prev = _context3.next)) {
                      case 0:
                        _context3.prev = 0;
                        maxPrice = req.params.max_price;
                        minPrice = req.params.min_price;
                        _context3.next = 5;
                        return _car.default.getAllRangeCars(maxPrice, minPrice);

                      case 5:
                        allCarsInRange = _context3.sent;

                        if (allCarsInRange.length > 0) {
                          util.setSuccess(200, 'Cars retrieved', allCarsInRange);
                        } else {
                          util.setSuccess(200, 'No cars found');
                        }

                        return _context3.abrupt('return', util.send(res));

                      case 10:
                        _context3.prev = 10;
                        _context3.t0 = _context3.catch(0);
                        util.setError(400, _context3.t0);
                        return _context3.abrupt('return', util.send(res));

                      case 14:
                      case 'end':
                        return _context3.stop();
                    }
                  }
                },
                _callee3,
                null,
                [[0, 10]]
              );
            })
          );

          function getAllRangeCars(_x5, _x6) {
            return _getAllRangeCars.apply(this, arguments);
          }

          return getAllRangeCars;
        }())
      },
      {
        key: 'getAllAdminCars',
        value: (function () {
          const _getAllAdminCars = (0, _asyncToGenerator2.default)(
            /* #__PURE__ */
            _regenerator.default.mark(function _callee4(req, res) {
              let allAdminCars;
              return _regenerator.default.wrap(
                (_context4) => {
                  while (1) {
                    switch ((_context4.prev = _context4.next)) {
                      case 0:
                        _context4.prev = 0;
                        _context4.next = 3;
                        return _car.default.getAllAdminCars();

                      case 3:
                        allAdminCars = _context4.sent;

                        if (allAdminCars.length > 0) {
                          util.setSuccess(200, 'Cars retrieved', allAdminCars);
                        } else {
                          util.setSuccess(200, 'No car found');
                        }

                        return _context4.abrupt('return', util.send(res));

                      case 8:
                        _context4.prev = 8;
                        _context4.t0 = _context4.catch(0);
                        util.setError(400, _context4.t0);
                        return _context4.abrupt('return', util.send(res));

                      case 12:
                      case 'end':
                        return _context4.stop();
                    }
                  }
                },
                _callee4,
                null,
                [[0, 8]]
              );
            })
          );

          function getAllAdminCars(_x7, _x8) {
            return _getAllAdminCars.apply(this, arguments);
          }

          return getAllAdminCars;
        }())
      },
      {
        key: 'getAllBodyTypeCars',
        value: (function () {
          const _getAllBodyTypeCars = (0, _asyncToGenerator2.default)(
            /* #__PURE__ */
            _regenerator.default.mark(function _callee5(req, res) {
              let allCars;
              return _regenerator.default.wrap(
                (_context5) => {
                  while (1) {
                    switch ((_context5.prev = _context5.next)) {
                      case 0:
                        _context5.prev = 0;
                        _context5.next = 3;
                        return _car.default.getAllBodyTypeCars();

                      case 3:
                        allCars = _context5.sent;

                        if (allCars.length > 0) {
                          util.setSuccess(200, 'Cars retrieved', allCars);
                        } else {
                          util.setSuccess(200, 'No car found');
                        }

                        return _context5.abrupt('return', util.send(res));

                      case 8:
                        _context5.prev = 8;
                        _context5.t0 = _context5.catch(0);
                        util.setError(400, _context5.t0);
                        return _context5.abrupt('return', util.send(res));

                      case 12:
                      case 'end':
                        return _context5.stop();
                    }
                  }
                },
                _callee5,
                null,
                [[0, 8]]
              );
            })
          );

          function getAllBodyTypeCars(_x9, _x10) {
            return _getAllBodyTypeCars.apply(this, arguments);
          }

          return getAllBodyTypeCars;
        }())
      },
      {
        key: 'addCar',
        value: (function () {
          const _addCar = (0, _asyncToGenerator2.default)(
            /* #__PURE__ */
            _regenerator.default.mark(function _callee6(req, res) {
              let newCar; let
                createdCar;
              return _regenerator.default.wrap(
                (_context6) => {
                  while (1) {
                    switch ((_context6.prev = _context6.next)) {
                      case 0:
                        if (!(!req.body.title || !req.body.price || !req.body.description)) {
                          _context6.next = 3;
                          break;
                        }

                        util.setError(400, 'Please provide complete details');
                        return _context6.abrupt('return', util.send(res));

                      case 3:
                        newCar = req.body;
                        _context6.prev = 4;
                        _context6.next = 7;
                        return _car.default.addCar(newCar);

                      case 7:
                        createdCar = _context6.sent;
                        util.setSuccess(201, 'Car Added!', createdCar);
                        return _context6.abrupt('return', util.send(res));

                      case 12:
                        _context6.prev = 12;
                        _context6.t0 = _context6.catch(4);
                        util.setError(401, _context6.t0.message);
                        return _context6.abrupt('return', util.send(res));

                      case 16:
                      case 'end':
                        return _context6.stop();
                    }
                  }
                },
                _callee6,
                null,
                [[4, 12]]
              );
            })
          );

          function addCar(_x11, _x12) {
            return _addCar.apply(this, arguments);
          }

          return addCar;
        }())
      },
      {
        key: 'markAsSold',
        value: (function () {
          const _markAsSold = (0, _asyncToGenerator2.default)(
            /* #__PURE__ */
            _regenerator.default.mark(function _callee7(req, res) {
              let id; let
                updatedCar;
              return _regenerator.default.wrap(
                (_context7) => {
                  while (1) {
                    switch ((_context7.prev = _context7.next)) {
                      case 0:
                        id = req.params.id;

                        if (Number(id)) {
                          _context7.next = 4;
                          break;
                        }

                        util.setError(400, 'Please input a valid numeric value');
                        return _context7.abrupt('return', util.send(res));

                      case 4:
                        _context7.prev = 4;
                        _context7.next = 7;
                        return _car.default.markAsSold(id);

                      case 7:
                        updatedCar = _context7.sent;

                        if (!updatedCar) {
                          util.setError(401, 'Cannot find car with the id: '.concat(id));
                        } else {
                          util.setSuccess(201, 'car status updated', updatedCar);
                        }

                        return _context7.abrupt('return', util.send(res));

                      case 12:
                        _context7.prev = 12;
                        _context7.t0 = _context7.catch(4);
                        util.setError(401, _context7.t0);
                        return _context7.abrupt('return', util.send(res));

                      case 16:
                      case 'end':
                        return _context7.stop();
                    }
                  }
                },
                _callee7,
                null,
                [[4, 12]]
              );
            })
          );

          function markAsSold(_x13, _x14) {
            return _markAsSold.apply(this, arguments);
          }

          return markAsSold;
        }())
      },
      {
        key: 'updatePrice',
        value: (function () {
          const _updatePrice = (0, _asyncToGenerator2.default)(
            /* #__PURE__ */
            _regenerator.default.mark(function _callee8(req, res) {
              let _req$params; let id; let price; let
                updatedCar;

              return _regenerator.default.wrap(
                (_context8) => {
                  while (1) {
                    switch ((_context8.prev = _context8.next)) {
                      case 0:
                        (_req$params = req.params),
                        (id = _req$params.id),
                        (price = _req$params.price);

                        if (Number(id)) {
                          _context8.next = 4;
                          break;
                        }

                        util.setError(400, 'Please input a valid numeric value');
                        return _context8.abrupt('return', util.send(res));

                      case 4:
                        _context8.prev = 4;
                        _context8.next = 7;
                        return _car.default.updatePrice(id, price);

                      case 7:
                        updatedCar = _context8.sent;

                        if (!updatedCar) {
                          util.setError(401, 'Cannot find car with the id: '.concat(id));
                        } else {
                          util.setSuccess(201, 'car status updated', updatedCar);
                        }

                        return _context8.abrupt('return', util.send(res));

                      case 12:
                        _context8.prev = 12;
                        _context8.t0 = _context8.catch(4);
                        util.setError(401, _context8.t0);
                        return _context8.abrupt('return', util.send(res));

                      case 16:
                      case 'end':
                        return _context8.stop();
                    }
                  }
                },
                _callee8,
                null,
                [[4, 12]]
              );
            })
          );

          function updatePrice(_x15, _x16) {
            return _updatePrice.apply(this, arguments);
          }

          return updatePrice;
        }())
      },
      {
        key: 'updateCar',
        value: (function () {
          const _updateCar = (0, _asyncToGenerator2.default)(
            /* #__PURE__ */
            _regenerator.default.mark(function _callee9(req, res) {
              let alteredBook; let id; let
                updateBook;
              return _regenerator.default.wrap(
                (_context9) => {
                  while (1) {
                    switch ((_context9.prev = _context9.next)) {
                      case 0:
                        alteredBook = req.body;
                        id = req.params.id;

                        if (Number(id)) {
                          _context9.next = 5;
                          break;
                        }

                        util.setError(400, 'Please input a valid numeric value');
                        return _context9.abrupt('return', util.send(res));

                      case 5:
                        _context9.prev = 5;
                        _context9.next = 8;
                        return _car.default.updateBook(id, alteredBook);

                      case 8:
                        updateBook = _context9.sent;

                        if (!updateBook) {
                          util.setError(404, 'Cannot find book with the id: '.concat(id));
                        } else {
                          util.setSuccess(200, 'Book updated', updateBook);
                        }

                        return _context9.abrupt('return', util.send(res));

                      case 13:
                        _context9.prev = 13;
                        _context9.t0 = _context9.catch(5);
                        util.setError(404, _context9.t0);
                        return _context9.abrupt('return', util.send(res));

                      case 17:
                      case 'end':
                        return _context9.stop();
                    }
                  }
                },
                _callee9,
                null,
                [[5, 13]]
              );
            })
          );

          function updateCar(_x17, _x18) {
            return _updateCar.apply(this, arguments);
          }

          return updateCar;
        }())
      },
      {
        key: 'getACar',
        value: (function () {
          const _getACar = (0, _asyncToGenerator2.default)(
            /* #__PURE__ */
            _regenerator.default.mark(function _callee10(req, res) {
              let id; let
                theCar;
              return _regenerator.default.wrap(
                (_context10) => {
                  while (1) {
                    switch ((_context10.prev = _context10.next)) {
                      case 0:
                        id = req.params.id;

                        if (Number(id)) {
                          _context10.next = 4;
                          break;
                        }

                        util.setError(400, 'Please input a valid numeric value');
                        return _context10.abrupt('return', util.send(res));

                      case 4:
                        _context10.prev = 4;
                        _context10.next = 7;
                        return _car.default.getACar(id);

                      case 7:
                        theCar = _context10.sent;

                        if (!theCar) {
                          util.setError(400, 'Cannot find car with the id '.concat(id));
                        } else {
                          util.setSuccess(200, 'Found it', theCar);
                        }

                        return _context10.abrupt('return', util.send(res));

                      case 12:
                        _context10.prev = 12;
                        _context10.t0 = _context10.catch(4);
                        util.setError(400, _context10.t0);
                        return _context10.abrupt('return', util.send(res));

                      case 16:
                      case 'end':
                        return _context10.stop();
                    }
                  }
                },
                _callee10,
                null,
                [[4, 12]]
              );
            })
          );

          function getACar(_x19, _x20) {
            return _getACar.apply(this, arguments);
          }

          return getACar;
        }())
      },
      {
        key: 'deleteCar',
        value: (function () {
          const _deleteCar = (0, _asyncToGenerator2.default)(
            /* #__PURE__ */
            _regenerator.default.mark(function _callee11(req, res) {
              let id; let
                deletedCar;
              return _regenerator.default.wrap(
                (_context11) => {
                  while (1) {
                    switch ((_context11.prev = _context11.next)) {
                      case 0:
                        id = req.params.id;

                        if (Number(id)) {
                          _context11.next = 4;
                          break;
                        }

                        util.setError(400, 'Please provide a numeric value');
                        return _context11.abrupt('return', util.send(res));

                      case 4:
                        _context11.prev = 4;
                        _context11.next = 7;
                        return _car.default.deleteCar(id);

                      case 7:
                        deletedCar = _context11.sent;

                        if (deletedCar) {
                          util.setSuccess(200, 'Car deleted');
                        } else {
                          util.setError(404, 'Car with the id '.concat(id, ' cannot be found'));
                        }

                        return _context11.abrupt('return', util.send(res));

                      case 12:
                        _context11.prev = 12;
                        _context11.t0 = _context11.catch(4);
                        util.setError(400, _context11.t0);
                        return _context11.abrupt('return', util.send(res));

                      case 16:
                      case 'end':
                        return _context11.stop();
                    }
                  }
                },
                _callee11,
                null,
                [[4, 12]]
              );
            })
          );

          function deleteCar(_x21, _x22) {
            return _deleteCar.apply(this, arguments);
          }

          return deleteCar;
        }())
      }
    ]);
    return CarController;
  }());

const _default = CarController;
exports.default = _default;
// # sourceMappingURL=carController.js.map
