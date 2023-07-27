const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'dist')));

app.get('/', (req, res) => {
  res.json({ message: 'Hello World' });
});

app.post('/hrz', (req, res) => {
  const age = parseInt(req.body.age);
  const restingHR = parseInt(req.body.restingHR);
  const gender = req.body.gender;

  let maxHR;
  if (gender === 'female') {
    maxHR = 206 - 0.88 * age;
  } else if (gender === 'male') {
    maxHR = 220 - age;
  } else {
    return res.status(400).send('Invalid gender');
  }

  const reservedHR = maxHR - restingHR;

  const zones = {
    zone1: {
      min: Math.round(restingHR + reservedHR * 0.5),
      max: Math.round(restingHR + reservedHR * 0.6),
    },
    zone2: {
      min: Math.round(restingHR + reservedHR * 0.6),
      max: Math.round(restingHR + reservedHR * 0.7),
    },
    zone3: {
      min: Math.round(restingHR + reservedHR * 0.7),
      max: Math.round(restingHR + reservedHR * 0.8),
    },
    zone4: {
      min: Math.round(restingHR + reservedHR * 0.8),
      max: Math.round(restingHR + reservedHR * 0.9),
    },
    zone5: {
      min: Math.round(restingHR + reservedHR * 0.9),
      max: Math.round(restingHR + reservedHR * 1),
    },
  };

  res.json(zones);
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

// Unexisting routes handler
app.use((req, res) => {
  res.status(404).json({ message: 'Page not found' });
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
