import { registerAppRoutes } from '@dreamhive-lib/function';
import express from 'express';

const host = process.env.HOST ?? 'localhost';
const port = process.env.PORT ? Number(process.env.PORT) : 4000;

const app = express();

app.use(express.json());

// cors
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.get('/api', (req, res) => {
  res.send({ message: 'Hello You hit Authentication App' });
});

registerAppRoutes(app, `${__dirname}\\routes`);

app.listen(port, host, () => {
  console.log(`[ ready ] http://${host}:${port} Authentication App`);
});
