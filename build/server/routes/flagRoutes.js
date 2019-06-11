

const _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.default = void 0;

const _express = require('express');

const _flagController = _interopRequireDefault(require('../controllers/flagController'));

const router = (0, _express.Router)();
router.post('/', _flagController.default.addFlag);
const _default = router;
exports.default = _default;
// # sourceMappingURL=flagRoutes.js.map
