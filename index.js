var op;
function func() {
    var result;
    var perviy = Number(document.getElementById("perviy").value);
    var vtoroy = Number(document.getElementById("vtoroy").value);
    switch (op) {
        case '+':
            result = perviy + vtoroy;
            break;
        case '-':
            result = perviy - vtoroy;
            break;
        case '*':
            result = perviy * vtoroy;
            break;
        case '/':
            result = perviy / vtoroy;
            break;
    }
    document.getElementById("result").innerHTML = result;
}