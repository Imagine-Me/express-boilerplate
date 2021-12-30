import { Model, ModelCtor, Sequelize } from 'sequelize';
import config from '../config/db.config';
import { models } from '../models/index.model';

interface Database {
  [key: string]: ModelCtor<Model<any, any>>;
}

const db = {} as Database;
const sequelize = new Sequelize(config.development);

Object.keys(models).forEach((model) => {
  db[model] = models[model](sequelize);
});
export { db };
