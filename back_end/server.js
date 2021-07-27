const express = require('express');
const app = express();
const cors = require('cors');

const port = 5000;

app.use(cors());
app.use(express.json());

app.get('/api', (req, res) => {
  res.send('hello world');
});

app.listen(port, () => {
  console.log(`🔵 app listening at http://localhost:${port}`);
});
