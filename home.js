// computer window js:
var menu_loaded = false

function start_button_click() {
    if (menu_loaded === false) {
        document.querySelector(".hidden_menu").style.opacity = "0"
        document.querySelector(".hidden_menu").style.display = "block"
        setTimeout(() => {  
            document.querySelector(".hidden_menu").classList.remove("start_button_fade_out"); 
            document.querySelector(".hidden_menu").classList.add("start_button_fade_in") 
        }, 1000);
    
        document.querySelector(".start_button_outer").style.animation = "start_button_move 0.8s forwards"
    
        menu_loaded = true
    }
    else {
        document.querySelector(".hidden_menu").style.opacity = "1"
        document.querySelector(".hidden_menu").classList.add("start_button_fade_out");
        document.querySelector(".hidden_menu").classList.remove("start_button_fade_in");
    
        setTimeout(() => {  document.querySelector(".start_button_outer").style.animation = "start_button_move_back 0.8s forwards"; document.querySelector(".hidden_menu").style.display = "none" }, 1000);
    
        menu_loaded = false
    }
}

function linearEase(start, end, percent) {
    return start + ((end - start) * percent);
}

function animateTo(settings) {
    var elem = settings.element;
    var ease = settings.ease;
        
    var start = { left: elem.offsetLeft, top: elem.offsetTop };
    
    var lastTime = new Date().getTime();
    var timeLeft = settings.totalTime;
    
    function update() {
        var currentTime = new Date().getTime();
        var elapsed = currentTime - lastTime;
        timeLeft -= elapsed;
        lastTime = currentTime;
        
        var percentDone = 1 - timeLeft/settings.totalTime;
        
        elem.style.top = ease(start.top, settings.top, percentDone) + "px" ;
        
        if(timeLeft > 0) {
            setTimeout(update, 33);
        }   
    }

    update();
}



