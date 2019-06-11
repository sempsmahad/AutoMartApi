

const _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

const _classCallCheck2 = _interopRequireDefault(require('@babel/runtime/helpers/classCallCheck'));

const _createClass2 = _interopRequireDefault(require('@babel/runtime/helpers/createClass'));

const User =
  /* #__PURE__ */
  (function () {
    function User() {
      (0, _classCallCheck2.default)(this, User);
      this.users = [
        {
          id: '001',
          email: 'mhdsemps@gmail.com',
          first_name: 'muhammad',
          last_name: 'ssempala',
          password: 'password',
          address: 'kigali,Rwanda',
          is_admin: true
        },
        {
          id: '002',
          email: 'mhdsemps@gmail.com',
          first_name: 'mummad',
          last_name: 'smpala',
          password: 'passw212ord',
          address: 'kigali,Rwanda',
          is_admin: false
        }
      ];
    }

    (0, _createClass2.default)(User, [
      {
        key: 'checkUser',
        value: function checkUser(email) {
          const knownUser = this.users.find((user) => {
            return user.email === email;
          });
          return knownUser;
        }
      },
      {
        key: 'addUser',
        value: function addUser(user) {
          this.users.push(user);
        }
      }
    ]);
    return User;
  }());

module.exports = {
  User
};
// # sourceMappingURL=user.js.map
