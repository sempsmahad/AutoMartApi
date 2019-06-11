

const _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

const _classCallCheck2 = _interopRequireDefault(require('@babel/runtime/helpers/classCallCheck'));

const _createClass2 = _interopRequireDefault(require('@babel/runtime/helpers/createClass'));

const Flag =
  /* #__PURE__ */
  (function () {
    function Flag() {
      (0, _classCallCheck2.default)(this, Flag);
      this.flags = [];
    }

    (0, _createClass2.default)(Flag, [
      {
        key: 'addFlag',
        value: function addFlag(flag) {
          this.flags.push(flag);
        }
      }
    ]);
    return Flag;
  }());

module.exports = {
  Flag
};
// # sourceMappingURL=flag.js.map
