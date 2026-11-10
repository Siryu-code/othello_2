// pilih random legal move
function pickEasy(moves) {
    return moves[Math.floor(Math.random() * moves.length)];
}

// pilih legal move yang membalik paling banyak
function pickMedium(moves) {
    var bestCount = -1;
    var best = [];

    for (var i = 0; i < moves.length; i++) {
        var count = flips(moves[i][0], moves[i][1], aiColor).length;
        if (count > bestCount) {
            bestCount = count;
            best = [moves[i]];
        } else if (count === bestCount) {
            best.push(moves[i]);
        }
    }

    return best[Math.floor(Math.random() * best.length)];
}

// Hard AI
function pickHard(moves) {
    return pickMedium(moves);
}

function pickMove(moves) {
    if (moves.length === 0) return null;
    if (level === "easy") return pickEasy(moves);
    if (level === "medium") return pickMedium(moves);
    return pickHard(moves);
}