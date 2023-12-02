const square = document.querySelectorAll('.square');
const turn = document.querySelector('.turn');
const winningText = document.querySelector('.results-text')
let player1 = "X";
let player2 = "O";
let currentPlayer = player1;
let gameRunning = true;

let grid = ["", "", "", "", "", "", "", "", ""]
let winningCombo = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [3, 5, 7],
    [0, 3, 8]
];

function startGame() {
    turn.textContent = "Player 1's turn!"
    square.forEach(cell => {
        cell.addEventListener("click", cellClicked, { once: true })
    })
};
startGame();

function cellClicked(e) {
    let cellIndex = e.target.getAttribute('data-cell-index')

    if (currentPlayer === player1) {
        grid[cellIndex] = player1
        e.target.textContent = player1
        turn.textContent = "Player 2's turn!"
        currentPlayer = player2;
    } else {
        grid[cellIndex] = player2
        e.target.textContent = player2
        currentPlayer = player1
        turn.textContent = "Player 1's turn!"
    }
}

function pickWinner() {
    for (i = 0; i < winningCombo; i++) {
        let winCondition = winningCombo[i];
        let a = grid[winCondition[0]];
        let b = grid[winCondition[1]];
        let c = grid[winCondition[2]];

        if (a === "" || b === "" || c === "") {
            continue;
        }

        if (a === b && b === c) {
            
        }
    }
}
