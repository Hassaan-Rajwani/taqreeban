var todo = JSON.parse(localStorage.getItem("Category"))
var todo = JSON.parse(localStorage.getItem("Expense"))
if(todo == null){
    todo = []
}
else{
    var todo = JSON.parse(localStorage.getItem("Category"))
}
var table = document.getElementById("table2")
neew()

function add(){    
    var id =  Math.floor(100000 + Math.random() * 900000)
    var name = document.getElementById("exampleInputText1").value
    var time = new Date().toLocaleTimeString()
    
    var obj = {
        cateId : id,  
        cateName : name, 
        cateTime : time  
    }
    todo.push(obj)
    localStorage.setItem("Category" , JSON.stringify(todo))
    generate()
    alert("Your Category Was Added")
    document.getElementById("exampleInputText1").value = ""
}
function  generate(){
    document.getElementById("table2").innerText = ""
    for(var i = 0; i < todo.length; i++){
        var tr = document.createElement("tr")
        var td1 = document.createElement("td")
        var td2 = document.createElement("td")
        var td3 = document.createElement("td")
        var catedelBtn = document.createElement("button")
        catedelBtn.innerText = "Delete"
        catedelBtn.id = "delbtn"
        catedelBtn.onclick = dlttbtn(i)
        var id = document.createTextNode(todo[i].cateId)
        var nme = document.createTextNode(todo[i].cateName)
        var time = document.createTextNode(todo[i].cateTime)
            td1.appendChild(id)
            td2.appendChild(nme)
            td3.appendChild(time)
                tr.appendChild(td1)
                tr.appendChild(td2)
                tr.appendChild(td3)
                tr.appendChild(catedelBtn)
                    table.appendChild(tr)
    }
}
generate()

function dlttbtn(i){
    return function(){
        todo.splice(i,1)
        localStorage.setItem("Category" , JSON.stringify(todo))
        generate()
    }
}