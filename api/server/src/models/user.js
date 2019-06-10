
class User {
  constructor() {
    this.user = [
      {
        id: '001',
        email: 'mhdsemps@gmail.com',
        first_name: 'muhammad',
        last_name: 'ssempala',
        password: 'password',
        address: 'kigali,Rwanda',
        is_admin: true
      },  {
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

}


module.exports = {
  User
};
