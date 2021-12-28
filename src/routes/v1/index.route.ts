import express, { Router } from 'express';

const router = Router();

router.get('/__test', (req, res) => {
  res.send('THIS IS V1');
});

const defaultRoutes = [];

export default router;
