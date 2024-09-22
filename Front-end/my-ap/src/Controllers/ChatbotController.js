// ChatbotComponent.js

import React, { useState, useEffect } from 'react';
import chatbotController from './ChatbotController';

const getChatbotResponse = async (userInput) => {
    try {
      const response = await fetch('https://0x4b6e388c3aae7dde01b0e63bd9f05e96c79da7eb.us.gaianet.network/v1/chat/completions', {
        method: 'POST',
        headers: {
            'accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
            "messages": [
              { "role": "system", "content": "You are a helpful assistant." },
              { "role": "user", "content": "your_question" }
            ]
          }),
      });
      
      if (!response.ok) {
        throw new Error('Failed to fetch response from the server');
      }
      
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error in fetching chatbot response:', error);
      throw error;
    }
  };
  
  export default { getChatbotResponse };
