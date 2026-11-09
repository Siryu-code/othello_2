function setOn(el, on) {
    if (on) {
        el.classList.add("on");
    } else (el.classList.remove("on"))
}

function makeCell(r, c) {
    var v = grid[r][c];
    var cell = document.createElement("button");

    cell.className = "c";
    cell.setAttribute("role", "gridcell");
    cell.setAttribute("area-label", "Baris " + (r + 1) + " kolom " + (c + 1));

    if (v) {
        var d = document.createElement("span");
        d.className = "d " + (v === 1 ? "b" : "w");
        cell.appendChild(d);
    } else if (!over && turn !== aiColor && flips(r, c, turn).length > 0) {
        cell.classList.add("ok");
    }

    cell.onclick = function () {
        if (turn !== aiColor) {
            play(r, c);
        }
    };
    return cell;
}

function render(note) {
    boardEl.innerHTML = "";
    var b = 0, w = 0;

    for (var r = 0; r < N; r++) {
        for (var c = 0; c < N; c++) {
            if (grid[r][c] === 1) b++;
            if (grid[r][c] === 2) w++;
            boardEl.appendChild(makeCell(r, c));
        }
    }
    $("sb").textContent = b;
    $("sw").textContent = w;
    setOn($("pb"), !over && turn === 1);
    setOn($("pw"), !over && turn === 2);

    var text;
    if (over) {
        if (b === w) text = "Seri " + b + "-" + w + ".";
        else text = (b > w ? "Hitam" : "Putih") + " menang " + Math.max(b, w) + "-" + Math.min(b, w) + ".";
    } else {
        text = note || "Giliran " + name(turn) + ".";
    }
    $("msg").textContent = text;
}