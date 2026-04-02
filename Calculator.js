let display = document.getElementById("result");
let history = document.getElementById("history");

/* Clear */
function clean() {
    display.innerText = "0";
    history.innerText = "";
}

/* Numbers */
function num(n) {
    if (display.innerText === "0") {
        display.innerText = n;
    } else {
        display.innerText += n;
    }
}

/* Operators */
function operator(op) {
    history.innerText = display.innerText + " " + op;
    display.innerText = "0";
}

/* Equal */
function equal() {
    let exp = history.innerText + display.innerText;
    try {
        let result = eval(exp);
        history.innerText = exp;
        display.innerText = result;
    } catch {
        display.innerText = "Error";
    }
}

/* Erase */
function erase() {
    display.innerText = display.innerText.slice(0, -1) || "0";
}

/* Decimal */
function decimal() {
    if (!display.innerText.includes(".")) {
        display.innerText += ".";
    }
}

/* Percent */
function percent() {
    display.innerText = display.innerText / 100;
}