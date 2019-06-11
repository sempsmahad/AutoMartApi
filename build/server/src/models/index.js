

const _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.default = void 0;

const _user = _interopRequireDefault(require('./user.js'));

const _car = _interopRequireDefault(require('./car.js'));

const _flag = _interopRequireDefault(require('./flag.js'));

const _order = _interopRequireDefault(require('./order.js'));

const _default = {
  User: _user.default,
  Car: _car.default,
  Flag: _flag.default,
  Order: _order.default
};
exports.default = _default;
console.log('Executing Model: index.js ...');
// # sourceMappingURL=index.js.map
