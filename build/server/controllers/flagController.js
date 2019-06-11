

const _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.default = void 0;

const _regenerator = _interopRequireDefault(require('@babel/runtime/regenerator'));

const _asyncToGenerator2 = _interopRequireDefault(require('@babel/runtime/helpers/asyncToGenerator'));

const _classCallCheck2 = _interopRequireDefault(require('@babel/runtime/helpers/classCallCheck'));

const _createClass2 = _interopRequireDefault(require('@babel/runtime/helpers/createClass'));

const _flag = _interopRequireDefault(require('../src/models/flag'));

const _Utils = _interopRequireDefault(require('../utils/Utils'));

const util = new _Utils.default();

const flagController =
  /* #__PURE__ */
  (function () {
    function flagController() {
      (0, _classCallCheck2.default)(this, flagController);
    }

    (0, _createClass2.default)(flagController, null, [
      {
        key: 'addFlag',
        value: (function () {
          const _addFlag = (0, _asyncToGenerator2.default)(
            /* #__PURE__ */
            _regenerator.default.mark(function _callee(req, res) {
              let newFlag; let
                createdFlag;
              return _regenerator.default.wrap(
                (_context) => {
                  while (1) {
                    switch ((_context.prev = _context.next)) {
                      case 0:
                        if (!(!req.body.reason || !req.body.description)) {
                          _context.next = 3;
                          break;
                        }

                        util.setError(401, 'Please provide complete details');
                        return _context.abrupt('return', util.send(res));

                      case 3:
                        newFlag = req.body;
                        _context.prev = 4;
                        _context.next = 7;
                        return _flag.default.addFlag(newFlag);

                      case 7:
                        createdFlag = _context.sent;
                        util.setSuccess(201, 'successfully reported', createdFlag);
                        return _context.abrupt('return', util.send(res));

                      case 12:
                        _context.prev = 12;
                        _context.t0 = _context.catch(4);
                        util.setError(400, _context.t0.message);
                        return _context.abrupt('return', util.send(res));

                      case 16:
                      case 'end':
                        return _context.stop();
                    }
                  }
                },
                _callee,
                null,
                [[4, 12]]
              );
            })
          );

          function addFlag(_x, _x2) {
            return _addFlag.apply(this, arguments);
          }

          return addFlag;
        }())
      }
    ]);
    return flagController;
  }());

const _default = flagController;
exports.default = _default;
// # sourceMappingURL=flagController.js.map
