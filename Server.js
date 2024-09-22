// const express = require('express');
// const cors = require('cors');
// const app = express();

// app.use(cors());
// app.use(express.json());

// app.post('/chatbot/data', (req, res) => {
//   const chatbotData = req.body;
//   console.log('Data from chatbot:', chatbotData);
  
//   // Process the data as needed (e.g., store in database)
  
//   res.status(200).json({ message: 'Data received successfully' });
// });

// const PORT = 8000;
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });


const express = require('express');
const cors = require('cors');
const chatbotRouter = require('./chatbotRouter'); // Import the chatbot routes

const app = express();

app.use(cors());
app.use(express.json());

// Use the chatbot route
app.use('/', chatbotRouter);

const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});