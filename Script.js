function sendMessage() {
    const userInput = document.getElementById("user-input");
    const message = userInput.value.trim();

    if (message === "") return; // Prevent sending empty messages

    addMessageToChat("user", message);
    userInput.value = ""; // Clear the input field

    // Simulate bot response with a delay
    setTimeout(() => {
        const botResponse = generateBotResponse(message);
        addMessageToChat("bot", botResponse);
    }, 600);
}

function addMessageToChat(sender, message) {
    const chatBox = document.getElementById("chat-box");

    const messageElement = document.createElement("div");
    messageElement.classList.add("chat-message");
    messageElement.classList.add(sender === "user" ? "user-message" : "bot-message");
    messageElement.textContent = message;

    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight; // Scroll to the bottom
}

function handleKeyPress(event) {
    if (event.key === "Enter") {
        sendMessage();
    }
}

function generateBotResponse(message) {
    const responses = {
        "hello": "Hi there! How can I assist you today?",
        "how are you": "I'm just a bot, but thanks for asking!",
        "help": "I'm here to help! You can ask me anything.",
        "name": "I'm your friendly AI chatbot.",
        "bye": "Goodbye! Have a great day!"
    };

    // Default responses if no keywords are matched
    const defaultResponses = [
        "I'm not sure I understand. Could you rephrase?",
        "Can you elaborate on that?",
        "I'm here to help! Please tell me more.",
        "Interesting! Tell me more about that."
    ];

    // Check for a keyword match
    const lowerCaseMessage = message.toLowerCase();
    for (const key in responses) {
        if (lowerCaseMessage.includes(key)) {
            return responses[key];
        }
    }

    // Return a random default response if no keyword matches
    return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
}
