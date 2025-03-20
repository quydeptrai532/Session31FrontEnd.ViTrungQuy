let body = document.body
let text = document.getElementsByClassName("text")
let button = document.getElementById("toggle")
let isdakrmode = false
button.addEventListener(`click`, function () {
    isdakrmode = !isdakrmode
    if (isdakrmode) {
        body.style.background = "black"
        for (i = 0; i < text.length; i++) {
            text[i].style.color = "white"
        }
    }
    else {
        body.style.background = "white"
        for (i = 0; i < text.length; i++) {
        text[i].style.color = "black"
        }
    }


})