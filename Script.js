// Handle sending a message and getting a response
function sendMessage() {
    const userInput = document.getElementById("user-input").value;
    if (userInput.trim() === "") return;
    
    addMessage(userInput, "user");
    document.getElementById("user-input").value = "";

    // Simulate a response from the chatbot (You’ll replace this with server interaction)
    setTimeout(() => {
        const botResponse = getBotResponse(userInput);
        addMessage(botResponse, "bot");
    }, 1000);
}

// Function to add a message to the chat window
function addMessage(message, sender) {
    const chatWindow = document.getElementById("chat-window");
    const messageElement = document.createElement("div");
    messageElement.className = sender === "user" ? "user-message" : "bot-message";
    messageElement.innerText = message;
    chatWindow.appendChild(messageElement);
    chatWindow.scrollTop = chatWindow.scrollHeight;
}

// Sample bot responses (Replace this with backend responses)
function getBotResponse(userInput) {
    if (userInput.toLowerCase().includes("hello")) {
        return "Hi there! How can I help you with coding today?";
    } else if (userInput.toLowerCase().includes("java")) {
        return "Java is a versatile programming language. Need a specific example?";
    } else {
        return "I'm still learning! Try asking something else or be more specific.";
    }
}
