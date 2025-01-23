// Create web server
const express = require('express');
const app = express();
const port = 3000;

// Create a new comment
app.post('/comments', (req, res) => {
  res.send('Create a new comment');
});

// Get all comments
app.get('/comments', (req, res) => {
  res.send('Get all comments');
});

// Get a comment by comment ID
app.get('/comments/:id', (req, res) => {
  res.send('Get a comment by comment ID');
});

// Update a comment by comment ID
app.put('/comments/:id', (req, res) => {
  res.send('Update a comment by comment ID');
});

// Delete a comment by comment ID
app.delete('/comments/:id', (req, res) => {
  res.send('Delete a comment by comment ID');
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});