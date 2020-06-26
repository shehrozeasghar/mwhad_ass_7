function ScreenIn(number) {
    var result = document.getElementById("result")
    result.value += number
}

function clearScreen() {
    var result = document.getElementById("result")
    result.value = ""
}

function Resultant() {
    var result = document.getElementById("result")
    result.value = eval(result.value)
}