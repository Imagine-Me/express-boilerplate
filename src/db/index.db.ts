import { Model, ModelCtor, Options, Sequelize } from 'sequelize';
import config from '../config/db.config';

import { models } from '../models/index.model';

interface Database {
  [key: string]: ModelCtor<Model<any, any>>;
}

const db = {} as Database;
const env = process.env.NODE_ENV ?? 'development';
const configEnv = config as any;
const sequelize = new Sequelize(configEnv[env] as Options);

Object.keys(models).forEach((model) => {
  db[model] = models[model](sequelize);
});
export { db };
