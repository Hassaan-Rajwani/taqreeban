// var todo2 = localStorage.setItem("Expense" , JSON.stringify([]))
var category = JSON.parse(localStorage.getItem("Category"))
var todo2 = JSON.parse(localStorage.getItem("Expense"))
var table2 = document.getElementById("table")
// neew()

function add2(){    
    var id2 =  Math.floor(100000 + Math.random() * 900000)
    var des2 = document.getElementById("exampleInputText1").value
    var amount2 = document.getElementById("exampleInputEmail1").value
    var category2 = document.getElementById("dropdown").value
    var time2 = new Date().toLocaleTimeString()
    
    var obj2 = {
        expenseId : id2, 
        expenseDes : des2, 
        expenseAmount : amount2, 
        expenseCategory : category2, 
        expenseTime : time2  
    }
    todo2.push(obj2)
    localStorage.setItem("Expense" , JSON.stringify(todo2))
    alert("Your Expense Was Added")
    document.getElementById("exampleInputText1").value = ""
    document.getElementById("exampleInputEmail1").value = ""
    document.getElementById("dropdown").value = ""
}
generate2()

function  generate2(){
    document.getElementById("table").innerText = ""
    for(var i = 0 ; i < todo2.length ; i++ ) {
        var tr = document.createElement("tr")
        var td1 = document.createElement("td")
        var td2 = document.createElement("td")
        var td3 = document.createElement("td")
        var td4 = document.createElement("td")
        var td5 = document.createElement("td")
        var delBtn = document.createElement("button")
        delBtn.innerText = "Delete"
        delBtn.id = "delbtn"
        delBtn.onclick = dlttbtn(i)
        var id = document.createTextNode(todo2[i].expenseId)
        var des = document.createTextNode(todo2[i].expenseDes)
        var amnt = document.createTextNode(todo2[i].expenseAmount)
        var cate = document.createTextNode(todo2[i].expenseCategory)
        var time = document.createTextNode(todo2[i].expenseTime)
            td1.appendChild(id)
            td2.appendChild(des)
            td3.appendChild(amnt)
            td4.appendChild(cate)
            td5.appendChild(time)
                tr.appendChild(td1)
                tr.appendChild(td2)
                tr.appendChild(td3)
                tr.appendChild(td4)
                tr.appendChild(td5)
                tr.appendChild(delBtn)
                    table2.appendChild(tr)
    }
}
function neew(){
    var down = document.getElementById("dropdown")
    for(var i = 0; i < category.length; i++){
        var op = document.createElement("option")
        var node = document.createTextNode(category[i].cateName)
        op.appendChild(node)
        down.appendChild(op)
    }
}
neew()

function dlttbtn(i){
    return function(){
        todo2.splice(i,1)
        localStorage.setItem("Expense" , JSON.stringify(todo2))
        generate2()
    }
}
start()