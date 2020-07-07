function buttonClicked(val) {
    var screen = document.getElementById("screen");
    screen.value += val;

}

function getResult() {
    var screenTotal = document.getElementById("screen");
    //console.log(eval(screenTotal));
    var checkValue = screenTotal.value;
    var arrayCheckValue = checkValue.split("");
    var finalValue = "";

    for (var i = 0; i < arrayCheckValue.length; i++) {
        var show = arrayCheckValue.slice(i, i + 2);
        console.log("Check slice: " + show.join("").replace(",", ""));
        if (show.join("") === "++"
            || show === "--"
            || show === "**"
            || show === "//"
            || show === "%%") {
            screenTotal.value = "Invalid Selection";
            break;
        } else if (arrayCheckValue[arrayCheckValue.length - 1] === "+"
            || arrayCheckValue[arrayCheckValue.length - 1] === "-"
            || arrayCheckValue[arrayCheckValue.length - 1] === "*"
            || arrayCheckValue[arrayCheckValue.length - 1] === "/"
            || arrayCheckValue[arrayCheckValue.length - 1] === "%") {
            screenTotal.value = "Invalid Selection";
            break;
        }

        else {
            finalValue += show.join("");

        }

    }
    screenTotal.value = eval(screenTotal.value);


}

function clearScreen() {
    var screen = document.getElementById("screen");
    screen.value = "";
}