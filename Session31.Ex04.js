let but=document.getElementsByTagName("button")[0]
let p=document.getElementsByTagName("p")[1]
let div=document.getElementsByTagName("div")[0]
let body=document.body
but.addEventListener("click",function(){
    div.style.display="block"
    body.style.background="grey"
})
p.addEventListener("click",function(){
    div.style.display="none"
    body.style.background="white"
})