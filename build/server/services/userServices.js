

const _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.default = void 0;

const _regenerator = _interopRequireDefault(require('@babel/runtime/regenerator'));

const _asyncToGenerator2 = _interopRequireDefault(require('@babel/runtime/helpers/asyncToGenerator'));

const _classCallCheck2 = _interopRequireDefault(require('@babel/runtime/helpers/classCallCheck'));

const _createClass2 = _interopRequireDefault(require('@babel/runtime/helpers/createClass'));

const _user3 = _interopRequireDefault(require('../src/models/user'));

const _Utils = _interopRequireDefault(require('../utils/Utils'));

const util = new _Utils.default();

const UserService =
  /* #__PURE__ */
  (function () {
    function UserService() {
      (0, _classCallCheck2.default)(this, UserService);
    }

    (0, _createClass2.default)(UserService, null, [
      {
        key: 'checkUser',
        value: (function () {
          const _checkUser = (0, _asyncToGenerator2.default)(
            /* #__PURE__ */
            _regenerator.default.mark(function _callee() {
              let _user; let
                _user2;

              return _regenerator.default.wrap(
                (_context) => {
                  while (1) {
                    switch ((_context.prev = _context.next)) {
                      case 0:
                        _context.prev = 0;
                        _context.next = 3;
                        return _user.findEmail(email);

                      case 3:
                        _user = _context.sent;

                        if (!_user) {
                          _context.next = 9;
                          break;
                        }

                        _context.next = 7;
                        return _user2.getUser;

                      case 7:
                        _user2 = _context.sent;
                        util.setSuccess(200, 'you are now logged in', _user2);

                      case 9:
                        return _context.abrupt('return', null);

                      case 12:
                        _context.prev = 12;
                        _context.t0 = _context.catch(0);
                        throw _context.t0;

                      case 15:
                      case 'end':
                        return _context.stop();
                    }
                  }
                },
                _callee,
                null,
                [[0, 12]]
              );
            })
          );

          function checkUser() {
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
            _regenerator.default.mark(function _callee2(newUser) {
              return _regenerator.default.wrap(
                (_context2) => {
                  while (1) {
                    switch ((_context2.prev = _context2.next)) {
                      case 0:
                        _context2.prev = 0;
                        _context2.next = 3;
                        return _user3.default.create(newUser);

                      case 3:
                        return _context2.abrupt('return', _context2.sent);

                      case 6:
                        _context2.prev = 6;
                        _context2.t0 = _context2.catch(0);
                        throw _context2.t0;

                      case 9:
                      case 'end':
                        return _context2.stop();
                    }
                  }
                },
                _callee2,
                null,
                [[0, 6]]
              );
            })
          );

          function addUser(_x) {
            return _addUser.apply(this, arguments);
          }

          return addUser;
        }())
      }
    ]);
    return UserService;
  }());

const _default = UserService;
exports.default = _default;
// # sourceMappingURL=userServices.js.map
