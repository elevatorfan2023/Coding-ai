function sendMessage() {
    const input = document.getElementById("user-input");
    const message = input.value.trim();

    if (message) {
        addMessage(message, "user-message");
        getBotResponse(message);
        input.value = "";
    }
}

function addMessage(text, className) {
    const chatBox = document.getElementById("chat-box");
    const messageDiv = document.createElement("div");
    messageDiv.className = `message ${className}`;
    messageDiv.textContent = text;
    chatBox.appendChild(messageDiv);
    chatBox.scrollTop = chatBox.scrollHeight;
}

function getBotResponse(userMessage) {
    const responses = {
        "hello": "Hi there! How can I assist you?",
        "how are you?": "I'm a bot, but thanks for asking! How can I help?",
        "what is your name?": "I'm Chatbot AI, your virtual assistant.",
        "bye": "Goodbye! Have a great day!"
    };

    const response = responses[userMessage.toLowerCase()] || "I'm here to help!";
    setTimeout(() => addMessage(response, "bot-message"), 500);
}
