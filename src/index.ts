import app from './app';

const PORT = process.env.PORT;

const server = app.listen(PORT, () => {
  console.log(`APP IS RUNNING ON PORT ${PORT}`);
});

export default server;
