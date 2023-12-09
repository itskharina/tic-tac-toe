const square = document.querySelectorAll('.square');
const turn = document.querySelector('.turn');
let restart = document.querySelector('button')
const winningText = document.querySelector('.results-text');
let resultsCard = document.querySelector('.background')
let player1 = "X";
let player2 = "O";
let currentPlayer = player1;
let gameRunning = false;


let grid = ["", "", "", "", "", "", "", "", ""]
let winningCombo = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

function startGame() {
    gameRunning = true;
    square.forEach(cell => cell.addEventListener("click", cellClicked));
}

startGame();

function cellClicked(e) {
    const cellIndex = parseInt(e.target.getAttribute('data-cell-index'))

    if (grid[cellIndex] !== "" || !gameRunning) {
        return;
    }

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
    console.log(grid)
    pickWinner();
}

function pickWinner() {
    let roundWon = false
    for (let i = 0; i < winningCombo.length; i++) {
        let winCondition = winningCombo[i];
        let a = grid[winCondition[0]];
        let b = grid[winCondition[1]];
        let c = grid[winCondition[2]];

        if (a === "" || b === "" || c === "") {
            continue;
        }

        if (a === b && b === c) {
            console.log("winner")
            roundWon = true
            break;
        }
    }

    if (roundWon) {
        resultsCard.style.display = "flex";
        gameRunning = false;

        if (currentPlayer === player1) {
            turn.textContent = "Player 2 won!"
            winningText.textContent = "Player 2 won!"
        } else {
            turn.textContent = "Player 1 won!"
            winningText.textContent = "Player 1 won!"
        }
        return;
    }

    if (!grid.includes("")) {
        resultsCard.style.display = "flex";
        gameRunning = false;
        turn.textContent = "Draw!"
        winningText.textContent = "Draw!"
        return;
    }
}

restart.addEventListener("click", restartGame)

function restartGame() {
    gameRunning = true;
    currentPlayer = player1
    grid = ["", "", "", "", "", "", "", "", ""];
    turn.textContent = "Player 1's turn!"
    resultsCard.style.display = "none";
    square.forEach(cell => cell.textContent = "");
}

