

const _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

const _classCallCheck2 = _interopRequireDefault(require('@babel/runtime/helpers/classCallCheck'));

const _createClass2 = _interopRequireDefault(require('@babel/runtime/helpers/createClass'));

const Order =
  /* #__PURE__ */
  (function () {
    function Order() {
      (0, _classCallCheck2.default)(this, Order);
      this.orders = [];
    }

    (0, _createClass2.default)(Order, [
      {
        key: 'addOrder',
        value: function addOrder(order) {
          this.orders.push(order);
        }
      },
      {
        key: 'setAmount',
        value: function setAmount(id, amount) {
          const order = this.orders.find((item) => {
            return item.id === id;
          });
          order.amount = amount;
          this.addOrder(order);
        }
      }
    ]);
    return Order;
  }());

module.exports = {
  Order
};
// # sourceMappingURL=order.js.map
