

const _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

const _classCallCheck2 = _interopRequireDefault(require('@babel/runtime/helpers/classCallCheck'));

const _createClass2 = _interopRequireDefault(require('@babel/runtime/helpers/createClass'));

const Car =
  /* #__PURE__ */
  (function () {
    function Car() {
      (0, _classCallCheck2.default)(this, Car);
      const cars = [];
    }

    (0, _createClass2.default)(Car, [
      {
        key: 'getAllCars',
        value: function getAllCars() {
          return this.cars.filter((car) => {
            return car.status === 'available';
          });
        }
      },
      {
        key: 'getCar',
        value: function getCar(id) {
          return this.cars.find((item) => {
            return item.id === id;
          });
        }
      },
      {
        key: 'getAllRangeCars',
        value: function getAllRangeCars(max, min) {
          const cars = this.getAllCars();
          return cars.filter((car) => {
            return car.price >= min && car.price <= max;
          });
        }
      },
      {
        key: 'getAllAdminCars',
        value: function getAllAdminCars() {
          return this.cars;
        }
      },
      {
        key: 'addCar',
        value: function addCar(car) {
          this.cars.push(car);
        }
      },
      {
        key: 'getAllStateCars',
        value: function getAllStateCars(state) {
          return this.cars.filter((car) => {
            return car.state === state;
          });
        }
      },
      {
        key: 'getAllBodyTypeCars',
        value: function getAllBodyTypeCars(bodyType) {
          const cars = this.getAllCars();
          return cars.filter((car) => {
            return car.body_type === bodyType;
          });
        }
      },
      {
        key: 'markAsSold',
        value: function markAsSold(id) {
          const car = this.getCar(id);
          car.status = 'sold';
          return this.getCar(id);
        }
      },
      {
        key: 'updatePrice',
        value: function updatePrice(id, price) {
          const car = this.getCar(id);
          car.price = price;
          return this.getCar(id);
        }
      },
      {
        key: 'deleteCar',
        value: function deleteCar(id) {
          const car = this.getCar(id);
          const temp = car;
          const index = this.cars.indexOf(car);
          delete this.cars[index];
          return temp;
        }
      }
    ]);
    return Car;
  }());

module.exports = {
  Car
};
// # sourceMappingURL=car.js.map
