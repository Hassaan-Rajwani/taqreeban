// var user = localStorage.setItem("allUser" , JSON.stringify([]))
function app(){
    var userId = Math.floor(100000 + Math.random() * 900000)
    var user = JSON.parse(localStorage.getItem("allUser"))
    var username = document.getElementById("exampleInputText1").value
    var usermail = document.getElementById("exampleInputEmail1").value
    var userpass = document.getElementById("exampleInputPassword1").value
    
    var obj = {
        id:userId, 
        name:username,
        gmail:usermail,
        password:userpass
    }
    
    if(username == ""){
        alert("Please Complete Details")
    }
    else if (usermail == ""){
        alert("Please Complete Details")
    }
    else if(userpass == ""){
        alert("Please Complete Details")
    }
    else{
        user.push(obj)
        localStorage.setItem("allUser" , JSON.stringify(user))
        location.href = "./userr.html";
        alert("Your Account Was Successfully Created")
        var current = localStorage.setItem("currentUser" , JSON.stringify(user.pop()))
    }
    document.getElementById("exampleInputText1").value = ""
    document.getElementById("exampleInputEmail1").value = ""
    document.getElementById("exampleInputPassword1").value = ""
}