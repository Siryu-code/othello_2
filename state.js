var N = 8;
var DIRS = [
    [-1, -1],
    [-1, 0],
    [-1, 1],
    [0, -1],
    [0, 1],
    [1, -1],
    [1, 0],
    [1, 1]
];
var grid, turn, over, mode, aiColor, level, aiTimer;

mode = "black";
level = "easy";

function $(id) {
    return document.getElementById(id)
}

var boardEl = $("board");

function name(p) {
    return p === 1 ? "Hitam" : "putih";
}

function inside(y, x) {
    return y >= 0 && y < N && x >= 0 && x < N
}