function sendMessage() {
    const userInput = document.getElementById('user-input');
    const chatbox = document.getElementById('chatbox');

    // Append user's message to the chatbox
    const userMessage = document.createElement('div');
    userMessage.textContent = "User: " + userInput.value;
    chatbox.appendChild(userMessage);

    // Clear the input field
    const message = userInput.value;
    userInput.value = '';

    // Here you would integrate your AI chatbot API
    const botReply = "Bot: This is where your AI's response will appear.";

    // Append bot's reply to the chatbox
    const botMessage = document.createElement('div');
    botMessage.textContent = botReply;
    chatbox.appendChild(botMessage);

    // Scroll to the bottom of the chatbox
    chatbox.scrollTop = chatbox.scrollHeight;
}
