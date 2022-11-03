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
    document.querySelector(".credits_hidden_menu").style.display = "block"

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

    setTimeout(() => {
        document.querySelector(".settings_hidden_menu").style.display = "none"
        document.querySelector(".shows_hidden_menu").style.display = "none"
    }, 200);

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
    document.querySelector(".shows_hidden_menu").style.display = "block"

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

    setTimeout(() => {
        document.querySelector(".credits_hidden_menu").style.display = "none"
        document.querySelector(".settings_hidden_menu").style.display = "none"
    }, 200);
    
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
    document.querySelector(".settings_hidden_menu").style.display = "block"
    
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

    setTimeout(() => {
        document.querySelector(".credits_hidden_menu").style.display = "none"
        document.querySelector(".shows_hidden_menu").style.display = "none"
    }, 200);
    
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
function credits_mob() {
    document.querySelector(".mob_menus").style.opacity = 1
    document.querySelector(".mob_menus").classList.add("menus_fade_out")
    document.querySelector(".mob_menus").classList.remove("menus_fade_in")

    setTimeout(() => {
        document.querySelector(".credits_menu_mob").style.display = "block"
        document.querySelector(".credits_menu_mob").style.opacity = 0
        document.querySelector(".credits_menu_mob").classList.add("menus_fade_in")
        document.querySelector(".credits_menu_mob").classList.remove("menus_fade_out")
    }, 800);
}
function credits_mob_close() {
    document.querySelector(".credits_menu_mob").style.opacity = 1
    document.querySelector(".credits_menu_mob").classList.add("menus_fade_out")
    document.querySelector(".credits_menu_mob").classList.remove("menus_fade_in")
    setTimeout(() => {  
        document.querySelector(".credits_menu_mob").style.display = "none"
        document.querySelector(".mob_menus").style.opacity = 0
        document.querySelector(".mob_menus").classList.add("menus_fade_in")
        document.querySelector(".mob_menus").classList.remove("menus_fade_out")
     }, 800);
}

function shows_mob() {
    document.querySelector(".mob_menus").style.opacity = 1
    document.querySelector(".mob_menus").classList.add("menus_fade_out")
    document.querySelector(".mob_menus").classList.remove("menus_fade_in")

    setTimeout(() => {
        document.querySelector(".mob_shows").style.display = "block"
        document.querySelector(".mob_shows").style.opacity = 0
        document.querySelector(".mob_shows").classList.add("menus_fade_in")
        document.querySelector(".mob_shows").classList.remove("menus_fade_out")
    }, 800);
}
function shows_mob_close() {
    document.querySelector(".mob_shows").style.opacity = 1
    document.querySelector(".mob_shows").classList.add("menus_fade_out")
    document.querySelector(".mob_shows").classList.remove("menus_fade_in")
    setTimeout(() => {  
        document.querySelector(".mob_shows").style.display = "none"
        document.querySelector(".mob_menus").style.opacity = 0
        document.querySelector(".mob_menus").classList.add("menus_fade_in")
        document.querySelector(".mob_menus").classList.remove("menus_fade_out")
     }, 800);
}

function settings_mob() {
    document.querySelector(".mob_menus").style.opacity = 1
    document.querySelector(".mob_menus").classList.add("menus_fade_out")
    document.querySelector(".mob_menus").classList.remove("menus_fade_in")

    setTimeout(() => {
        document.querySelector(".mob_settings").style.display = "block"
        document.querySelector(".mob_settings").style.opacity = 0
        document.querySelector(".mob_settings").classList.add("menus_fade_in")
        document.querySelector(".mob_settings").classList.remove("menus_fade_out")
    }, 800);
}
function settings_mob_close() {
    document.querySelector(".mob_settings").style.opacity = 1
    document.querySelector(".mob_settings").classList.add("menus_fade_out")
    document.querySelector(".mob_settings").classList.remove("menus_fade_in")
    setTimeout(() => {  
        document.querySelector(".mob_settings").style.display = "none"
        document.querySelector(".mob_menus").style.opacity = 0
        document.querySelector(".mob_menus").classList.add("menus_fade_in")
        document.querySelector(".mob_menus").classList.remove("menus_fade_out")
     }, 800);
}

var shows_page = 1
function mob_shows_next() {
    if (shows_page === 1) {
        document.querySelector(".mob_shows").style.opacity = 1
        document.querySelector(".mob_shows").classList.add("menus_fade_out")
        document.querySelector(".mob_shows").classList.remove("menus_fade_in")
        setTimeout(() => {  
        document.querySelector(".mob_shows_2").style.display = "block"
            document.querySelector(".mob_shows").style.display = "none"
            document.querySelector(".mob_shows_2").style.opacity = 0
            document.querySelector(".mob_shows_2").classList.add("menus_fade_in")
            document.querySelector(".mob_shows_2").classList.remove("menus_fade_out")
         }, 800);
    }
    shows_page ++
}
function mob_shows_prev() {
    if (shows_page === 2) {
        document.querySelector(".mob_shows_2").style.opacity = 1
        document.querySelector(".mob_shows_2").classList.add("menus_fade_out")
        document.querySelector(".mob_shows_2").classList.remove("menus_fade_in")
        setTimeout(() => {
            document.querySelector(".mob_shows").style.display = "block"
            document.querySelector(".mob_shows_2").style.display = "none"
            document.querySelector(".mob_shows").style.opacity = 0
            document.querySelector(".mob_shows").classList.add("menus_fade_in")
            document.querySelector(".mob_shows").classList.remove("menus_fade_out")
         }, 800);
    }
    shows_page -= 1
}

function shows_next() {
    if (shows_page === 1) {
        document.querySelector(".shows_hidden_menu").style.opacity = 1
        document.querySelector(".shows_hidden_menu").classList.add("menus_fade_out")
        document.querySelector(".shows_hidden_menu").classList.remove("menus_fade_in")
        setTimeout(() => {  
            document.querySelector(".shows_hidden_menu_2").style.display = "block"
            document.querySelector(".shows_hidden_menu").style.display = "none"
            document.querySelector(".shows_hidden_menu_2").style.opacity = 0
            document.querySelector(".shows_hidden_menu_2").classList.add("menus_fade_in")
            document.querySelector(".shows_hidden_menu_2").classList.remove("menus_fade_out")
         }, 800);
    }
    shows_page ++
}
function shows_prev() {
    if (shows_page === 2) {
        document.querySelector(".shows_hidden_menu_2").style.opacity = 1
        document.querySelector(".shows_hidden_menu_2").classList.add("menus_fade_out")
        document.querySelector(".shows_hidden_menu_2").classList.remove("menus_fade_in")
        setTimeout(() => {  
        document.querySelector(".shows_hidden_menu").style.display = "block"
            document.querySelector(".shows_hidden_menu_2").style.display = "none"
            document.querySelector(".shows_hidden_menu").style.opacity = 0
            document.querySelector(".shows_hidden_menu").classList.add("menus_fade_in")
            document.querySelector(".shows_hidden_menu").classList.remove("menus_fade_out")
         }, 800);
    }
    shows_page -= 1
}


function pickShow(ID) {
    var pickedShow = ID
    console.log(pickedShow)
    localStorage.setItem("chosenShow", pickedShow); 
}