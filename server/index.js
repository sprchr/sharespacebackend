import express from 'express';
import cors from 'cors';

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

// Sample data
const messages = [
  { id: 1, text: 'Hello from Node.js!' },
  { id: 2, text: 'Welcome to the API' }
];

// GET endpoint to fetch messages
app.get('/api/messages', (req, res) => {
  res.json(messages);
});

// POST endpoint to add a new message
app.post('/api/messages', (req, res) => {
  const newMessage = {
    id: messages.length + 1,
    text: req.body.text
  };
  messages.push(newMessage);
  res.status(201).json(newMessage);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});