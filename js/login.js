var data = JSON.parse(localStorage.getItem("allUser"))

function isCheck(){
    var mail = document.getElementById("exampleInputEmail1").value
    var pass = document.getElementById("exampleInputPassword1").value

    var em = data.find((item) => item.gmail == mail)
    var ps = data.find((item) => item.password == pass)

    if(em && ps){
        var current = localStorage.setItem("currentUser" , JSON.stringify(em))
        location.href= "./userr.html"
        alert("Your Account Was SuccessFully Opened")
    }
    else{
        alert("Wrong")
    }
    document.getElementById("exampleInputEmail1").value = ""
    document.getElementById("exampleInputPassword1").value = ""
}


