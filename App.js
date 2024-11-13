const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

// Endpoint to handle user queries
app.post('/ask', (req, res) => {
    const userInput = req.body.query;
    let response = getResponse(userInput);
    res.send({ response });
});

function getResponse(userInput) {
    // Simple response logic (can integrate an AI model here)
    if (userInput.toLowerCase().includes("hello")) {
        return "Hi there! How can I help you with coding today?";
    } else if (userInput.toLowerCase().includes("python")) {
        return "Python is great for beginners. Do you need help with syntax?";
    }
    return "I didn't understand that. Can you try rephrasing?";
}

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
