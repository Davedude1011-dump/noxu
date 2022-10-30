var jumpscare = false

function flicker2() {
    document.querySelector(".rengoku_jumpscare").style.backgroundColor = "black"
    setTimeout(() => {  flicker1() }, 1);
}
function flicker1() {
    document.querySelector(".rengoku_jumpscare").style.backgroundColor = "white"
    setTimeout(() => {  flicker2() }, 1);
}

function jumpscare() {
    console.log("2")
    document.querySelector(".rengoku_jumpscare").style.display = "block"
    flicker1()
}

function jumpscare_start() {
    if (jumpscare == true) {
        document.querySelector(".rengoku_nice").style.display = "block"
        console.log("1")
        setTimeout(() => {  jumpscare() }, 1500);
    }
}