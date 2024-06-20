
const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');
const app = express();
const PORT = 3000;


app.use(cors());
app.get('/api/quiz', (req, res) => {
  const jsonFilePath = path.join(__dirname, '/api/quiz.json');

  fs.readFile(jsonFilePath, 'utf8', (err, data) => {
    if (err) {
      return res.status(500).json({ error: 'Failed to read JSON file' });
    }

    try {
      const jsonData = JSON.parse(data);
      res.json(jsonData);
    } catch (err) {
      res.status(500).json({ error: 'Failed to parse JSON file' });
    }
  });
});

// app.get('/api/submit', (req, res) => {
//     const jsonFilePath = path.join(__dirname, '/api/submit.json');
  
//     fs.readFile(jsonFilePath, 'utf8', (err, data) => {
//       if (err) {
//         return res.status(500).json({ error: 'Failed to read JSON file' });
//       }
  
//       try {
//         const jsonData = JSON.parse(data);
//         res.json(jsonData);
//       } catch (err) {
//         res.status(500).json({ error: 'Failed to parse JSON file' });
//       }
//     });
//   });

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
