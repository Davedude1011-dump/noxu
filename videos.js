// link variables :D

// Demon Slayer:

var demonSlayer = [
    "1fwk17wHhNv7MGhOis7o1GK6VcpfnGT5k",
    "1dm_z84sBvyqUAIxlfxlsIPIX9d3RB3xC",
    "1Lbx2AnXcC23qPjcxHtuExGt_om2R9XIL",
    "1RJrrIoJrueJXeynwYhCXzdF89jZfte_-",
    "1bsqnO1LdfFDC-t5GydO0TMHXQPccS2ew",
    "1f_U0jzYuagcrFDH-9LsuWXA5C2BN3HEr",
    "1WZNO0Jm18KqdfuZq5Z1tYGh66VtvMAWZ",
    "1LeB5xTwdm2QEpYmPfSDNxlQ-LKqZyDiH",
    "1hkMoBQdPXO5gUo7xysxnYBLYFaKccvcn",
    "1fSqywN2g7--MXo7Y8s0O52nN5vThrGOB",
    "1y37EqYNekE3nbHGo20QiYR2T9FOEd1p0",
    "1iTNFrGeVr_rrekzi_zNOSolZ_AGVkifd",
    "1767lBLSMkef3zFDnCRRfHQx2LKeS_m-9",
    "1CWkIkjZCUQgmiUlqfHp4Isqfes4VHanx",
    "1DqhLPjDm_jcrSmdZalS_-IqjV6TYvfvR",
    "1mHpRYEl4e3kqbUzFQEGPbcniPcf81Yud",
    "1xmvTUa5VRo-zSMT4y7xysXDYnu0fB4wT",
    "1roDmbYlZSEF6jR2sCZ67jadnm-B5wTU4",
    "1QEYMNcVNJuHqVUA6JZisWYJ3qYeHPXhN",
    "1BqM8dG0HUhFeUz8T0u4XDDdqxrXnJAt7",
    "1U4fUOYlSaFRgygQ7gplizynDy9NzPmaM",
    "1snBsBnTvdEdZk_2nctoDS_67B9JwWVsi",
    "1aWGY6p4oFcBGyJg6xiN7n-liB9-rjcFx",
    "1_rKxHVq9diYwmRCTqBLpAZDC3Sa9ONr4",
    "1OIFj5uWMzIIYvqdp_pjAtsVuIHwzlOjg",
    "1FROGlBWfO6ZnkEeJ6I0hrL8htJ0sMmV0",
    "1TO0vsu2RXtiOwqgpcmukUeVj3hkKfv2v",
    "17G2NckwC_H0byp-R9kIckddUv_lcgBUJ",
    "1Bbid-fzmw8x02nCClZZOw14aVuYtwli5",
    "1WVS7Xf9lTc8oJCpQlsQ8JUFd1sW1GR5I",
    "1EllydYQFHmHAc0nFRs9QN6bcRf6JvEo4",
    "1dBUx35tPR3XflJkuflNHT1gezKkuvjus",
    "1B33cEHWSXaBZugGQyQJceCdbZBaAwsYW",
    "1jjV30pIYlQxwkE8HgDWOVmri7-kutM8s",
    "1A4y9a_qP1sddXDAtCTyAGK_93egir8rb",
    "1qgAMXDweyL0-pWR1bEROddZa7wBxtsBO",
    "19rz8mOv5RAsBqESsf7GzoYUMRJDbIZ5K",
]
var demonSlayerNums = [
    "S1 E1",
    "S1 E2",
    "S1 E3",
    "S1 E4",
    "S1 E5",
    "S1 E6",
    "S1 E7",
    "S1 E8",
    "S1 E9",
    "S1 E10",
    "S1 E11",
    "S1 E12",
    "S1 E13",
    "S1 E14",
    "S1 E15",
    "S1 E16",
    "S1 E17",
    "S1 E18",
    "S1 E19",
    "S1 E20",
    "S1 E21",
    "S1 E22",
    "S1 E23",
    "S1 E24",
    "S1 E25",
    "S1 E26",
    "S2 E1",
    "S2 E2",
    "S2 E3",
    "S2 E4",
    "S2 E5",
    "S2 E6",
    "S2 E7",
    "S2 E8",
    "S2 E9",
    "S2 E10",
    "S2 E11",
]
var demonSlayerTitles = [
    "Cruelty",
    "Trainer Sakonji Urokodaki",
    "Sabito and Makomo",
    "Final Selection",
    "My Own Steel",
    "Swordsman Accompanying a Demon",
    "Muzan Kibutsuji",
    "The Smell of Enchanting Blood",
    "Temari Demon and Arrow Demon",
    "Together Forever",
    "Tsuzumi Mansion",
    "The Boar Bares Its Fangs, Zenitsu Sleeps",
    "Something More Important Than Life",
    "The House with the Wisteria Family Crest",
    "Mount Natagumo",
    "Letting Someone Else Go First",
    "You Must Master a Single Thing",
    "A Forged Bond",
    "Hinokami",
    "Pretend Family",
    "Against Corps Rules",
    "Master of the Mansion",
    "Hashira Meeting",
    "Rehabilitation Training",
    "Tsuguko, Kanao Tsuyuri",
    "New Mission",
    "Sound Hashira Tengen Uzui",
    "Infiltrating the Entertainment District",
    "What Are You?",
    "Tonight",
    "Things Are Gonna Get Real Flashy!",
    "Layered Memories",
    "Layered Memories",
    "Gathering",
    "Defeating an Upper Rank Demon",
    "I Will Never Give Up",
    "No Matter How Many Times We Reborn",
]

// --------------

var show = "demonSlayer"
var epNum = "1"

function nextEp() {
    if (show === "demonSlayer") {
        if (epNum <= demonSlayer.length-1) {
            epNum ++
            var epID = demonSlayer[epNum-1]
            var epShowNum = demonSlayerNums[epNum-1]
            var epTitle = demonSlayerTitles[epNum-1]
            console.log(epID)
            document.querySelector(".video_screen").src = "https://drive.google.com/file/d/" + epID + "/preview"
            document.querySelector(".episode_num").textContent = epShowNum
            document.querySelector(".episode_title").textContent = epTitle
        }
        else {
            epNum = 1
            var epID = demonSlayer[epNum-1]
            var epShowNum = demonSlayerNums[epNum-1]
            var epTitle = demonSlayerTitles[epNum-1]
            console.log(epID)
            document.querySelector(".video_screen").src = "https://drive.google.com/file/d/" + epID + "/preview"
            document.querySelector(".episode_num").textContent = epShowNum
            document.querySelector(".episode_title").textContent = epTitle
        }
    }
}
function prevEp() {
    if (show === "demonSlayer") {
        if (epNum > 1) {
            epNum -= 1
            var epID = demonSlayer[epNum-1]
            var epShowNum = demonSlayerNums[epNum-1]
            var epTitle = demonSlayerTitles[epNum-1]
            console.log(epID)
            document.querySelector(".video_screen").src = "https://drive.google.com/file/d/" + epID + "/preview"
            document.querySelector(".episode_num").textContent = epShowNum
            document.querySelector(".episode_title").textContent = epTitle
        }
        else {
            epNum = demonSlayer.length
            var epID = demonSlayer[epNum-1]
            var epShowNum = demonSlayerNums[epNum-1]
            var epTitle = demonSlayerTitles[epNum-1]
            console.log(epID)
            document.querySelector(".video_screen").src = "https://drive.google.com/file/d/" + epID + "/preview"
            document.querySelector(".episode_num").textContent = epShowNum
            document.querySelector(".episode_title").textContent = epTitle
        }
    }
}