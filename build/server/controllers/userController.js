

const _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.default = void 0;

const _regenerator = _interopRequireDefault(require('@babel/runtime/regenerator'));

const _asyncToGenerator2 = _interopRequireDefault(require('@babel/runtime/helpers/asyncToGenerator'));

const _classCallCheck2 = _interopRequireDefault(require('@babel/runtime/helpers/classCallCheck'));

const _createClass2 = _interopRequireDefault(require('@babel/runtime/helpers/createClass'));

const _user = _interopRequireDefault(require('../src/models/user'));

const _Utils = _interopRequireDefault(require('../utils/Utils'));

const util = new _Utils.default();

const userController =
  /* #__PURE__ */
  (function () {
    function userController() {
      (0, _classCallCheck2.default)(this, userController);
    }

    (0, _createClass2.default)(userController, null, [
      {
        key: 'checkUser',
        value: (function () {
          const _checkUser = (0, _asyncToGenerator2.default)(
            /* #__PURE__ */
            _regenerator.default.mark(function _callee(req, res) {
              let user;
              return _regenerator.default.wrap(
                (_context) => {
                  while (1) {
                    switch ((_context.prev = _context.next)) {
                      case 0:
                        _context.prev = 0;
                        _context.next = 3;
                        return _user.default.checkUser(req.body.email);

                      case 3:
                        user = _context.sent;

                        if (user) {
                          util.setSuccess(200, 'user exists', user);
                        } else {
                          util.setError(400, 'user not found Try creating an Account');
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

          function checkUser(_x, _x2) {
            return _checkUser.apply(this, arguments);
          }

          return checkUser;
        }())
      },
      {
        key: 'addUser',
        value: (function () {
          const _addUser = (0, _asyncToGenerator2.default)(
            /* #__PURE__ */
            _regenerator.default.mark(function _callee2(req, res) {
              let newUser; let
                createdUser;
              return _regenerator.default.wrap(
                (_context2) => {
                  while (1) {
                    switch ((_context2.prev = _context2.next)) {
                      case 0:
                        if (
                          !(
                            !req.body.email
                            || !req.body.first_name
                            || !req.body.last_name
                            || !req.body.password
                            || !req.body.address
                          )
                        ) {
                          _context2.next = 3;
                          break;
                        }

                        util.setError(401, 'Please provide complete details');
                        return _context2.abrupt('return', util.send(res));

                      case 3:
                        newUser = req.body;
                        _context2.prev = 4;
                        _context2.next = 7;
                        return _user.default.addUser(newUser);

                      case 7:
                        createdUser = _context2.sent;
                        util.setSuccess(201, 'successfully created new account', createdUser);
                        return _context2.abrupt('return', util.send(res));

                      case 12:
                        _context2.prev = 12;
                        _context2.t0 = _context2.catch(4);
                        util.setError(400, _context2.t0.message);
                        return _context2.abrupt('return', util.send(res));

                      case 16:
                      case 'end':
                        return _context2.stop();
                    }
                  }
                },
                _callee2,
                null,
                [[4, 12]]
              );
            })
          );

          function addUser(_x3, _x4) {
            return _addUser.apply(this, arguments);
          }

          return addUser;
        }())
      }
    ]);
    return userController;
  }());

const _default = userController;
exports.default = _default;
// # sourceMappingURL=userController.js.map
