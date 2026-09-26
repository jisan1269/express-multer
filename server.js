const express = require('express');
const multer = require('multer');
const path = require('path');
 
const app = express();
const PORT = 3000;
 
// Multer storage configuration
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  }
});
 
const upload = multer({ storage: storage });
 
// Upload API
app.post('/upload', upload.single('file'), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: 'No file uploaded' });
  }
 
  res.json({ message: 'File uploaded successfully' });
});
 
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});