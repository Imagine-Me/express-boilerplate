import { db } from '../db/index.db';

const NotificationModel = db.notification;

export const getAllNotifications = () => {
  return NotificationModel.findAll();
};

export const setNotification = () => {
  return NotificationModel.create({
    notification_text: 'THIS IS THE FIRST NOTIFICATION',
    notification_time: Date.now(),
    firebase_id: 'hahaha',
  });
};
