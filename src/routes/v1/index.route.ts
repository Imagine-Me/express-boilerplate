import { Router } from 'express';
import {
  getAllNotifications,
  setNotification,
} from '../../controller/notification.controller';

const router = Router();

router.get('/__test', (req, res) => {
  res.send('THIS IS V1');
});

// TESTING

router.get('/get', async (req, res) => {
  const result = await getAllNotifications();
  res.send(result);
});
router.get('/post', async (req, res) => {
  const result = await setNotification();
  res.send(result);
});

const defaultRoutes = [];

export default router;
