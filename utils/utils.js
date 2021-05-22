import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

export const generateJwt = (id, email, role) => jwt.sign(
  { id, email, role },
  process.env.SECRET_KEY,
  { expiresIn: '24h' }
);

export const hashPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  return bcrypt.hash(password, salt);
};

export default { generateJwt, hashPassword };