function credits_click() {
    document.querySelector(".credits_box_outer").style.animation = "fade_in 0.5s forwards"
    document.querySelector(".shows_box_outer").style.animation = "fade_out 0.5s forwards"
    document.querySelector(".settings_box_outer").style.animation = "fade_out 0.5s forwards"

    document.getElementById("credits_arrow").style.display = "block"
    document.getElementById("shows_arrow").style.display = "none"
    document.getElementById("settings_arrow").style.display = "none"

    document.querySelector(".shows_hidden_menu").style.opacity = "1"
    document.querySelector(".shows_hidden_menu").classList.add("menus_fade_out");
    document.querySelector(".shows_hidden_menu").classList.remove("menus_fade_in");

    document.querySelector(".credits_hidden_menu").style.opacity = "0"
    document.querySelector(".credits_hidden_menu").classList.remove("menus_fade_out");
    document.querySelector(".credits_hidden_menu").classList.add("menus_fade_in");

    document.querySelector(".settings_hidden_menu").style.opacity = "1"
    document.querySelector(".settings_hidden_menu").classList.add("menus_fade_out");
    document.querySelector(".settings_hidden_menu").classList.remove("menus_fade_in");

    animateTo({
        element: document.querySelector(".credits_box_outer"), 
        left: "75vh", 
        top: (50 * Math.max(document.documentElement.clientHeight, window.innerHeight || 0) / 100), 
        totalTime: 500,
        ease: linearEase
    })
    animateTo({
        element: document.querySelector(".shows_box_outer"), 
        left: "75vh", 
        top: (50 * Math.max(document.documentElement.clientHeight, window.innerHeight || 0) / 100) + 100, 
        totalTime: 500,
        ease: linearEase
    })
    animateTo({
        element: document.querySelector(".settings_box_outer"), 
        left: "75vh", 
        top: (50 * Math.max(document.documentElement.clientHeight, window.innerHeight || 0) / 100) + 200, 
        totalTime: 500,
        ease: linearEase
    })
}
function shows_click() {
    document.querySelector(".credits_box_outer").style.animation = "fade_out 0.5s forwards"
    document.querySelector(".shows_box_outer").style.animation = "fade_in 0.5s forwards"
    document.querySelector(".settings_box_outer").style.animation = "fade_out 0.5s forwards"

    document.getElementById("credits_arrow").style.display = "none"
    document.getElementById("shows_arrow").style.display = "block"
    document.getElementById("settings_arrow").style.display = "none"

    document.querySelector(".shows_hidden_menu").style.opacity = "0"
    document.querySelector(".shows_hidden_menu").classList.remove("menus_fade_out");
    document.querySelector(".shows_hidden_menu").classList.add("menus_fade_in");

    document.querySelector(".credits_hidden_menu").style.opacity = "1"
    document.querySelector(".credits_hidden_menu").classList.add("menus_fade_out");
    document.querySelector(".credits_hidden_menu").classList.remove("menus_fade_in");

    document.querySelector(".settings_hidden_menu").style.opacity = "1"
    document.querySelector(".settings_hidden_menu").classList.add("menus_fade_out");
    document.querySelector(".settings_hidden_menu").classList.remove("menus_fade_in");
    
    animateTo({
        element: document.querySelector(".credits_box_outer"), 
        left: "75vh", 
        top: (50 * Math.max(document.documentElement.clientHeight, window.innerHeight || 0) / 100) - 100, 
        totalTime: 500,
        ease: linearEase
    })
    animateTo({
        element: document.querySelector(".shows_box_outer"), 
        left: "75vh", 
        top: (50 * Math.max(document.documentElement.clientHeight, window.innerHeight || 0) / 100), 
        totalTime: 500,
        ease: linearEase
    })
    animateTo({
        element: document.querySelector(".settings_box_outer"), 
        left: "75vh", 
        top: (50 * Math.max(document.documentElement.clientHeight, window.innerHeight || 0) / 100) + 100, 
        totalTime: 500,
        ease: linearEase
    })
}
function settings_click() {
    document.querySelector(".credits_box_outer").style.animation = "fade_out 0.5s forwards"
    document.querySelector(".shows_box_outer").style.animation = "fade_out 0.5s forwards"
    document.querySelector(".settings_box_outer").style.animation = "fade_in 0.5s forwards"

    document.getElementById("credits_arrow").style.display = "none"
    document.getElementById("shows_arrow").style.display = "none"
    document.getElementById("settings_arrow").style.display = "block"

    document.querySelector(".shows_hidden_menu").style.opacity = "1"
    document.querySelector(".shows_hidden_menu").classList.add("menus_fade_out");
    document.querySelector(".shows_hidden_menu").classList.remove("menus_fade_in");

    document.querySelector(".credits_hidden_menu").style.opacity = "1"
    document.querySelector(".credits_hidden_menu").classList.add("menus_fade_out");
    document.querySelector(".credits_hidden_menu").classList.remove("menus_fade_in");

    document.querySelector(".settings_hidden_menu").style.opacity = "0"
    document.querySelector(".settings_hidden_menu").classList.remove("menus_fade_out");
    document.querySelector(".settings_hidden_menu").classList.add("menus_fade_in");
    
    animateTo({
        element: document.querySelector(".credits_box_outer"), 
        left: "75vh", 
        top: (50 * Math.max(document.documentElement.clientHeight, window.innerHeight || 0) / 100) - 200, 
        totalTime: 500,
        ease: linearEase
    })
    animateTo({
        element: document.querySelector(".shows_box_outer"), 
        left: "75vh", 
        top: (50 * Math.max(document.documentElement.clientHeight, window.innerHeight || 0) / 100) - 100, 
        totalTime: 500,
        ease: linearEase
    })
    animateTo({
        element: document.querySelector(".settings_box_outer"), 
        left: "75vh", 
        top: (50 * Math.max(document.documentElement.clientHeight, window.innerHeight || 0) / 100), 
        totalTime: 500,
        ease: linearEase
    })
}

// mobile window js:
function start_button_click_mobile() {
    document.querySelector("#mobile_start").classList.add("menus_fade_out")
    setTimeout(() => {  
        document.querySelector(".mob_menus").style.display = "block"
        document.querySelector(".mob_menus").classList.add("menus_fade_in")
        document.querySelector(".mob_menus").classList.remove("menus_fade_out")
     }, 800);
}