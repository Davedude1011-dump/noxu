var light_mode = true

function color_switch() {
    if (light_mode === true) {
        document.querySelector(":root").style.setProperty("--main-color", "black")
        document.querySelector(":root").style.setProperty("--anti-color", "white")
        light_mode = false
    }
    else {
        document.querySelector(":root").style.setProperty("--main-color", "white")
        document.querySelector(":root").style.setProperty("--anti-color", "black")
        light_mode = true
    }
}