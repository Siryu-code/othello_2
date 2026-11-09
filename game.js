function init() {
    clearTimeout(aiTimer);
    grid = [];

    for (var r = 0; r < N; r++) {
        grid.push([]);
        for (var c = 0; c < N; c++) grid[r].push(0);
    }

    grid[3][3] = 2;
    grid[4][4] = 2;
    grid[3][4] = 1;
    grid[4][3] = 1;

    turn = 1;
    over = false;
    render("");
    maybeAITurn();
}

function play(r, c) {
    if (over) return;
    var f = flips(r, c, turn)
    if (f.length === 0) return;

    grid[r][c] = turn;
    for (var i = 0; i < f.length; i++) grid[f[i][0]][f[i][1]] = turn;

    var next = 3 - turn;
    var note = "";

    if (hasMove(next)) {
        turn = next;
    } else if (hasMove(turn)) {
        note = name(next) + "tidak punya langkah, giliran dilewati.";
    } else (over = true);

    render(note);
    maybeAITurn();
}

function maybeAITurn() {
    if (over || turn !== aiColor) return;

    aiTimer = setTimeout(function () {
        if (over || turn !== aiColor) return;

        var moves = validMoves(aiColor);
        var move = pickMove(moves);

        if (move) {
            play(move[0], move[1]);
        }
    }, 600)
}