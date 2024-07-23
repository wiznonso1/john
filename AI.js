function sendMessage() {
  var messageInput = document.getElementById("messageInput");
  var chatLog = document.getElementById("chatLog");

  var message = messageInput.value;
  if (message.trim() !== "") {
    var messageElement = document.createElement("div");
    messageElement.classList.add("message");
    messageElement.textContent = "User: " + message;
    chatLog.appendChild(messageElement);

    var response = generateResponse(message);

    var responseElement = document.createElement("div");
    responseElement.classList.add("message");
    responseElement.textContent = "Assistant: " + response;
    chatLog.appendChild(responseElement);
  }

  messageInput.value = "";
  messageInput.focus();
}

function generateResponse(message) {
  // Generate an appropriate response based on the user's message
  var response;

  // Example responses for demonstration purposes
  if (message.includes("hello") || message.includes("hi") ||message.includes("hey") )  {
    response = "Hello! How can I assist you today?";
  } else if (message.includes("appointment")) {
    response = "To schedule an appointment, please call our helpline at 08144900725 or email us @ikenechukwu1@gmail.com.";
  } else if (message.includes("prescription")) {
    response = "To request a prescription refill, please contact your primary care physician.";
  } else if (message.includes("symptom")) {
    response = "Could you please provide more details about your symptoms?";
  } else if (message.includes("health tips")) {
    response = "Here are some health tips: 1. Eat a balanced diet. 2. Exercise regularly. 3. Get enough sleep. 4. Drink plenty of water. 5. Manage stress through relaxation techniques.";
  } else if (message.includes("calorie check")) {
    response = "To count calories, you can use various mobile apps or online tools. They allow you to input your food intake and provide calorie information. Some popular apps include MyFitnessPal, Lose It!, Fitbit and FatSecret.";
  } else if (message.includes("exercise recommendations")) {
    response = "For exercise recommendations, it's best to consult with a fitness professional or your healthcare provider. They can assess your fitness level and provide personalized recommendations based on your goals and any health conditions.";
  } else if (message.includes("medication information")) {
    response = "To get information about a specific medication, you can consult a pharmacist or check reliable online sources such as WebMD or the official website of the medication manufacturer.";
  } else if (message.includes("track symptoms")) {
    response = "You can use a symptom tracker app or journal to track your symptoms. Note down the date, time, and details of your symptoms each time they occur. This can help identify patterns or triggers.";
  } else if (message.includes("ask a doctor")) {
    response = "I'm an AI assistant and cannot provide specific medical advice. For medical questions, it's best to consult with a qualified healthcare professional or visit your nearest medical facility.";
  } else if (message.includes("mental health support")) {
    response = "If you're experiencing mental health concerns, it's important to seek help from a mental health professional. They can provide guidance, support, and appropriate treatment options. Additionally, helplines such as the Regain are available for immediate assistance.";
  } else {
    response = "I'm sorry, but I couldn't understand your request. How else may I assist you?";
  }

  return response;
}


