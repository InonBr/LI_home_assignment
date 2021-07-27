const express = require('express');
const app = express();
const cors = require('cors');

const connectDB = require('./db/db');
const User = require('./models/Users');

const port = 5000;

app.use(cors());
app.use(express.json());

app.get('/api', (req, res) => {
  res.send('hello world');
});

app.post('/api/createUser', (req, res) => {
  const newUser = User({
    userName: 'admin',
    password: 'admin',
  });

  newUser.save().then((user) => {
    return res.status(200).json({
      msg: 'user saved successfully',
      user: user,
    });
  });
});

connectDB().then(() => {
  console.log('🔵 MongoDB connected...');
  app.listen(port, () => {
    console.log(`🟢 App listening at http://localhost:${port}`);
  });
});
