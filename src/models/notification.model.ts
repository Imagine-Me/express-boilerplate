import { Sequelize, DataTypes } from 'sequelize';

const NotificationModel = (sequelize: Sequelize) =>
  sequelize.define(
    'notification',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      notification_text: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      firebase_id: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      notification_time: {
        type: DataTypes.DATE,
        allowNull: false,
      },
    },
    {
      freezeTableName: true,
    }
  );

export { NotificationModel };
