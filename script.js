let squares = document.querySelectorAll('.square');
let player = 'X';

for (let i = 0; i < squares.length; i++) {
    squares[i].addEventListener('click', function () {
        if (squares[i].textContent === '') {
            squares[i].textContent = player;
            if (player === 'X') {
                player = 'O';
            } else {
                player = 'X';
            }
        }
        checkWinner();
    });
}

function checkWinner() {
    let board = [];
    for (let i = 0; i < squares.length; i++) {
        board[i] = squares[i].textContent;
    }

    let win = [[0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
    ];

    for (let i = 0; i < win.length; i++) {
        if (board[win[i][0]] !== '' && board[win[i][0]] === board[win[i][1]] && board[win[i][1]] === board[win[i][2]]) {
            alert('O jogador ' + board[win[i][0]] + ' venceu!');
            resetBoard();
            break;
        } else if (!board.includes('')) {
            alert('Empate!');
            resetBoard();
            break;
        }
    }
}

function resetBoard() {
    for (let i = 0; i < squares.length; i++) {
        squares[i].textContent = '';
    }
    player = 'X'
}
