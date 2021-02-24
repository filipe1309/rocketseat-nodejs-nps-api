import 'reflect-metadata';
import './database';
import express from 'express';


const app = express();

app.get('/', (req, res) => {
  return res.json('Hello World - NLW4');
})

app.post('/', (req, res) => {
  return res.json({ message: 'Dados salvos com sucesso!' });
})

app.listen(3333, () => console.log('Server is running!'));