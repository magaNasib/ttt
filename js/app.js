const playerSpan = document.querySelector('span');
const player = document.querySelector('#player');
const orders = document.querySelectorAll('.orders');
let possibility = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]
let X = [];
let O = [];

let order = 'O';
playerSpan.textContent = order
addEventListeners();

function addEventListeners() {
    orders.forEach(block => {
        block.addEventListener('click', orderClick);

    });
}

let bool = true;

function checkWin(winner) {
    possibility.forEach(arrayElement => {
        let allFounded = arrayElement.every(x => X.includes(x));
        let allFounded2 = arrayElement.every(x => O.includes(x));
        if (allFounded || allFounded2) {
            bool = false;
        }
    });
    return bool;
}

function orderClick() {
    if (this.textContent.length === 0 && checkWin()) {
        playerValue(this);
    } else {
        null;
    }
}

function playerValue(div) {
    if (playerSpan.textContent === 'X') {
        playerSpan.textContent = 'O'
        order = 'X';

        X.push(parseInt(div.title)); //numbere cevirir yazir arraya.


    } else if (playerSpan.textContent === 'O') {
        playerSpan.textContent = 'X';
        order = 'O';
        O.push(parseInt(div.title));

    }

    if (!checkWin()) {
        player.innerHTML = "Winner is " + `<span>${order}</span>`
        order;

    }
    div.textContent = order;

}