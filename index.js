import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { Sequelize } from './db';
import router from './routes';
import errorHandling from './middleware/ErrorHandling';

dotenv.config();

const PORT = process.env.PORT || 5000;
const app = express();

app.use(cors());
app.use(express.json());
app.use('/api', router);
app.use(errorHandling);

const start = async () => {
  try {
    await Sequelize.authenticate();
    await Sequelize.sync();
    app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
  }
  catch (e) {
    console.log(e);
  }
};

start();
