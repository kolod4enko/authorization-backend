import sequelize from 'sequelize';
import { Sequelize } from '../db';

export const UserModel = Sequelize.define('user', {
  id: { type: sequelize.INTEGER, primaryKey: true, autoIncrement: true },
  email: { type: sequelize.STRING, unique: true },
  password: { type: sequelize.STRING },
  roles: { type: sequelize.STRING, defaultValue: 'USER' }
});
