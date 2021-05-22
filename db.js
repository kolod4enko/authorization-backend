import { Sequelize as ConnectionDB } from 'sequelize';

export const Sequelize = new ConnectionDB(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    dialect: 'postgres',
    host: process.env.DB_HOST,
    port: process.env.DB_PORT
  }
);
