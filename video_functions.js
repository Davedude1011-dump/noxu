var is_fullscreen = false
var v = document.querySelector(".video_screen")
var b = document.querySelector(".fullscreen_switch_button")

function toggleFullScreen() {
    if (is_fullscreen === false) {
        v.style.width = "100vw"
        v.style.height = "100vh"
        v.style.left = "50%"
        v.style.top = "50%"
        v.style.zIndex = "998"
        b.style.left = "0"
        b.style.top = "0"
        b.style.translate = "0 0"
        b.style.width = "50px"
        is_fullscreen = true
    }
    else {
        v.style.width = "800px"
        v.style.height = "450px"
        v.style.left = "50%"
        v.style.top = "50%"
        v.style.zIndex = "998"
        b.style.left = "50%"
        b.style.top = "calc(45vh + 280px + 50px + 10px)"
        b.style.translate = "-50% 0"
        b.style.width = "200px"
        is_fullscreen = false
    }
}

window.addEventListener("keydown", function(event) {
	if (event.key == 'f') {
		toggleFullScreen()
	}
});