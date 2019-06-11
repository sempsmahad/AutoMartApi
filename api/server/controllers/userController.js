import User from '../src/models/user';
import Util from '../utils/Utils';

const util = new Util();

class userController {
  static async checkUser(req, res) {
    try {
      const user = await User.checkUser(req.body.email);
      if (user) {
        util.setSuccess(200, 'user exists', user);
      } else {
        util.setError(400, 'user not found Try creating an Account');
      }
      return util.send(res);
    } catch (error) {
      util.setError(400, error);
      return util.send(res);
    }
  }

  static async addUser(req, res) {
    if (
      !req.body.email
      || !req.body.first_name
      || !req.body.last_name
      || !req.body.password
      || !req.body.address
    ) {
      util.setError(401, 'Please provide complete details');
      return util.send(res);
    }
    const newUser = req.body;
    try {
      const createdUser = await User.addUser(newUser);
      util.setSuccess(201, 'successfully created new account', createdUser);
      return util.send(res);
    } catch (error) {
      util.setError(400, error.message);
      return util.send(res);
    }
  }
}

export default userController;
