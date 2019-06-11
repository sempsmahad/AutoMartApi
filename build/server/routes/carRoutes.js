

const _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.default = void 0;

const _express = require('express');

const _carController = _interopRequireDefault(require('../controllers/carController'));

const router = (0, _express.Router)();
router.get('/cars', _carController.default.getAllCars);
router.get('/cars/:min_price/:max_price', _carController.default.getAllRangeCars);
router.get('/cars', _carController.default.getAllAdminCars);
router.post('/cars', _carController.default.addCar);
router.get('/cars/state=value', _carController.default.getAllStateCars);
router.get('/cars/body_type=value', _carController.default.getAllBodyTypeCars);
router.put('/cars/:id/:status', _carController.default.markAsSold);
router.put('/cars/:id/:price', _carController.default.updatePrice);
router.get('/cars/:id', _carController.default.viewCar);
router.delete('/cars/:id', _carController.default.deleteCar);
const _default = router;
exports.default = _default;
// # sourceMappingURL=carRoutes.js.map
