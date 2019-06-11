import user from '../src/models/user';
import Util from '../utils/Utils';

const util = new Util();

class UserService {
  static async checkUser() {
    try {
      const user = await user.findEmail(email);
      if (user) {
        const user = await user.getUser;
        util.setSuccess(200, 'you are now logged in', user);
      }
      return null;
    } catch (error) {
      throw error;
    }
  }

  static async addUser(newUser) {
    try {
      return await user.create(newUser);
    } catch (error) {
      throw error;
    }
  }
}

export default UserService;
