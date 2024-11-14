function getBotResponse(input) {
    //rock paper scissors
    if (input == "rock") {
        return "paper";
    } else if (input == "paper") {
        return "scissors";
    } else if (input == "scissors") {
        return "rock";
    }

    // Simple responses
    if (input == "hello") {
        return "Hello there!";
    } else if (input.includes('bye')) {
        return "Talk to you later!";
    }
    else if (input.includes('how are you')) {
        return "I'm just a bot, but I'm doing great! How about you?";
    } 
    else {
        return "Try asking something else!";
    }
}