// Declaring variables
let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const reset_h2 = document.querySelector("header > h2");
const water_div = document.getElementById("water")
const earth_div = document.getElementById("earth")
const fire_div = document.getElementById("fire")
const air_div = document.getElementById("air")

// Obtains the computer's choice
function getComputerChoice() {
    const choices = ['w', 'e', 'f', 'a'] // water, earth, air, fire
    const randomNumber = Math.floor(Math.random() * 4) // randomly picks an element
    return choices[randomNumber]
}

// Converts the selected character to its word
function convertToWord(letter) {
    if (letter === "w") return "Water";
    if (letter === "e") return "Earth";
    if (letter === "f") return "Fire";
    return "Air";
}

// Updates user score
function win(userChoice, computerChoice) {
    userScore++;
    userScore_span.innerHTML = userScore; // Updating user score
    result_p.innerHTML = convertToWord(userChoice) + " Beats " + convertToWord(computerChoice) + ". You Win!"

}

// Updates computer score
function lose(userChoice, computerChoice) {
    computerScore++;
    computerScore_span.innerHTML = computerScore; // Updating computer score
    result_p.innerHTML = convertToWord(userChoice) + " Loses Against " + convertToWord(computerChoice) + ". You Lose!"
}

// Prompts user that it was a tie
function draw(userChoice, computerChoice) {
    result_p.innerHTML = convertToWord(userChoice) + " Ties With " + convertToWord(computerChoice) + ". Draw!"
}

// Resets the game
function resetScore() {
    userScore = 0;
    computerScore = 0;
    userScore_span.innerHTML = userScore; // Updating user score
    computerScore_span.innerHTML = computerScore; // Updating computer score
    result_p.innerHTML = "Who Will Win? Select An Element!"
}

// Compares the user and computer's choice to see who wins
function game(userChoice) {
    var computerChoice = getComputerChoice();
    if (userChoice == computerChoice) { // If the inital choice was equal to user's choice, pick new choice
        computerChoice = getComputerChoice();
    }
    switch (userChoice + computerChoice) {
        // User win cases
        case "ew":
        case "wf":
        case "fa":
        case "ae":
            win(userChoice, computerChoice);
            break;
        // Computer win cases
        case "we":
        case "fw":
        case "af":
        case "ea":
            lose(userChoice, computerChoice);
            break;
        // Draws
        case "wa":
        case "aw":
        case "ef":
        case "fe":
            draw(userChoice, computerChoice);
            break;
    }
}

// Assigning event listeners to the icons and reset button
function main() {
    reset_h2.addEventListener('click', function() {
        resetScore();
    })

    water_div.addEventListener('click', function() {
        game("w")
    })
    
    earth_div.addEventListener('click', function() {
        game("e")
    })
    
    fire_div.addEventListener('click', function() {
        game("f")
    })
    
    air_div.addEventListener('click', function() {
        game("a")
    })
}

main();