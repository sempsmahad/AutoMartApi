

const _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.default = void 0;

const _express = _interopRequireDefault(require('express'));

const _bodyParser = _interopRequireDefault(require('body-parser'));

const _carRoutes = _interopRequireDefault(require('./server/routes/carRoutes'));

const _flagRoutes = _interopRequireDefault(require('./server/routes/flagRoutes'));

const _userRoutes = _interopRequireDefault(require('./server/routes/userRoutes'));

const _orderRoutes = _interopRequireDefault(require('./server/routes/orderRoutes'));

const app = (0, _express.default)();
app.use(_bodyParser.default.json());
app.use(
  _bodyParser.default.urlencoded({
    extended: false
  })
);
app.use('/api/v1', _carRoutes.default);
app.use('/api/v1/flags', _flagRoutes.default);
app.use('/api/v1/auth', _userRoutes.default);
app.use('/api/v1/orders', _orderRoutes.default); // when a random route is inputed

app.get('*', (req, res) => {
  return res.status(200).send({
    message: 'Welcome to this API.'
  });
});
const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log('Server is running on PORT '.concat(port));
});
const _default = app;
exports.default = _default;
// # sourceMappingURL=index.js.map
