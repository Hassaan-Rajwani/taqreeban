var namee = document.getElementById("usr")
var data = JSON.parse( localStorage.getItem("currentUser"))
namee.innerHTML = " " + data.name

function out(){
    location.href="./index.html"
    JSON.parse( localStorage.removeItem("currentUser"))
}
