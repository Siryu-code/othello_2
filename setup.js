function bindOpt(btn) {
    btn.onclick = function () {
        var siblings = btn.parentElement.querySelectorAll(".opt");

        for (var i = 0; i < siblings.length; i++) {
            siblings[i].classList.remove("sel");
        }

        btn.classList.add("sel");
        var modeVal = btn.getAttribute("data-mode");
        var levelVal = btn.getAttribute("data-level");

        if (modeVal !== null) {
            mode = modeVal;

            var levelBox = document.getElementById("levelBox");

            if (mode === "two") {
                levelBox.classList.add("hidden");
            } else (levelBox.classList.remove("hidden"));
        }

        if (levelVal !== null) {
            level = levelVal;
        }
    };
}

var optButtons = document.querySelectorAll(".opt");
for (var i = 0; i < optButtons.length; i++) {
    bindOpt(optButtons[i]);
}

document.getElementById("start").onclick = function () {
    if (mode === "two") {
        aiColor = 0;
    } else if (mode === "black") {
        aiColor = 2;
    } else if (mode === "white") {
        aiColor = 1;
    }
    document.getElementById("setup").classList.add("hidden");
    document.getElementById("game").classList.remove("hidden");

    init();
};

document.getElementById("menu").onclick = function () {
    clearTimeout(aiTimer);

    document.getElementById("setup").classList.remove("hidden");
    document.getElementById("game").classList.add("hidden");
};

$("reset").onclick = init;