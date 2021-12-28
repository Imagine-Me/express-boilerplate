import express from 'express';
import dotenv from 'dotenv';
import cors, { CorsOptions } from 'cors';
import v1Router from './routes/v1/index.route';

dotenv.config();
const app = express();
const PORT = process.env.PORT;

const whiteList = [''];
const corsOptions: CorsOptions = {
  origin: (origin, callback) => {
    if (origin) {
      if (whiteList.indexOf(origin) !== -1) {
        callback(null);
      } else {
        callback(new Error('CORS ERROR'));
      }
    } else {
      callback(null);
    }
  },
};

// MIDDLEWARES
app.use(express.json());
app.use(cors(corsOptions));

// ROUTES
app.use('/v1', v1Router);

app.get('/', (req, res) => {
  res.send('HELLO WORLD');
});

const server = app.listen(PORT, () => {
  console.log(`APP IS RUNNING ON PORT ${PORT}`);
});

export default server;
