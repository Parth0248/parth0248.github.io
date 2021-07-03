function sendResponse() {

    let name = $("#name").val()
    let skill = $("#skill").val()
    let level = $("#level").val()

    if (name == "" || skill == "" || level == null) {
        $("#error").css("display", "block")
        return false
    }

    $("#error").css("display", "none")
    $("#reviews").append("<tr><td>" + name + "</td><td>" + skill + "</td><td>" + level + "</td></tr>")
    $("#reviewer")[0].reset()

    let review = {
        "name": name,
        "skill": skill,
        "level": level
    }

    let respj = localStorage.getItem("Reviews");
    let resp = JSON.parse(respj);
    if (resp == null) {
        resp = [];
    }
    
    resp.push(review);
    localStorage.setItem("Reviews", JSON.stringify(resp));
    return true
}

/*********************/

// function showResp() {
//     var reviewjson = localStorage.getItem("Reviews");
//     var reviews = JSON.parse(reviewjson);
//     if (reviews == null) {
//         reviews = [];
//     }

//     reviews.forEach(function (obj) {
//         $("#reviews").append("<tr><td>" + obj.name + "</td><td>" + obj.skill + "</td><td>" + obj.level + "</td></tr>")
//     })
// }
// window.onload = showResp;


/**********************************/


var mySong = document.getElementById("mysong");
var icon = document.getElementById("mus-icon");

icon.onclick = function () {
    if (mySong.paused) {
        mySong.play();
        icon.src = "../img/pause.png";
    } else {
        mySong.pause();
        icon.src = "../img/play.png"
    }
}
function music_sort() {
    mySong.pause();
}

let next = document.getElementById("HobbyImg");
let hbtext = document.getElementById("HobbyText");
let count = 1;
next.onclick = function () {
    if (count == 0) {
        next.src = "https://resize.indiatvnews.com/en/resize/newbucket/715_-/2020/04/pjimage-2020-04-15t081910-1586918957.jpg";
        hbtext.textContent = "I love Playing and watching football. I am a huge FCB fan and usually play as a defender."
        count++;
    }
    else if (count == 1) {
        next.src = "https://wallpapercave.com/wp/wp1852922.jpg";
        hbtext.textContent = "I have been playing badminton since 3rd grade and I even represented my school for 3 consecutive years in District Level competitions."
        count++;
    }
    else if (count == 2) {
        next.src = "https://www.mwallpapers.com/photos/celebrities/hd-wallpapers/astronaut-humor-guitar-android-iphone-hd-wallpaper-background-downloadhd-wallpapers-desktop-background-android-iphone-1080p-4k-adnfx.jpg?v=1616545961"
        hbtext.textContent = "I love singing and i even play guitar in free time. I have performed in many interschool competitions and even won few XD";
        count++;
    }
    else if (count == 3) {
        next.src = "https://static01.nyt.com/images/2019/07/13/arts/bob-ross-oak_blue-ridge-falls/bob-ross-oak_blue-ridge-falls-jumbo-v2.jpg?quality=90&auto=webp"
        hbtext.textContent = "I sketch and paint whenever I wanna take a break from screen. It boosts my creativity, reduces stress and calms my mind down"
        count++;
    }
    else if (count == 4) {
        next.src = "https://www.cookforindia.com/wp-content/uploads/2016/08/Paneer-Tikka-_LR-1140x500.jpg"
        hbtext.textContent = "Just added this photo to make y'all hungry XD"
        count = 0;
    }

}

