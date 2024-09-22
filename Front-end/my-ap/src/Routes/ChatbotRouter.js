const express = require('express');
const router = express.Router();
const { Chatbot } = require('../Models/Chatbot');

router.post('/ask-chatbot', async (req, res) => {
    const userInput = req.body.query;
    try {
        const chatbotResponse = await Chatbot(userInput);
        res.json(chatbotResponse);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch response from chatbot' });
    }
});

module.exports = router;