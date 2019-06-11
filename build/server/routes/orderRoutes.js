

const _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.default = void 0;

const _express = require('express');

const _orderController = _interopRequireDefault(require('../controllers/orderController'));

const router = (0, _express.Router)();
router.post('/', _orderController.default.addOrder);
router.put('/:id/:price', _orderController.default.updatePrice);
const _default = router;
exports.default = _default;
// # sourceMappingURL=orderRoutes.js.map
