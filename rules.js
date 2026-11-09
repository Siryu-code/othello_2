// Mengembalikan daftar bidak lawan yang terbalik kalau pemain p menaruh di (r, c).
function flips(r, c, p) {
    var out = [];

    if (grid[r][c] !== 0) return out;

    for (var i = 0; i < DIRS.length; i++) {
        var dr = DIRS[i][0],
            dc = DIRS[i][1];
        var line = [];
        var y = r + dr, x = c + dc;
        while (inside(y, x) && grid[y][x] === 3 - p) {
            line.push([y, x]);
            y += dr;
            x += dc;
        }

        if (line.length > 0 && inside(y, x) && grid[y][x] === p) out = out.concat(line);
    }
    return out;
}

function hasMove(p) {
    for (var r = 0; r < N; r++) {
        for (var c = 0; c < N; c++) {
            if (flips(r, c, p).length > 0) return true;
        }
    }
    return false;
}

function validMoves(p) {
    var moves = [];
    for (var r = 0; r < N; r++) {
        for (var c = 0; c < N; c++) {
            if (flips(r, c, p).length > 0) moves.push([r, c])
        }
    }
    return moves;
}