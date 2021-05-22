import bcrypt from 'bcrypt';
import ApiError from '../error/ApiError';
import { generateJwt, hashPassword } from '../utils/utils';
import { UserModel } from '../models/models';
import ErrorMessage from '../constants/errorMessage';

class _UserController {
  registration = async (req, res, next) => {
    const { email, password } = req.body;

    if (!email || !password) {
      return next(ApiError.badRequest(ErrorMessage.auth.invalidDate));
    }

    const isExistUser = !!await UserModel.findOne({ where: { email } });

    if (isExistUser) {
      return next(ApiError.badRequest(ErrorMessage.auth.isExist));
    }

    const hashPass = await hashPassword(password);
    const newUser = await UserModel.create({ email, password: hashPass });
    const token = generateJwt(newUser.id, newUser.email, newUser.role);

    return res.json({ token });
  };

  login = async (req, res, next) => {
    const { email, password } = req.body;

    const user = await UserModel.findOne({ where: { email } });

    if (!user) {
      return next(ApiError.badRequest(ErrorMessage.auth.isNotExist));
    }

    const comparePassword = bcrypt.compareSync(password, user.password);

    if (!comparePassword) {
      return next(ApiError.internal(ErrorMessage.auth.invalidPass));
    }

    const token = generateJwt(user.id, user.email, user.role);
    return res.json({ token });
  };

  check = async (req, res) => {
    const token = generateJwt(req.user.id, req.user.email, req.user.role);
    return res.json({ token });
  };
}

const UserController = new _UserController();
export default UserController;
