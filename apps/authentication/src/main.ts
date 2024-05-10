import express from 'express';
import { registerAppRoutes } from '@dreamhive-lib/function/index';
import { readdirSync, statSync } from 'fs';

const host = process.env.HOST ?? 'localhost';
const port = process.env.PORT ? Number(process.env.PORT) : 4000;

const app = express();

app.get('/api', (req, res) => {
  res.send({ message: 'Hello You hit Authentication App' });
});

registerAppRoutes(app, `${__dirname}\\routes`);

app.listen(port, host, () => {
  console.log(`[ ready ] http://${host}:${port} Authentication App`);
});
