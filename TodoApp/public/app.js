var item = document.getElementById("txtTodo");
var list = document.getElementById("list");

function addItem() {

    //List 
    let li = document.createElement("li");
    let liText = document.createTextNode(item.value);
    li.appendChild(liText);




    // Delete Button
    let deleteButton = document.createElement("button")
    deleteButton.setAttribute("onclick", "removeItem(this)");
    let deleteText = document.createTextNode("Delete");
    deleteButton.appendChild(deleteText);

    li.appendChild(deleteButton);

    // Edit Button

    let editButton = document.createElement("button")
    editButton.setAttribute("onclick", "editUser(this)");
    let editText = document.createTextNode("Edit");
    editButton.appendChild(editText);

    li.appendChild(editButton);/*  */


    list.appendChild(li);

    item.value = "";

}


function removeItem(e) {
    e.parentNode.remove();
}

function removeAll() {
    list.innerHTML = '';
}



function editUser(e) {
    let editText = "";
    editText = e.parentNode.firstChild.nodeValue;
    let toBeEditText = prompt("Edit the value", editText);

    e.parentNode.firstChild.nodeValue = toBeEditText;


    console.log(editText);

}

