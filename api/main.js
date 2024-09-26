import express from 'express';
import cors from 'cors';
import podcasts from './data.js';

const port = process.env.PORT || 3000;

const app = express();
app.use(cors());
app.use(express.json());

const ratings = [
  { guid: 'POMS_NTR_16800158', rating: 3 },
  { guid: 'WO_AT_20194401', rating: 4 },
];

app.get('/api/podcasts', (req, res) => {
  res.json(podcasts);
});

app.get('/api/ratings', (req, res) => {
  res.json(ratings);
});

app.post('/api/ratings', (req, res) => {
  ratings.push(req.body);
  res.json(ratings);
});

app.listen(port, () => {
  console.log(`api running on ${port}`);
});
