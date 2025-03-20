let p1 = document.getElementsByTagName('p')[0]
let p2 = document.getElementsByTagName('p')[1]
let p3 = document.getElementsByTagName('p')[2]
let body = document.body
p1.addEventListener("click", function () {
    body.style.background = "green"
})
p2.addEventListener("click", function () {
    body.style.background = "red"
})
p3.addEventListener("click", function () {
    body.style.background = "pink"
}) 