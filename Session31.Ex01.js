let text=document.getElementById("text")
let buttonHide=document.getElementById("hide-text")
let buttonShow=document.getElementById("show-text")
buttonHide.addEventListener("click",function(){
    text.style.display ="none"
})
buttonShow.addEventListener("click",function(){
    text.style.display ="block"
})