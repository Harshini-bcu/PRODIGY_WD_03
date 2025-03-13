const board = document.getElementById("board");
const cells = document.querySelectorAll(".cell");
const restartButton = document.getElementById("restart");

let currentPlayer = "X";
let gameBoard = ["", "", "", "", "", "", "", "", ""];
let gameActive = true;

// Winning combinations
const winningCombinations = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], 
    [0, 3, 6], [1, 4, 7], [2, 5, 8], 
    [0, 4, 8], [2, 4, 6]
];

cells.forEach((cell, index) => {
    cell.addEventListener("click", () => {
        if (gameBoard[index] === "" && gameActive) {
            gameBoard[index] = currentPlayer;
            cell.textContent = currentPlayer;
            if (checkWinner()) {
                alert(currentPlayer + " wins!");
                gameActive = false;
            } else if (!gameBoard.includes("")) {
                alert("It's a draw!");
                gameActive = false;
            } else {
                currentPlayer = currentPlayer === "X" ? "O" : "X";
            }
        }
    });
});

// Check for winner
function checkWinner() {
    return winningCombinations.some(combination => {
        return combination.every(index => gameBoard[index] === currentPlayer);
    });
}

// Restart Game
restartButton.addEventListener("click", () => {
    gameBoard = ["", "", "", "", "", "", "", "", ""];
    gameActive = true;
    currentPlayer = "X";
    cells.forEach(cell => (cell.textContent = ""));
});
