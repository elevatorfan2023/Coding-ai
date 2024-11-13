const messages = document.getElementById("messages");

function sendMessage() {
    const input = document.getElementById("input");
    const userMessage = input.value.trim();

    if (userMessage) {
        displayMessage(userMessage, "user-message");
        input.value = "";
        getBotResponse(userMessage);
    }
}

function displayMessage(text, className) {
    const message = document.createElement("div");
    message.className = `message ${className}`;
    message.textContent = text;
    messages.appendChild(message);
    messages.scrollTop = messages.scrollHeight;
}

function getBotResponse(userMessage) {
    const botResponses = [
        "Hello! How can I assist you today?",
        "I'm here to help with anything you need.",
        "Could you tell me more about that?",
        "Interesting! Tell me more.",
        "Thank you for sharing!"
    ];

    const botMessage = botResponses[Math.floor(Math.random() * botResponses.length)];
    setTimeout(() => displayMessage(botMessage, "bot-message"), 1000);
}
