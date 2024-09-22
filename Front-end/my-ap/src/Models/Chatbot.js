const axios = require('axios');

const Chatbot = async (userInput) => {
    try {
      const response = await axios.post('https://0x4b6e388c3aae7dde01b0e63bd9f05e96c79da7eb.us.gaianet.network/v1/chat/completions', {
       "messages": [
                      { "role": "system", "content": "You are a helpful assistant." },
                      { "role": "user", "content": "your_question" }
                    ]
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching chatbot response:', error);
      throw error;
    }
  };
  
  module.exports = { Chatbot };
