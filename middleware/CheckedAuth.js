import jwt from 'jsonwebtoken';
import ErrorMessage from '../constants/errorMessage';

const checkedAuth = (req, res, next) => {
  if (req.method === 'OPTIONS') {
    next();
  }

  try {
    const token = req.headers.authorization.split(' ')[1];

    if (!token) {
      res.status(401).json({ message: ErrorMessage.auth.notAuthorized });
    }

    const decode = jwt.verify(token, process.env.SECRET_KEY);
    req.user = decode;
    next();
  }
  catch (e) {
    res.status(401).json({ message: ErrorMessage.auth.notAuthorized });
  }
};

export default checkedAuth;
